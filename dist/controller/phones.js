import * as phoneServices from '../services/phones.js';
export const getAll = async (req, res) => {
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
  if (typeof pageOfPhones === 'number') {
    res.sendStatus(pageOfPhones);
    return;
  }
  res.send(pageOfPhones);
};
export const getRecommendedPhones = async (req, res) => {
  const { phoneId } = req.params;
  const pageOfPhones = await phoneServices.getRecommendedPhones(phoneId);
  if (typeof pageOfPhones === 'number') {
    res.sendStatus(pageOfPhones);
    return;
  }
  res.send(pageOfPhones);
};
export const getPhoneById = async (req, res) => {
  const { phoneId } = req.params;
  const phone = await phoneServices.getPhoneById(phoneId);
  if (typeof phone === 'number') {
    res.sendStatus(phone);
    return;
  }
  res.send(phone);
};
//# sourceMappingURL=phones.js.map
