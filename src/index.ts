import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { initDB } from './utils/initDB.js';
import { returnTemplate } from './template/template.js';
import { errorMidlevare } from './middlewares/errorMidlevare.js';

import { router as productsRouter } from './routes/products.js';
import { router as authRouter } from './routes/authentication.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

initDB();

app.use(cors());

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send(returnTemplate());
});

app.use('/', express.json(), authRouter);

app.use('/products', express.json(), productsRouter);

app.use(errorMidlevare);

app.listen(port);
