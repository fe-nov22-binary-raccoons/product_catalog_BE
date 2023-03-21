import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { initDB } from './utils/initDB.js';
import { returnTemplate } from './template/template.js';

import { router as productsRouter } from './routes/products.js';
import { router as authRouter } from './routes/authentication.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

initDB();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost3000/',
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send(returnTemplate());
});

app.use('/', express.json(), authRouter);

app.use('/products', express.json(), productsRouter);

app.listen(port);
