import {Model} from 'sequelize-typescript';
import {DataTypes} from "sequelize";
import {sequelize} from "../../db";
import {Order} from "./Order";
import {Token} from "./Token";
import {ResetLink} from "./ResetLink";

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
        isBanned: {
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


Order.hasOne(User, {foreignKey: 'idUser'})
User.belongsTo(Order, {foreignKey: 'idUser'})

Token.hasOne(User, {foreignKey: 'idUser'})
User.belongsTo(Token, {foreignKey: 'idUser'})

User.hasOne(ResetLink, {foreignKey: 'idUser'})
ResetLink.belongsTo(User, {foreignKey: 'idUser'})