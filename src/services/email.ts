import 'dotenv/config';
import nodemailer from 'nodemailer';
import { Email } from '../types/Email';

const HOST = process.env.SMTP_HOST || '';
const USER = process.env.SMTP_USER || '';
const PORT = Number(process.env.SMTP_PORT) || 0;
const PASSWORD = process.env.SMTP_PASSWORD || '';

const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: false,
  auth: {
    user: USER,
    pass: PASSWORD,
  },
});

export const send = async({ email, subject, html }: Email) => {
  try {
    const mail = await transporter.sendMail({
      from: 'Nice gadgets team',
      to: email,
      subject,
      text: '',
      html,
    });

    return mail;
  } catch {
    return 'Error';
  }
};
