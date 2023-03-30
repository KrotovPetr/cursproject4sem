import {Model} from 'sequelize-typescript';
import {UserType} from "../types/UserType";
import {DataTypes} from "sequelize";
import {sequelize} from "../../db";

export const Good = sequelize.define<any>(
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
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pict: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'goods'
    }
);