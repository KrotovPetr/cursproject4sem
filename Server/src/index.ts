import express from 'express';
import dotenv from 'dotenv';
import {Express, Response, Request} from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 8000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`1`);
});