import { v4 as uuidv4 } from 'uuid';
import { Request as Req, Response as Res } from 'express';
import * as authServices from '../services/authentication.js';
import * as emailServices from '../services/email.js';
import * as userServices from '../services/users.js';
import * as jwtServices from '../services/jwt.js';

export const register = async(req: Req, res: Res) => {
  const { email, password } = req.body;

  const activationToken = uuidv4();
  const user = await authServices.add(email, password, activationToken);

  if (typeof user === 'number') {
    res.sendStatus(user);

    return;
  }

  await emailServices.sendActivationLink(email, activationToken);

  res.send(userServices.normalize(user));
};

export const activate = async(req: Req, res: Res) => {
  const { activationToken } = req.params;

  const user = await authServices.getOne(activationToken);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  user.activationToken = '';
  await user.save();

  res.send(userServices.normalize(user));
};

export const login = async(req: Req, res: Res) => {
  const { email, password } = req.body;

  const user = await userServices.getByEmail(email);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  if (password !== user.password) {
    res.sendStatus(401);

    return;
  }

  const userData = userServices.normalize(user);
  const accessToken = await jwtServices.generateAccessToken(userData);

  res.send({
    userData,
    accessToken,
  });
};
