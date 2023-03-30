import Router from 'express';
import {userRouter} from "./userRoutes";
import {orderRouter} from "./orderRoutes";
import {goodRouter} from "./goodRoutes";


const router = Router();

router.use('/users', userRouter);
router.use('/orders', orderRouter);
router.use('/goods', goodRouter);

export default router;