import {User} from "../models/db/User";
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import mailService from "./mailService";
import tokenService from "./tokenService";
import {userDTO} from "../dto/userDTO";
import {API_URL} from "../config";
import {ApiError} from "../exceptions/apiError";

class UserService {
    async registration(email, password){
        const candidate: any = await User.findOne({where: {email: email}})
        if (candidate){
            throw ApiError.BadRequest(`User ${email} is already exist!`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuidv4();
        const user = await User.create({email, password: hashPassword, activationLink});
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
        const user = await User.findOne({where:{activationLink: activationLink}});
        if(!user){
            throw ApiError.BadRequest('Incorrect link!');
        }
        // @ts-ignore
        user.isActivated = true;
        await user.save();
    }

    async login(email, password){
        const user = await User.findOne({where: {email: email}});
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
        const user = await User.findOne({where: {idUser: userData.id}});
        const userDto = new userDTO(user);
        const tokens = tokenService.generateToken({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async getAllUsers() {
        return await User.findAll();
    }
}

export default new UserService();