import { Request as Req, Response as Res } from 'express';
import * as phoneServices from '../services/phones.js';

export const getAll = async(req: Req, res: Res) => {
  let { page, size } = req.query;

  if (!page && !size) {
    const phones = await phoneServices.getAll();

    res.send(phones);

    return;
  }

  if (!page) {
    page = '1';
  }

  if (!size) {
    size = '12';
  }

  const pageOfPhones = await phoneServices.getPage(+page, +size);

  res.send(pageOfPhones);
};
