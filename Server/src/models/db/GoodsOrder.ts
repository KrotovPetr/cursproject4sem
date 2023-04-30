import {Model} from 'sequelize-typescript';
import {DataTypes} from "sequelize";
import {sequelize} from "../../db";

export const GoodsOrders = sequelize.define<Model<any>>(
    'orders_goods',
    {
        idGoodsOrders: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        ordersIdOrders:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        goodIdGood:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'orders_goods'
    }
);