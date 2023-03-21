import 'dotenv/config';
import nodemailer from 'nodemailer';
import { Email } from '../types/Email.js';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
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
    return 'error';
  }
};

export const sendActivationLink = async(email: string, token: string) => {
  const clientUrl = process.env.CLIENT_URL;

  const link = `${clientUrl}/activation/${token}`;

  return send({
    email,
    subject: '',
    html: `
      <h1>Account activation</h1>
      <a href="${link}">${link}</a>
    `,
  });
};
