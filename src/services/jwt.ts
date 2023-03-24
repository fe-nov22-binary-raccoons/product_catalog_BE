import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { NormalizedUser, User } from '../types/User.js';

export const generateAccessToken = (user: NormalizedUser) => {
  return jwt.sign(user, process.env.JWT_ACCESS_SECRET || '');
};

export const generateRefreshToken = (user: NormalizedUser) => {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET || '');
};

export const validateAccessToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET || '') as User;
  } catch {
    return null;
  }
};

export const validateRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET || '') as User;
  } catch {
    return null;
  }
};
