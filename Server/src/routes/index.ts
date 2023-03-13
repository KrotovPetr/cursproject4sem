import Router from 'express';
import {User} from "../models/db/User";


const router = Router();

router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
});

export default router;