import Router from 'express';
import {userRouter} from "./userRoutes";


export const router = Router();

router.use('/user', userRouter)
router.use('/hello', (req, res)=>{
    return {status:200, data: res.json("Hello, dear!")}
})
