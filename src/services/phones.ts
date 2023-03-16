import path from 'path';
import { readFile } from 'fs/promises';

export const getAll = async() => {
  const data = await readFile(path.resolve('src', 'phones.json'));

  const phones = JSON.parse(data.toString());

  return phones;
};

export const getPage = async(page: number, size: number) => {
  const data = await readFile(path.resolve('src', 'phones.json'));

  const phones = JSON.parse(data.toString());

  const start = (page - 1) * size;
  const end = page * size;

  return phones.slice(start, end);
};
