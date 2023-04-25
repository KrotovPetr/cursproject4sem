import Router from "express";
import goodController from "../controllers/goodController";

export const goodRouter = Router();
goodRouter.get('/', goodController.getAllGoods);

