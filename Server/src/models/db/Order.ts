import {Model} from 'sequelize-typescript';
import {DataTypes} from "sequelize";
import {sequelize} from "../../db";
import {User} from "./User";
import {Service} from "./Service";

export const Order = sequelize.define<Model<any>>(
    'orders',
    {
        idOrders: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idService: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'orders'
    }
);

Order.hasOne(Service, {foreignKey: 'idService'})
Service.belongsTo(Order, {foreignKey: 'idService'})