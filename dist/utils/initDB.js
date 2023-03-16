import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Item } from '../models/Item.js';
import { Phone } from '../models/Phone.js';
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const DBURL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const initDB = () => {
  return new Sequelize(DBURL, {
    models: [Phone, Item],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });
};
// # sourceMappingURL=initDB.js.map