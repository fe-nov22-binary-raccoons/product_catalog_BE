import { Request as Req, Response as Res, NextFunction } from 'express';

export const catchError = (
  action: (req: Req, res: Res, next: NextFunction) => void,
) => {
  return async(req: Req, res: Res, next: NextFunction) => {
    try {
      action(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
