import { User as UserType } from '../types/User.js';
import { User } from '../models/User.js';

export const normalize = ({ id, email }: UserType) => ({ id, email });

export const getByEmail = (email: string) => {
  return User.findOne({
    where: { email },
  });
};
