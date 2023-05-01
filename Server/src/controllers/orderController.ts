import express from "express";
import {Order} from "../models/db/Order";
import {Goods} from "../models/db/Goods";
import { Op } from 'sequelize';
import {GoodsOrders} from "../models/db/GoodsOrder";
import {sequelize} from "../db";
import {OrderUser} from "../models/db/OrderUser";
import {User} from "../models/db/User";
class OrderController {
    async getAllOrders(req: express.Request, res: express.Response, next:express.NextFunction){
        try{
            const orders = await sequelize.query('SELECT * FROM goods INNER JOIN orders_goods ON goods."idGood" = orders_goods."goodIdGood" INNER JOIN orders ON orders."idOrders" = orders_goods."ordersIdOrders";');
            return res.status(201).json(orders);
        }catch(e){
            next(e);
        }
    }

    async createNewOrder(req: express.Request, res: express.Response, next:express.NextFunction){
        try{
            const {status, date, type, price, productsIds, idUser}:any = req.body;
            const order = await Order.create({status, date, type, price});
            const num =  Math.floor(Math.random() * 10000);
            console.log(await User.findOne({where: {idUser}}))

            const products = await Goods.findAll({ where: { idGood: { [Op.in]: productsIds } } });

            products.forEach((elem)=>{
                // @ts-ignore
                GoodsOrders.create({
                    idGoodsOrders: Math.floor(Math.random() * 10000),
                    // @ts-ignore
                    goodIdGood: elem.idGood,
                    // @ts-ignore
                    ordersIdOrders: order.get('idOrders')
                })
            })
            await OrderUser.create({idOrdersUsers: Math.floor(Math.random() * 10000), userIdUser: idUser, ordersIdOrders: order.get('idOrders')})
            return res.status(201).json("Success");
        }catch(e){
            next(e);
        }
    }
}

export default new OrderController();