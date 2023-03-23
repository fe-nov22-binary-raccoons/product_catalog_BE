import express from 'express';
import * as authControllers from '../controller/authentication.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { catchError } from '../utils/catchError.js';
import { validateAuth } from '../utils/validation.js';

export const router = express.Router();

router.post(
  '/registration',
  validateAuth(),
  catchError(authControllers.register),
);

router.get(
  '/activation/:activationToken',
  catchError(authControllers.activate),
);

router.post('/login', validateAuth(), catchError(authControllers.login));

router.get('/refresh', catchError(authControllers.refresh));

router.patch('/cart', authMiddleware, catchError(authControllers.updateCart));
