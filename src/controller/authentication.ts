import bcrypt from 'bcrypt';
import { type Request as Req, type Response as Res } from 'express';
import { ApiError } from '../exceptions/ApiError.js';
import { type User } from '../types/User.js';
import * as userServices from '../services/users.js';
import * as jwtServices from '../services/jwt.js';
import * as tokenServices from '../services/token.js';

export const register = async(req: Req, res: Res): Promise<void> => {
  const { email, password } = req.body;

  const status = await userServices.register(email, password);

  if (status === 400) {
    res.status(400).send({
      status: 400,
      message: 'User with this email already exist'
    });

    return;
  }

  res.status(status).send({ status });
};

export const activate = async(req: Req, res: Res): Promise<void> => {
  const { activationToken } = req.params;

  const user = await userServices.getOne(activationToken);

  if (!user) {
    res.status(400).send({
      status: 400,
      message: 'User does not exist'
    });

    return;
  }

  user.activationToken = '';
  await user.save();

  await sendAuthentication(res, user);
};

export const login = async(req: Req, res: Res): Promise<void> => {
  const { email, password } = req.body;

  const user = await userServices.getByEmail(email);

  if (!user) {
    res.status(400).send({
      status: 400,
      message: 'User with this email does not exist'
    });

    return;
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    res.status(400).send({
      status: 400,
      message: 'Wrong password'
    });

    return;
  }

  await sendAuthentication(res, user);
};

export const refresh = async(req: Req, res: Res): Promise<void> => {
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

export const sendAuthentication = async(
  res: Res,
  user: User
): Promise<void> => {
  const userData = userServices.normalize(user);
  const accessToken = jwtServices.generateAccessToken(userData);
  const refreshToken = jwtServices.generateRefreshToken(userData);

  await tokenServices.save(user.id, refreshToken);

  res.status(200).send({
    status: 200,
    accessToken
  });
};

export const updateCart = async(req: Req, res: Res): Promise<void> => {
  const { cart } = req.body;
  const { accessToken } = req.body;

  if (!accessToken) {
    throw ApiError.Unauthorized();
  }

  const userData = jwtServices.validateAccessToken(accessToken);

  if (!userData) {
    throw ApiError.Unauthorized();
  }

  const status = await userServices.updateCart(cart, userData.email);

  res.status(status).send({ status });
};
