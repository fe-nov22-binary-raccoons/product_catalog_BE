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

export const getRecommendedPhones = async(phoneId: string) => {
  try {
    const phones = await Phone.findAll({
      order: [['name', 'ASC']],
    });

    let id = phones.findIndex((phone) => phone.phoneId === phoneId);

    if (id === -1) {
      return 404;
    }

    if (id > phones.length - 9) {
      id = phones.length - 9;
    }

    const relatedPhones = phones.slice(id + 1, id + 9);

    return { phones: relatedPhones };
  } catch {
    return 500;
  }
};

export const getPhoneById = async(phoneId: string) => {
  try {
    const phone = await PhoneItem.findByPk(phoneId);

    if (!phone) {
      return 404;
    }

    return phone;
  } catch {
    return 500;
  }
};
