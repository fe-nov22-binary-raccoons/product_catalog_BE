import express from 'express';
import * as productsControllers from '../controller/products.js';
import { catchError } from '../utils/catchError.js';

export const router = express.Router();

router.get('/', catchError(productsControllers.getAll));

router.get('/categories', catchError(productsControllers.getCategories));

router.get('/new', catchError(productsControllers.getNewProducts));

router.get(
  '/discount',
  catchError(productsControllers.getProductsWithDiscount)
);

router.get('/:productId', catchError(productsControllers.getProductById));

router.get(
  '/favourites/:productId',
  catchError(productsControllers.getProductByNumberId)
);

router.get(
  '/:productId/recommended',
  catchError(productsControllers.getRecommendedProducts)
);
