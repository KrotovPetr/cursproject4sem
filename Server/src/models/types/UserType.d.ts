import {RoleEnum} from "../enum/RoleEnum";

export interface UserType {
    firstName: string,
    secondName: string,
    email: string,
    phone: string,
    role: RoleEnum,
    password: string,
    isActive: boolean
}