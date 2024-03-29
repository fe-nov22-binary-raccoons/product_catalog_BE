import { ApiError } from '../exceptions/ApiError.js';
import { User } from '../models/User.js';

export const save = async(
  id: number,
  token: string
): Promise<string | ApiError> => {
  const user = await User.findOne({
    where: { id }
  });

  if (!user) {
    return ApiError.BadRequest('User id is wrong', {});
  }

  user.refreshToken = token;

  await user.save();

  return token;
};

export const getByToken = async(
  refreshToken: string
): Promise<User | null> => {
  return User.findOne({
    where: { refreshToken }
  });
};
