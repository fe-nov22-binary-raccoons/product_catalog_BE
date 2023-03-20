import { User } from '../models/User.js';

export const add = (email: string, password: string) => {
  return User.create({
    email,
    password,
  });
};
