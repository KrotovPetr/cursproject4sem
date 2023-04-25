import express from "express";
import userService from "../services/userService";
import {Goods} from "../models/db/Goods";

class GoodController {
    async getAllGoods(req: express.Request, res: express.Response, next:express.NextFunction){
        try{
            const goods = await Goods.findAll();
            return res.status(201).json(goods);
        }catch(e){
            next(e);
        }
    }
}

export default new GoodController();