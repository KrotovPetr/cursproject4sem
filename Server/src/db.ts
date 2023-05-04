import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize('tools', 'postgres', 'postgres',
   {
        dialect: 'postgres',
        host: 'localhost',
        port: 5434,
        models: [__dirname + '/models'],
        logging: (...msg) => {
        console.log(new Date().toLocaleString() + ' — ' + msg[0]+'\n');
    }
})
