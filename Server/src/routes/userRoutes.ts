import Router from 'express';
import userController from "../controllers/userController";

export const userRouter = Router();

userRouter.post('/', userController.createUser)
userRouter.get('/all', userController.getAllUsers)
userRouter.get('/current', userController.getOneUser)