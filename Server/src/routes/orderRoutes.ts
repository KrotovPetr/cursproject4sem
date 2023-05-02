import Router from "express";
import orderController from "../controllers/orderController";

export const orderRouter = Router();
orderRouter.get('/', orderController.getAllOrdersByGoods);
orderRouter.post('/', orderController.createNewOrder);
orderRouter.get('/current', orderController.getAllOrdersByUser);
orderRouter.get('/all', orderController.getAllOrders);
orderRouter.patch('/status', orderController.updateOrderStatus);