import { Request as Req, Response as Res } from 'express';
import * as phoneServices from '../services/phones.js';

export const getAll = async(req: Req, res: Res) => {
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

export const getPhoneById = async(req: Req, res: Res) => {
  const { phoneId } = req.params;

  const phone = await phoneServices.getPhoneById(phoneId);

  if (typeof phone === 'number') {
    res.sendStatus(phone);

    return;
  }

  res.send(phone);
};
