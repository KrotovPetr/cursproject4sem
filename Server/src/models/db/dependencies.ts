import {Token} from "./Token";
import {User} from "./User";

Token.hasOne(User, {foreignKey: 'idUser'})
User.belongsTo(Token, {foreignKey: 'idUser'})