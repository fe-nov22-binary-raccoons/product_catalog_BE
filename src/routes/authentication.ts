import express from 'express';
import * as authControllers from '../controller/authentication.js';

export const router = express.Router();

router.post('/registration', authControllers.register);

router.get('/activation/:activationToken', authControllers.activate);
