import bcrypt from 'bcrypt';
import { Request as Req, Response as Res } from 'express';
import { ApiError } from '../exceptions/ApiError.js';
import { User } from '../types/User.js';
import * as userServices from '../services/users.js';
import * as jwtServices from '../services/jwt.js';
import * as tokenServices from '../services/token.js';

export const register = async(req: Req, res: Res) => {
  const { email, password } = req.body;

  const status = await userServices.register(email, password);

  if (status === 400) {
    res.status(400).send({
      status: 400,
      message: 'User with this email already exist',
    });

    return;
  }

  res.status(status).send({ status });
};

export const activate = async(req: Req, res: Res) => {
  const { activationToken } = req.params;

  const user = await userServices.getOne(activationToken);

  if (!user) {
    res.status(400).send({
      status: 400,
      message: 'User does not exist',
    });

    return;
  }

  user.activationToken = '';
  await user.save();

  await sendAuthentication(res, user);

  res.status(200).send({
    status: 200,
  });
};

export const login = async(req: Req, res: Res) => {
  const { email, password } = req.body;

  const user = await userServices.getByEmail(email);

  if (!user) {
    res.status(400).send({
      status: 400,
      message: 'User with this email does not exist',
    });

    return;
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    res.status(400).send({
      status: 400,
      message: 'Wrong password',
    });

    return;
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

  res.status(200).send({ status: 200 });
};

export const updateCart = async(req: Req, res: Res) => {
  const { cart } = req.body;
  const { accessToken } = req.cookies;

  const user = jwtServices.validateAccessToken(accessToken);

  if (!user) {
    throw ApiError.Unauthorized;
  }

  const email = user.email;

  const status = await userServices.updateCart(cart, email);

  res.status(status).send({ status: status });
};
