import { Phone } from '../models/Phone.js';
import { PhoneItem } from '../models/PhoneItem.js';

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

export const getPhoneById = async(phoneId: string) => {
  try {
    const phone = await PhoneItem.findByPk(phoneId);

    return phone;
  } catch {
    return 500;
  }
};
