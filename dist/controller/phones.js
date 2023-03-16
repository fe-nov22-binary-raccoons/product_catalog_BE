import * as phoneServices from '../services/phones.js';

export const getAll = async(req, res) => {
  const { page, size } = req.query;
  let pageNumber = Number(page);
  let sizeNumber = Number(size);

  if (!pageNumber) {
    pageNumber = 1;
  }

  if (!sizeNumber) {
    sizeNumber = 16;
  }

  const pageOfPhones = await phoneServices.getPage(pageNumber, sizeNumber);

  res.send(pageOfPhones);
};
// # sourceMappingURL=phones.js.map
