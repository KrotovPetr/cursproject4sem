// import { DataTypes, Model } from 'sequelize';
// import { sequelize } from '';
// import {UserType} from "../types/UserType";
//
// export const Admin = sequelize.define<Model<UserType>>(
//     'User',
//     {
//         idUser: {
//             type: DataTypes.INTEGER,
//             primaryKey: true
//         },
//         firstName: {
//             type: DataTypes.STRING
//         },
//         lastName: {
//             type: DataTypes.STRING
//         },
//         email: {
//             type: DataTypes.STRING,
//
//         },
//         login: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         Password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     },
//     {
//         createdAt: false,
//         updatedAt: false,
//         tableName: 'Admins'
//     }
// );