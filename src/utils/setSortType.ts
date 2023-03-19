import { sort, order, sortType } from '../types/sort.js';

export const setSortType = (sortBy: string): sortType => {
  let sortField: sort = 'year';
  let sortOrder: order = 'DESC';

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
