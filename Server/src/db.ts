import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize('tools', 'postgres', 'postgres',
   {
        dialect: 'postgres',
        host: 'postgres',
        port: 5432,
        models: [__dirname + '/models'],
        logging: (...msg) => {
        console.log(new Date().toLocaleString() + ' — ' + msg[0]+'\n');
    }
})
