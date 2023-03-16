import { Phone } from '../models/Phone.js';
export const getPage = async (page, size) => {
  const offset = (page - 1) * size;
  return Phone.findAll({
    offset,
    limit: size,
  });
};
export const getCount = async () => {
  return Phone.count();
};
//# sourceMappingURL=phones.js.map
