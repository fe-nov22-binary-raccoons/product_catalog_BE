import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { CartItem, User as UserType } from '../types/User.js';
import { User } from '../models/User.js';
// import { ApiError } from '../exceptions/ApiError.js';
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
      return 400;
    }

    const activationToken = uuidv4();
    const hash = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hash,
      activationToken,
    });

    await emailServices.sendActivationLink(email, activationToken);

    return 201;
  } catch (error) {
    return 500;
  }
};

export const updateCart = async(cart: CartItem[], email: string) => {
  try {
    await User.update(
      { cart: JSON.stringify(cart) },
      {
        where: { email },
      },
    );

    return 201;
  } catch {
    return 500;
  }
};
