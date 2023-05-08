import jwt from 'jsonwebtoken';
import {Token} from "../models/db/Token";
import {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET} from "../config";


class TokenService{
    generateToken(payload){
        console.log(payload)
        const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {expiresIn: '30d'});

        return {
            accessToken, refreshToken
        }

    }

    async saveToken(userId, refreshToken){
        console.log(userId)
        const tokenData = await Token.findOne({where: {idUser: userId}})
        if(tokenData){
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        return await Token.create({idUser: userId, refreshToken});
    }

    async removeToken(refreshToken) {
        return await Token.destroy({where: {refreshToken}});
    }

    validateAccessToken(token) {
        try {
            return jwt.verify(token, JWT_ACCESS_SECRET);
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            return jwt.verify(token, JWT_REFRESH_SECRET);
        } catch (e) {
            return null;
        }
    }
    async findToken(refreshToken) {
        return await Token.findOne({where: {refreshToken}});
    }

    async destroyTokenByIdUser(idUser){
        return await Token.destroy({where: {idUser}});
    }



}

export default new TokenService();