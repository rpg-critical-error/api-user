import { NextFunction, Request, Response } from 'express';
import Joi, { ObjectSchema } from 'joi';

const validateRequest = (
    request: Request,
    response: Response,
    next: NextFunction,
    schema: ObjectSchema
) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
    };

    const { error, value } = schema.validate(request.body, options);

    if (!error) {
        request.body = value;
        return next();
    }

    const JoiError = {
        status: 'failed',
        error: {
            original: error._original,
            details: error.details.map(({ message, type }) => ({
                message: message.replace(/['"]/g, ''),
                type,
            })),
        },
    };
    // Send back the JSON error response
    return response.status(422).json(JoiError);
};

export const UserValidator = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const schema = Joi.object({
        name: Joi.string().required().min(6),
        nickname: Joi.string().required().min(6),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(8),
    });

    return validateRequest(request, response, next, schema);
};
