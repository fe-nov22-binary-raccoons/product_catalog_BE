import { Request as Req, Response as Res, NextFunction } from 'express';
import * as jwtServices from '../services/jwt.js';
import { ApiError } from '../exceptions/ApiError.js';

export const authMiddleware = (req: Req, res: Res, next: NextFunction) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    throw ApiError.Unauthorized();
  }

  const [, accessToken] = authHeader.split(' ');

  if (!accessToken) {
    throw ApiError.Unauthorized();
  }

  const userData = jwtServices.validateAccessToken(accessToken);

  if (!userData) {
    throw ApiError.Unauthorized();
  }

  next();
};
