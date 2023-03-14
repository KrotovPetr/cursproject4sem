import Router from 'express';
import userController from "../controllers/userController";

export const userRouter = Router();

// userRouter.post('/login', userController.getAllUsers);
// userRouter.post('/logout', userController.getAllUsers);
userRouter.post('/registration', userController.registrationNewUser);

userRouter.get('/activate/:link', userController.activateAccount);
// userRouter.get('/refresh', userController.getAllUsers);
userRouter.get('/', userController.getAllUsers);