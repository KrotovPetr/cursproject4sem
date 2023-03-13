import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize(
{
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'tools',
    username: 'postgres',
    password: '123456',
    models: [__dirname + '/models'],
    logging: (...msg) => {
       console.log(new Date().toLocaleString() + ' — ' + msg[0]+'\n');
    }
})
