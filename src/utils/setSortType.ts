import { type Sort, type Order, type SortType } from '../types/Sort.js';

export const setSortType = (sortBy: string): SortType => {
  let sortField: Sort = 'year';
  let sortOrder: Order = 'DESC';

  if (sortBy === 'title') {
    sortField = 'name';
    sortOrder = 'ASC';
  }

  if (sortBy === 'price') {
    sortField = 'price';
    sortOrder = 'ASC';
  }

  return [sortField, sortOrder];
};
