import {User} from "../models/db/User";
import {NextFunction} from "express";
import userService from "../services/userService";


class UserController {
    async registrationNewUser(req: Request, res, next){
        try{
            const {email, password}:any = req.body;
            const userData = await userService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true, secure: true})
            return res.json(userData);
        } catch(e){
            console.log(e);
        }
    }
    async loginToAccount(req: Request, res: Response, next: NextFunction){
        try{

        }catch(e){

        }
    }
    async logoutFromAccount(req: Request, res: Response, next: NextFunction){
        try{

        }catch(e){

        }
    }
    async activateAccount(req, res, next){
        try{

        }catch(e){

        }
    }
    async refreshToken(req: Request, res: Response, next: NextFunction){
        try{

        }catch(e){

        }
    }
    async getAllUsers(req, res, next){
        let users = await User.findAll();

        try{
            return res.json(users)
        }catch(e){
            return res.json(e)
        }
    }
}


export default new UserController();