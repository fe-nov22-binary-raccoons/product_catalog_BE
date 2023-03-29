import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { type CartItem, type User as UserType } from '../types/User.js';
import { User } from '../models/User.js';
import * as emailServices from '../services/email.js';

export const getOne = async(activationToken: string): Promise<User | null> => {
  try {
    const user = await User.findOne({
      where: { activationToken }
    });

    return user;
  } catch {
    return null;
  }
};

export const normalize = ({
  id,
  email
}: UserType): {
  id: number
  email: string
} => ({ id, email });

export const getByEmail = (email: string): Promise<User | null> => {
  return User.findOne({
    where: { email }
  });
};

export const register = async(
  email: string,
  password: string
): Promise<400 | 201 | 500> => {
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
      activationToken
    });

    await emailServices.sendActivationLink(email, activationToken);

    return 201;
  } catch (error) {
    return 500;
  }
};

export const updateCart = async(
  cart: CartItem[],
  email: string
): Promise<201 | 500> => {
  try {
    await User.update(
      { cart: JSON.stringify(cart) },
      {
        where: { email }
      }
    );

    return 201;
  } catch {
    return 500;
  }
};
