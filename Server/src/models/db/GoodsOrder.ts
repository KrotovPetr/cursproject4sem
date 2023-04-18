import {Model} from 'sequelize-typescript';
import {DataTypes} from "sequelize";
import {sequelize} from "../../db";

export const GoodsOrders = sequelize.define<Model<any>>(
    'goods',
    {
        idGoodsOrders: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        idOrders:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idGoods:{
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