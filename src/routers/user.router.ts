import { Router } from 'express';
import { UserValidator } from '../middlewares/router-validator';
import { UserController } from '../controllers/userController';

const router = Router();
const userController = new UserController();

router.get('/', userController.get);
router.get('/:id', userController.getOne);
router.post('/', UserValidator, userController.store);

export default router;
