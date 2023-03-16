import { Phone } from '../models/Phone.js';
import { PhoneItem } from '../models/PhoneItem.js';
export const getPage = async (page, size) => {
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
  } catch (_a) {
    return 500;
  }
};
export const getPhoneById = async (phoneId) => {
  try {
    const phone = await PhoneItem.findByPk(phoneId);
    return phone;
  } catch (_a) {
    return 500;
  }
};
//# sourceMappingURL=phones.js.map
