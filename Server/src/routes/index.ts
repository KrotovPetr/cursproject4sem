import Router from 'express';
import {userRouter} from "./userRoutes";
import {authMiddlewareFunc} from "../middlewares/authMiddleware";


const router = Router();

router.use('/users', userRouter);

export default router;