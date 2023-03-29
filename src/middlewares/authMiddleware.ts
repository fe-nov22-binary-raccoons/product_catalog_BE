import {
  type Request as Req,
  type Response as Res,
  type NextFunction
} from 'express';
import * as jwtServices from '../services/jwt.js';
import { ApiError } from '../exceptions/ApiError.js';

export const authMiddleware = (
  req: Req,
  res: Res,
  next: NextFunction
): void => {
  const { accessToken } = req.body;

  if (!accessToken) {
    throw ApiError.Unauthorized();
  }

  const userData = jwtServices.validateAccessToken(accessToken);

  if (!userData) {
    throw ApiError.Unauthorized();
  }

  next();
};
