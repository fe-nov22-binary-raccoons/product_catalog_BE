import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { initDB } from './utils/initDB.js';
import { returnTemplate } from './template/template.js';

import * as phoneControllers from './controller/phones.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

initDB();

app.use(cors());

app.get('', (req, res) => {
  res.send(returnTemplate());
});

app.get('/phones', express.json(), phoneControllers.getAll);

app.get('/phones/:phoneId', express.json(), phoneControllers.getPhoneById);

app.get(
  '/phones/:phoneId/recommended',
  express.json(),
  phoneControllers.getRecommendedPhones,
);

app.listen(port);
