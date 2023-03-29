import 'dotenv/config';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport/index.js';
import { type Email } from '../types/Email.js';

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
    pass: PASSWORD
  }
});

export const send = async({
  email, subject, html
}: Email): Promise<SMTPTransport.SentMessageInfo | string> => {
  try {
    const mail = await transporter.sendMail({
      from: 'Nice gadgets team',
      to: email,
      subject,
      text: '',
      html
    });

    return mail;
  } catch {
    return 'error';
  }
};

export const sendActivationLink = async(
  email: string, token: string
): Promise<string | SMTPTransport.SentMessageInfo> => {
  const clientUrl = process.env.CLIENT_URL;
  let link = '';

  if (clientUrl) {
    link = `${clientUrl}/catalog_product_FE/#/activation/${token}`;
  }

  return send({
    email,
    subject: '',
    html: `
      <h1>Account activation</h1>
      <a href="${link}">${link}</a>
    `
  });
};
