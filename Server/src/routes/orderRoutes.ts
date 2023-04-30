import Router from "express";
import orderController from "../controllers/orderController";

export const orderRouter = Router();
orderRouter.get('/', orderController.getAllOrders);
orderRouter.post('/', orderController.createNewOrder);