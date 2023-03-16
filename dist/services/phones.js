import { Phone } from '../models/Phone.js';
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
//# sourceMappingURL=phones.js.map

