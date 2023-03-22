import { Request as Req, Response as Res, NextFunction } from 'express';
import * as jwtServices from '../services/jwt.js';
import { ApiError } from '../exceptions/ApiError.js';

export const authMiddleware = (req: Req, res: Res, next: NextFunction) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    throw ApiError.Unauthorized();
  }

  const userData = jwtServices.validateAccessToken(accessToken);

  if (!userData) {
    throw ApiError.Unauthorized();
  }

  next();
};
