import type { ErrorRequestHandler } from 'express';
import { ApiError } from '../exceptions/ApiError.js';
import { ValidationError } from 'express-validation';

export const errorMidlevare: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ApiError) {
    const { status, message, errors } = error;

    res.status(status).send({ status, message, errors });
  }

  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }

  return res.status(500).send({
    message: 'Unexpected error'
  });
};
