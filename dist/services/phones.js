import { Phone } from '../models/Phone.js';

export const getPage = async (page, size) => {
  const offset = (page - 1) * size;

  return Phone.findAll({
    offset,
    limit: size,
  });
};
// # sourceMappingURL=phones.js.map
