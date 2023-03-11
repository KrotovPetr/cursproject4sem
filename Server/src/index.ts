import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import { sequelize } from './services/connectToDb';

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 5000;

app.get('/', (request:Request, response:Response) => {
    response.send('Hello world!');
});



app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`Running on port ${port}`)

});