import {Token} from "./Token";
import {User} from "./User";
import {ResetLink} from "./ResetLink";
import {Goods} from "./Goods";
import {Order} from "./Order";

Token.hasOne(User, {foreignKey: 'idUser'})
User.belongsTo(Token, {foreignKey: 'idUser'})

User.hasOne(ResetLink, {foreignKey: 'idUser'})
ResetLink.belongsTo(User, {foreignKey: 'idUser'})

Goods.hasMany(Order, {foreignKey: 'id'})
Order.belongsToMany(Goods, {foreignKey: 'idUser'})