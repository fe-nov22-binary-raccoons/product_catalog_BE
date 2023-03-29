import { type Request as Req, type Response as Res } from 'express';
import * as productsServices from '../services/products.js';

export const getAll = async(req: Req, res: Res): Promise<void> => {
  const { page, size, sortBy, productType } = req.query;
  const pageNumber = Number(page) || 1;
  const sizeNumber = Number(size) || 16;
  const sort = String(sortBy);
  const product = productType ? String(productType) : 'phones';

  const pageOfPhones = await productsServices.getPage(
    pageNumber,
    sizeNumber,
    sort,
    product
  );

  if (typeof pageOfPhones === 'number') {
    res.sendStatus(pageOfPhones);

    return;
  }

  res.send(pageOfPhones);
};

export const getProductById = async(req: Req, res: Res): Promise<void> => {
  const { productId } = req.params;

  const product = await productsServices.getProductById(productId);

  if (typeof product === 'number') {
    res.sendStatus(product);

    return;
  }

  res.send(product);
};

export const getProductByNumberId = async(
  req: Req, res: Res
): Promise<void> => {
  const { productId } = req.params;

  const product = await productsServices.getProductFromProductsById(productId);

  if (typeof product === 'number') {
    res.sendStatus(product);

    return;
  }

  res.send(product);
};

export const getRecommendedProducts = async(
  req: Req, res: Res
): Promise<void> => {
  const { productId } = req.params;

  const pageOfPhones = await productsServices.getRecommendedProducts(productId);

  if (typeof pageOfPhones === 'number') {
    res.sendStatus(pageOfPhones);

    return;
  }

  res.send(pageOfPhones);
};

export const getNewProducts = async(req: Req, res: Res): Promise<void> => {
  const products = await productsServices.getNewProducts();

  if (typeof products === 'number') {
    res.sendStatus(products);

    return;
  }

  res.send(products);
};

export const getProductsWithDiscount = async(
  req: Req, res: Res
): Promise<void> => {
  const products = await productsServices.getProductsWithDiscount();

  if (typeof products === 'number') {
    res.sendStatus(products);

    return;
  }

  res.send(products);
};

export const getCategories = async(req: Req, res: Res): Promise<void> => {
  const categories = await productsServices.getCategories();

  if (typeof categories === 'number') {
    res.sendStatus(categories);

    return;
  }

  res.send(categories);
};
