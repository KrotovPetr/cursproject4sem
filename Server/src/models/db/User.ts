import {Model} from 'sequelize-typescript';
import {UserType} from "../types/UserType";
import {DataTypes} from "sequelize";
import {sequelize} from "../../db";

export const User = sequelize.define<Model<UserType>>(
    'users',
    {
        idUser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        // login: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        //
        // },
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        //
        // },
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // isActive: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false
        // },
        // birthday: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        //
        // role: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        //
        // phone:{
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },


    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'users'
    }
);