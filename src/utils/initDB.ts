import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { PhoneItem } from '../models/PhoneItem.js';
import { Product } from '../models/Product.js';
import { User } from '../models/User.js';

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const DBURL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const initDB = () => {
  return new Sequelize(DBURL, {
    models: [Product, PhoneItem, User],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });
};
