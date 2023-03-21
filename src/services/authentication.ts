import { User } from '../models/User.js';

export const add = async(
  email: string,
  password: string,
  activationToken: string,
) => {
  try {
    const user = await User.create({
      email,
      password,
      activationToken,
    });

    return user;
  } catch {
    return 500;
  }
};

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
