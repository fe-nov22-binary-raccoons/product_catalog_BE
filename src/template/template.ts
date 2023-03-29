import { readFileSync } from 'fs';
import path from 'path';

export const returnTemplate = (): string => {
  const p = path.resolve('src', 'template', './template.html');
  const file = readFileSync(p, 'utf-8');

  return file;
};
