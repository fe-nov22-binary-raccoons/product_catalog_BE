import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { NormalizedUser } from '../types/User.js';

export const generateAccessToken = (user: NormalizedUser) => {
  return jwt.sign(user, process.env.JWT_ACCESS_SECRET || '');
};

export const validateAccessToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET || '');
  } catch {
    return null;
  }
};
