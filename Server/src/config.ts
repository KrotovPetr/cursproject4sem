import dotenv from 'dotenv';

dotenv.config();

export const PORT=process.env.PORT
export const DB_NAME=process.env.DB_NAME
export const DB_USER=process.env.DB_USER
export const DB_PASSWORD=process.env.DB_PASSWORD
export const DB_HOST=process.env.DB_HOST
export const DB_PORT=process.env.DB_PORT

export const JWT_ACCESS_SECRET=process.env.JWT_ACCESS_SECRET
export const JWT_REFRESH_SECRET=process.env.JWT_REFRESH_SECRET

export const SMTP_HOST=process.env.SMTP_HOST
export const SMTP_USER=process.env.SMTP_USER
export const SMTP_PASSWORD=process.env.SMTP_PASSWORD
export const SMTP_PORT=process.env.SMTP_PORT

export const API_URL=process.env.API_URL