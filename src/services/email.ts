import 'dotenv/config';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const send = async({ email, subject, html }) => {
  try {
    const mail = await transporter.sendMail({
      from: 'Nice gadgets team',
      to: email,
      subject,
      text: '',
      html,
    });

    return mail;
  } catch {}
};
