import express from "express";
import {ApiError} from "../exceptions/apiError";
import tokenService from "../services/tokenService";

export function authMiddlewareFunc(res: express.Response, req: express.Request, next: express.NextFunction){
        try{
                const authorizationHeader = req.headers.authorization;
                if(!authorizationHeader){
                        return next(ApiError.UnauthorizedError());
                }

                const accessToken = authorizationHeader.split(' ')[1];
                if(!accessToken){
                        return next(ApiError.UnauthorizedError());
                }

                const userData = tokenService.validateAccessToken(accessToken);
                if (!userData) {
                        return next(ApiError.UnauthorizedError());
                }

                // @ts-ignore
                req.user = userData;
                next();
        } catch (e){
                return next(ApiError.UnauthorizedError());
        }
}