import express from 'express';
import * as productsControllers from '../controller/products.js';

export const router = express.Router();

router.get('/', productsControllers.getAll);

router.get('/categories', productsControllers.getCategories);

router.get('/new', productsControllers.getNewProducts);

router.get('/discount', productsControllers.getProductsWithDiscount);

router.get('/:productId', productsControllers.getProductById);

router.get(
  '/:productId/recommended',
  productsControllers.getRecommendedProducts,
);
