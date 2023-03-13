import {User} from "../models/db/User";


class UserController {
    async createUser(req, res) {
        const brand = await User.create(req.body)
        return {status:200, data: res.json(brand)}
    }
    async getAllUsers(req, res) {
        console.log(1)
        const brands = await User.findAll();
        console.log(2)
        return res.status(200).json(brands);
    }
    async getOneUser(req, res) {
        // let results = await User.findOne({where: {VIN: params}});
        // return {status:200, data: res.json(results)}
    }

}


export default new UserController();