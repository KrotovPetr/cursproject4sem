import {ResetLink} from "../models/db/ResetLink";
import {ApiError} from "../exceptions/apiError";

class ResetLinkService {
    async create(id, resetLink){
        let timestamp = Date.now() + 900000;
        await ResetLink.create({end_time: timestamp, idUser: Number(id), link: resetLink})
    }

    async drop(resetLink){
        await ResetLink.destroy({where: {link: resetLink}})
    }

    async checkValidity(resetLink){
        let link = await ResetLink.findOne({where:{link: resetLink}});
        if(!link){
            throw ApiError.BadRequest(`Link not found!`)
        }
        let timestamp = Date.now();
        await this.drop(resetLink)
        if(link["end_time"]<timestamp){
            return null;
        } else {
            return {status: 200, data:"Valid", idUser: link.idUser}
        }
    }
}

export default new ResetLinkService();