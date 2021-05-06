import { Request, Response } from 'express';
import { models } from '../models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const User = models.User;

/**
 * This class is the controller for the User.
 */
export class UserController {
    /**
     * Get all users.
     * @async
     * @param  {Request} req
     * @param  {Response} res
     */
    async get(req: Request, res: Response) {
        try {
            const user = await User.findAll({
                attributes: ['name', 'nickname', 'id', 'email', 'confirmed'],
            });
            if (!user) {
                return res.json({ error: 'User not found' }).status(404);
            }
            return res.json(user);
        } catch (e) {
            console.log(e);
            return res.json({ error: e.message }).status(400);
        }
    }
    /**
     * Get one specific user.
     * @async
     * @param  {Request} req
     * @param  {Response} res
     */
    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id, {
                attributes: ['name', 'nickname', 'id', 'email', 'confirmed'],
            });
            return res.json(user);
        } catch (e) {
            console.log(e);
            return res.json({ error: e.message }).status(400);
        }
    }

    /**
     * Store one user.
     * @async
     * @param  {Request} req
     * @param  {Response} res
     */
    async store(req: Request, res: Response) {
        try {
            const data = req.body;
            console.log(data);
            const user = await User.findOne({
                where: {
                    email: data?.email,
                },
            });
            if (user) {
                return res.json({ error: 'User has an accout' }).status(404);
            }
            const userCreated = await User.create(data);
            if (userCreated) {
                return res.json({ status: 'success' });
            } else {
                return res.json({ status: 'failed' }).status(402);
            }
        } catch (e) {
            console.log(e);
            return res.json({ error: e.message }).status(400);
        }
    }

    /**
     * This function is used for get token for authorization.
     * @async
     * @param  {Request} req
     * @param  {Response} res
     */
    async auth(req: Request, res: Response) {
        try {
            const data = req.body;

            const user = await User.findOne({
                where: {
                    email: data?.email,
                },
            });
            if (!user) {
                return res
                    .json({ error: 'Credentials are incorrect!' })
                    .status(404);
            }
            if (!bcrypt.compareSync(data.password, user.password)) {
                return res
                    .json({ error: 'Credentials are incorrect!' })
                    .status(404);
            }
            const payload = {
                id: user.id,
                email: user.nickname,
                type: 'user',
            };

            const expiresIn = data.continue ? '7d' : '1d';

            const token = jwt.sign(payload, process.env.SECRET || '', {
                expiresIn,
            });
            return res.json({ token, name: user.name, email: user.email });
        } catch (e) {
            console.log(e);
            return res.json({ error: e.message }).status(400);
        }
    }
}

export default new UserController();
