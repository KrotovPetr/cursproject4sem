import Router from 'express';
import userController from "../controllers/userController";
import {body} from 'express-validator';
import {authMiddlewareFunc} from "../middlewares/authMiddleware";

export const userRouter = Router();
userRouter.post('/login', userController.loginToAccount);
userRouter.post('/logout', userController.logoutFromAccount);
userRouter.post('/registration', body('email').isEmail(),body('password').isLength({min:3, max:32}),userController.registrationNewUser);
userRouter.post('/reset-password',body('email').isEmail(),userController.forgotPassword);

userRouter.patch('/new-password',body('password').isLength({min:3, max:32}),userController.validTheRequest);

userRouter.get('/activate/:link', userController.activateAccount);
userRouter.get('/refresh', userController.refreshToken);
// @ts-ignore
userRouter.get('/', authMiddlewareFunc, userController.getAllUsers);