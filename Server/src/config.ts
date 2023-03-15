import dotenv from 'dotenv';

dotenv.config();

export const PORT: string=process.env.PORT
export const DB_NAME: string=process.env.DB_NAME
export const DB_USER: string=process.env.DB_USER
export const DB_PASSWORD: string=process.env.DB_PASSWORD
export const DB_HOST: string=process.env.DB_HOST
export const DB_PORT: string=process.env.DB_PORT

export const JWT_ACCESS_SECRET: string=process.env.JWT_ACCESS_SECRET
export const JWT_REFRESH_SECRET: string=process.env.JWT_REFRESH_SECRET

export const SMTP_HOST: string=process.env.SMTP_HOST
export const SMTP_USER: string=process.env.SMTP_USER
export const SMTP_PASSWORD: string=process.env.SMTP_PASSWORD
export const SMTP_PORT: string=process.env.SMTP_PORT

export const API_URL: string=process.env.API_URL
export const CLIENT_URL: string=process.env.CLIENT_URL