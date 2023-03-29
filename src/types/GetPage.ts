import { type Product } from '../models/Product';
import { type Sort } from './Sort';

export interface GetPage {
  products: Product[]
  total: number
  page: number
  size: number
  sort: Sort
  category: string
}
