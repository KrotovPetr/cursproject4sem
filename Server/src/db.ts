import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    String(process.env.DB_PASSWORD),
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        logging: (...msg):void => {
            console.log(new Date().toLocaleString() + ' — ' + msg[0] + '\n');
        }
    }
)
