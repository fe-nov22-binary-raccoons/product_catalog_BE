import bcrypt from 'bcrypt';
import { Request as Req, Response as Res } from 'express';
import { ApiError } from '../exceptions/ApiError.js';
import { User } from '../types/User.js';
import * as userServices from '../services/users.js';
import * as jwtServices from '../services/jwt.js';
import * as tokenServices from '../services/token.js';

export const register = async(req: Req, res: Res) => {
  const { email, password } = req.body;

  await userServices.register(email, password);

  res.sendStatus(201);
};

export const activate = async(req: Req, res: Res) => {
  const { activationToken } = req.params;

  const user = await userServices.getOne(activationToken);

  if (!user) {
    throw ApiError.NotFound();
  }

  user.activationToken = '';
  await user.save();

  await sendAuthentication(res, user);

  res.send(userServices.normalize(user));
};

export const login = async(req: Req, res: Res) => {
  const { email, password } = req.body;

  const user = await userServices.getByEmail(email);

  if (!user) {
    throw ApiError.BadRequest('User with this email does not exist', {
      email: 'User with this email does not exist',
    });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw ApiError.BadRequest('Wrong password', {
      email: 'Wrong password',
    });
  }

  await sendAuthentication(res, user);
};

export const refresh = async(req: Req, res: Res) => {
  const { refreshToken } = req.cookies;

  const userData = jwtServices.validateRefreshToken(refreshToken);

  if (!userData) {
    throw ApiError.Unauthorized();
  }

  const token = tokenServices.getByToken(refreshToken);

  if (!token) {
    throw ApiError.Unauthorized();
  }

  const user = await userServices.getByEmail(userData.email);

  if (!user) {
    throw ApiError.Unauthorized();
  }

  await sendAuthentication(res, user);
};

export const sendAuthentication = async(res: Res, user: User) => {
  const userData = userServices.normalize(user);
  const accessToken = await jwtServices.generateAccessToken(userData);
  const refreshToken = await jwtServices.generateRefreshToken(userData);

  await tokenServices.save(user.id, refreshToken);

  res.cookie('refreshToken', refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  res.cookie('accessToken', accessToken, {
    maxAge: 10 * 60 * 1000,
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  res.send({
    userData,
  });
};

// export const updateCart = async(req: Req, res: Res) => {
//   const { newCart } = req.body;

//   const products = userServices.updateCart(newCart);
// };
