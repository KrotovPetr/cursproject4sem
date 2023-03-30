import express from "express";
import userService from "../services/userService";
import {CLIENT_URL} from "../config";
import {validationResult} from "express-validator";
import {ApiError} from "../exceptions/apiError";

class UserController {
    async registrationNewUser(req: express.Request, res: express.Response, next:express.NextFunction){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {email, password}:any = req.body;
            const userData = await userService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json({status:201,userData});
        } catch(e){
            next(e);
        }
    }
    async loginToAccount(req: express.Request, res: express.Response, next:express.NextFunction){
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json({status:200, userData});
        } catch (e) {
            next(e);
        }
    }
    async logoutFromAccount(req: express.Request, res: express.Response, next:express.NextFunction){
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.status(201).json(token);
        } catch (e) {
            next(e);
        }
    }
    async activateAccount(req: express.Request, res: express.Response, next:express.NextFunction){
        try{
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.status(201).redirect(CLIENT_URL);
        }catch(e){
            next(e);
        }
    }
    async refreshToken(req: express.Request, res: express.Response, next:express.NextFunction){
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(201).json(userData);
        } catch (e) {
            next(e);
        }
    }

    async getAllUsers(req: express.Request, res: express.Response, next:express.NextFunction){
        try{
            const users = await userService.getAllUsers();
            return res.status(201).json(users);
        }catch(e){
            next(e);
        }
    }

    async forgotPassword(req: express.Request, res: express.Response, next:express.NextFunction){
        try{
            const {email}:any = req.body;
            await userService.resetPassword(email);
            return res.status(200).json({data: `Success! All instructions will send to ${email}`});
        }catch(e){
            next(e);
        }
    }

    async validTheRequest(req: express.Request, res: express.Response, next:express.NextFunction){
        try {
            const {password, link} = req.body;
            let userData = await userService.setNewPassword(link, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json(userData);
        } catch (e) {
            next(e);
        }
    }

}


export default new UserController();