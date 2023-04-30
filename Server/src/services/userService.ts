import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import mailService from "./mailService";
import tokenService from "./tokenService";
import {userDTO} from "../dto/userDTO";
import {API_URL} from "../config";
import {ApiError} from "../exceptions/apiError";
import resetLinkService from "./resetLinkService";
import {User} from "../models/db/User";

class UserService {
    async registration(email, password, lastName, firstName, birthday, phone){
        const candidate: any = await User.findAll({where:{email}})
        console.log(candidate)
        if (candidate.length>0){
            throw ApiError.BadRequest(`User ${email} is already exist!`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuidv4();
        const user = await User.create({email, password: hashPassword, activationLink, lastName, firstName, birthday, phone, isBanned: false});
        await mailService.sendActivationMail(email, `${API_URL}/users/activate/${activationLink}`);
        const userDTOVar = new userDTO(user);
        const tokens = tokenService.generateToken({...userDTOVar});
        await tokenService.saveToken(userDTOVar.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDTOVar
        }
    }

    async activate(activationLink){
        const user = await User.findOne(activationLink);
        if(!user){
            throw ApiError.BadRequest('Incorrect link!');
        }
        // @ts-ignore
        user.isActivated = true;
        await user.save();
    }

    async resetPassword(email){
        const candidate: any = await User.findAll({where: {email}})
        if (!candidate){
            throw ApiError.BadRequest(`User ${email} is not exist!`)
        }
        const resetLink = uuidv4();
        await resetLinkService.create(candidate.idUser, resetLink);
        await mailService.sendResetPasswordMail(email, `${API_URL}/users/new-password/${resetLink}`);
    }

    async login(email, password){
        const user = await User.findAll({where: {email}});
        if(!user){
            throw ApiError.BadRequest('Данный email не записан');
        }
        // @ts-ignore
        const  isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals){
            throw ApiError.BadRequest('Incorrect Password');
        }
        const userDTOVar = new userDTO(user);

        const tokens = tokenService.generateToken({...userDTOVar});
        await tokenService.saveToken(userDTOVar.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDTOVar
        }

    }

    async logout(refreshToken) {
        return await tokenService.removeToken(refreshToken);
    }

    async refresh(refreshToken){
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await User.findAll({where: {idUser: userData.id}});
        const userDto = new userDTO(user);
        const tokens = tokenService.generateToken({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async getAllUsers() {
        return await User.findAll();
    }

    async setNewPassword(resetLink, password){
        let res = await resetLinkService.checkValidity(resetLink);
        if(res){
            const hashPassword = await bcrypt.hash(password, 3);
             await User.update({password: hashPassword},{where: {idUser: res.idUser}});
            let user = await User.findAll({where: {idUser: res.idUser}})
            console.log(user)
            const userDTOVar = new userDTO(user);
            const tokens = tokenService.generateToken({...userDTOVar});
            await tokenService.destroyTokenByIdUser(res.idUser);
            await tokenService.saveToken(userDTOVar.id, tokens.refreshToken);
            return {
                ...tokens,
                user: userDTOVar
            }

        } else {
            throw ApiError.BadRequest(`Link is incorrect!`)
        }

    }
}

export default new UserService();