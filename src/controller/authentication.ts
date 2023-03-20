import { Request as Req, Response as Res } from 'express';
import * as authServices from '../services/authentication.js';

export const register = async(req: Req, res: Res) => {
  const { email, password } = req.body;

  const user = await authServices.add(email, password);

  res.send(user);
};
