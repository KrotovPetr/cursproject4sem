import {sequelize} from "../../db";
import {DataTypes} from "sequelize";
import {User} from "./User";

export const Token = sequelize.define<any>(
    'tokens',
    {
        idToken: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        idUser: {
            type: DataTypes.NUMBER,
            defaultValue: false
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'tokens'
    }

)

User.hasOne(Token, {foreignKey: 'idUser'})
Token.belongsTo(User, {foreignKey: 'idUser'})