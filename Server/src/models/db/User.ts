import { DataTypes, Model } from 'sequelize';
import  {sequelize}  from '../../db';
import {UserType} from "../types/UserType";

export const User = sequelize.define<Model<UserType>>(
    'User',
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
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        //
        // },
        login: {
            type: DataTypes.STRING,
            allowNull: false

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        birtday: {
            type: DataTypes.STRING,
            allowNull: false
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false
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