import {Token} from "./Token";
import {User} from "./User";
import {ResetLink} from "./ResetLink";

Token.hasOne(User, {foreignKey: 'idUser'})
User.belongsTo(Token, {foreignKey: 'idUser'})

User.hasOne(ResetLink, {foreignKey: 'idUser'})
ResetLink.belongsTo(User, {foreignKey: 'idUser'})