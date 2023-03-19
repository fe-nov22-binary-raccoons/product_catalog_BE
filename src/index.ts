import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { initDB } from './utils/initDB.js';
import { returnTemplate } from './template/template.js';

import * as productsControllers from './controller/products.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

initDB();

app.use(cors());

app.get('', (req, res) => {
  res.send(returnTemplate());
});

app.get('/products', express.json(), productsControllers.getAll);

app.get('/products/categories', productsControllers.getCategories);

app.get('/products/new', express.json(), productsControllers.getNewProducts);

app.get(
  '/products/discount',
  express.json(),
  productsControllers.getProductsWithDiscount,
);

app.get(
  '/products/:productId',
  express.json(),
  productsControllers.getProductById,
);

app.get(
  '/products/:productId/recommended',
  express.json(),
  productsControllers.getRecommendedProducts,
);

app.listen(port);
