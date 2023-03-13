import express, {Express} from 'express';
import cors from 'cors';
import router from "./routes";
import * as fs from 'fs';
import * as path from 'path';
import {sequelize} from "./db";


const dotenv = require('dotenv')


dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT ?? 5000;


app.use(cors());
app.use(express.json());
app.use("/", router);

const connectToDb: () => Promise<void> = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log(`Connection to ${process.env.DB_NAME} has been established successfully.`);

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


try {
    fs.unlinkSync(path.join(__dirname, 'access.log'));
} catch (e) {
}


connectToDb();


app.listen(port, (): void => console.log(`Server started on port ${port}`))



