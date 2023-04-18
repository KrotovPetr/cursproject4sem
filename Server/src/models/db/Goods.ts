import {Model} from 'sequelize-typescript';
import {DataTypes} from "sequelize";
import {sequelize} from "../../db";
import {GoodType} from "../types/GoodType";

export const Goods = sequelize.define<Model<GoodType>>(
    'goods',
    {
        idGood: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.NUMBER,
            allowNull: false
        },
        amount:{
            type: DataTypes.NUMBER,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        },
        weight:{
            type: DataTypes.NUMBER,
            allowNull: false
        }


    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'goods'
    }
);