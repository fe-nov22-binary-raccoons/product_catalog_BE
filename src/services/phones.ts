import { Phone } from '../models/Phone.js';

export const getPage = async(page: number, size: number) => {
  const offset = (page - 1) * size;

  try {
    const phones = await Phone.findAll({
      offset,
      limit: size,
    });

    const total = await Phone.count();

    return {
      phones,
      total,
      page,
      size,
    };
  } catch {
    return 500;
  }
};
