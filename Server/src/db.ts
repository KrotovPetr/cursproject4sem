import {Sequelize} from 'sequelize-typescript';
import {DB_HOST, DB_PORT} from "./config";

export const sequelize = new Sequelize('tools', 'postgres', '123456',
   {
        dialect: 'postgres',
        host: DB_HOST,
        port: Number(DB_PORT),
        models: [__dirname + '/models'],
        logging: (...msg) => {
        console.log(new Date().toLocaleString() + ' — ' + msg[0]+'\n');
    }
})
