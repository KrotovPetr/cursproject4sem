import Router from 'express';
import {userRouter} from "./userRoutes";
import {orderRouter} from "./orderRoutes";
import {goodRouter} from "./goodRoutes";
import {serviceRouter} from "./serviceRoutes";


const router = Router();

router.use('/users', userRouter);
router.use('/orders', orderRouter);
router.use('/goods', goodRouter);
router.use('/services', serviceRouter);

export default router;