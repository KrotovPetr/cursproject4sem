import { Sequelize } from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';

(function () {
    try {
        fs.unlinkSync(path.join(__dirname, '../access.db.log'));
    } catch (e) {
    }
})();

const accessLogStream = fs.createWriteStream(path.join(__dirname, '../access.db.log'), { flags: 'a' });

export const sequelize = new Sequelize('samodelkin', 'localhost', '123456', {
    host: 'db',
    port: 3306,
    dialect: 'postgres',
    logging: (...msg) => {
        accessLogStream.write((new Date().toLocaleString() + ' — ' + msg[0]));
        accessLogStream.write('\n');
    }
});