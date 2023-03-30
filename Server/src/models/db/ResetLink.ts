import {sequelize} from "../../db";
import {DataTypes} from "sequelize";
import {User} from "./User";

export const ResetLink = sequelize.define<any>(
    'resetLinks',
    {
        idResetLink: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        idUser: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        end_time:{
            type: DataTypes.DATE,
            allowNull: false
        }

    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'resetLinks'
    }

)


