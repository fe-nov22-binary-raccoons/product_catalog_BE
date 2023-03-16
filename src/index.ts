import express, { Express } from 'express';
import dotenv from 'dotenv';
import { initDB } from './utils/initDB.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

initDB();

app.get('/expenses', (req, res) => {
  res.send('<div>HSsdsd</div>');
});

app.listen(port);
