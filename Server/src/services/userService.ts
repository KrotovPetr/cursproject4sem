import {User} from "../models/db/User";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mailService from "./mailService";
import tokenService from "./tokenService";
import {userDTO} from "../dto/userDTO";
import {API_URL} from "../config";

class UserService {
    async registration(email, password){
        const candidate: any = await User.findOne({where: {email: email}})
        if (candidate){
            throw new Error(`User ${email} is already exist!`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuidv4();
        console.log(1);
        const user = await User.create({email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, `${API_URL}/users/activate/${activationLink}`);
        console.log(2);
        const userDTOVar = new userDTO(user);

        const tokens = tokenService.generateToken({...userDTOVar});
        await tokenService.saveToken(userDTOVar.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDTOVar
        }
    }
}

export default new UserService();