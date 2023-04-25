import {Token} from "./Token";
import {User} from "./User";
import {ResetLink} from "./ResetLink";
import {Goods} from "./Goods";
import {Order} from "./Order";

Token.hasOne(User, {foreignKey: 'idUsers'})
User.belongsTo(Token, {foreignKey: 'idUsers'})

User.hasOne(ResetLink, {foreignKey: 'idUser'})
ResetLink.belongsTo(User, {foreignKey: 'idUser'})

Goods.belongsToMany(Order, {through: 'orders_goods'})
Order.belongsToMany(Goods, {through: 'orders_goods'})
User.belongsToMany(Order, {through: 'orders_users'})
Order.belongsToMany(User, {through: 'orders_users'})