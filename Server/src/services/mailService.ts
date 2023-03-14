import nodemailer from 'nodemailer';
import {API_URL, SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_USER} from "../config";

class MailService {
    transporter = null;
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: true,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to: any, link) {
        await this.transporter.sendMail({
            from: SMTP_USER,
            to,
            subject: 'Активация аккаунта на ' + API_URL,
            text: '',
            html:
                `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        }).then(() => console.log(`Email sent successfully to ${to}`)).catch((error) => console.error('Email send failed ', error));
    }
}
export default new MailService();