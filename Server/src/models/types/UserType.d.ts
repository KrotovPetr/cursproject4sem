import {RoleEnum} from "../enum/RoleEnum";

export interface UserType {
    idUser: number,
    firstName: string,
    lastName: string,
    login: string,
    email: string,
    password: string,
    birthday: string,
    isActive: boolean
    role: RoleEnum,
    phone: string,
}