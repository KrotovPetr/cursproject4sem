import express, {Express} from 'express';
import dotenv from 'dotenv';
// import {sequelize} from './db';
import cors from 'cors';
import {Sequelize} from "sequelize";
import {router} from "./routes";

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT ?? 5000;


app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(
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

app.use("/", router);

const connectToDb: () => Promise<void> = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log(`Connection to ${process.env.DB_NAME} has been established successfully.`);
        app.listen(port, (): void => console.log(`Server started on port ${port}`))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectToDb();

