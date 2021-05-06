import { Router } from 'express';
import { UserValidator } from '../middlewares/router-validator.middleware';
import { UserController } from '../controllers/userController';
import { checkToken } from '../middlewares/check-token.middleware';

const router = Router();
const userController = new UserController();

router.post('/', UserValidator, userController.store);
router.use(checkToken);
router.get('/', userController.get);
router.get('/:id', userController.getOne);

export default router;
