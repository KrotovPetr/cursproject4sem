import Router from "express";
import serviceController from "../controllers/serviceController";

export const serviceRouter = Router();
serviceRouter.get('/', serviceController.getAllServices);