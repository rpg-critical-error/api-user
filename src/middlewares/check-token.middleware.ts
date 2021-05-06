import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const checkToken = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const { authorization } = request.headers;

        const token = authorization?.split(' ')[0];
        if (!authorization || !token) {
            return response
                .json({ error: 'Token needs to be passed.' })
                .status(401);
        }

        const json = jwt.verify(token, process.env.SECRET || '1234');

        if (!json) {
            return response.json({ error: 'Token is invalid.' }).status(401);
        }

        return next();
    } catch (e) {
        console.log(e);
        return response.json({ error: 'Token is invalid.' }).status(401);
    }
};
