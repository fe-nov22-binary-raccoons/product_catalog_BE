import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { User as UserType } from '../types/User.js';
import { User } from '../models/User.js';
import { ApiError } from '../exceptions/ApiError.js';
import * as emailServices from '../services/email.js';

export const getOne = async(activationToken: string) => {
  try {
    const user = await User.findOne({
      where: { activationToken },
    });

    return user;
  } catch {
    return null;
  }
};

export const normalize = ({ id, email }: UserType) => ({ id, email });

export const getByEmail = (email: string) => {
  return User.findOne({
    where: { email },
  });
};

export const register = async(email: string, password: string) => {
  try {
    const existingUser = await getByEmail(email);

    if (existingUser) {
      throw ApiError.BadRequest('User with this email already exist', {
        email: 'User with this email already exist',
      });

      return;
    }

    const activationToken = uuidv4();
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hash,
      activationToken,
    });

    await emailServices.sendActivationLink(email, activationToken);

    return user;
  } catch {
    throw ApiError.Unexpected();
  }
};
