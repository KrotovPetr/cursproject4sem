import {Model} from 'sequelize-typescript';
import {UserType} from "../types/UserType";
import {DataTypes} from "sequelize";
import {sequelize} from "../../db";

export const User = sequelize.define<Model<any>>(
    'users',
    {
        idUser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isActivated: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        activationLink:{
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false

        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        birthday: {
            type: DataTypes.STRING,
            allowNull: false
        },

        role: {
            type: DataTypes.NUMBER,
            allowNull: false,
            defaultValue: 0
        },

        phone:{
            type: DataTypes.STRING,
            allowNull: false
        },


    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'users'
    }
);