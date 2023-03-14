import jwt from 'jsonwebtoken';
import {Token} from "../models/db/Token";


class TokenService{
    generateToken(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});

        return {
            accessToken, refreshToken
        }

    }

    async saveToken(userId, refreshToken){
        const tokenData = await Token.findOne({where: {idUser: userId}})
        if(tokenData){
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await Token.create({idUser: userId, refreshToken});
        return token;
    }
}

export default new TokenService();