// import path from 'path';
// import { readFile } from 'fs/promises';
import { Phone } from '../models/Phone.js';

export const getPage = async(page: number, size: number) => {
  const offset = (page - 1) * size;

  return Phone.findAll({
    offset,
    limit: size,
  });
};

export const getCount = async() => {
  return Phone.count();
};
