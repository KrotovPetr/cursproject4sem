import {sequelize} from "../../db";
import {Model} from "sequelize-typescript";
import {DataTypes} from "sequelize";

export const Service = sequelize.define<Model<any>>(
    'services',
    {
        idService: {
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
        coordinates: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },

    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'services'
    }
);