import {sequelize} from "../../db";
import {Model} from "sequelize-typescript";
import {DataTypes} from "sequelize";

export const OrderUser = sequelize.define<Model<any>>(
    'orders_users',
    {
        idOrdersUsers: {
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
        userIdUser:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'orders_users'
    }
);