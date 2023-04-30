import express from "express";
import {Service} from "../models/db/Service";

class ServiceController {
    async getAllServices(req: express.Request, res: express.Response, next:express.NextFunction){
        try{
            const services = await Service.findAll();
            return res.status(200).json(services);
        } catch(e){
            next(e);
        }
    }


}


export default new ServiceController();