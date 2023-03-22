import { ApiError } from '../exceptions/ApiError.js';
import { User } from '../models/User.js';

export const save = async(userId: number, token: string) => {
  const user = await User.findOne({
    where: { userId },
  });

  if (!user) {
    return ApiError.BadRequest('User id is wrong', {});
  }

  user.refreshToken = token;

  await user.save();

  return token;
};

export const getByToken = async(refreshToken: string) => {
  return User.findOne({
    where: { refreshToken },
  });
};
