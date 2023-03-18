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
    res.sendStatus(500);

    return;
  }

  res.send(pageOfPhones);
};
