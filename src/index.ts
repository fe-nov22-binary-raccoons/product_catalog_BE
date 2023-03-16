import express, { Express } from 'express';
import dotenv from 'dotenv';
import { initDB } from './utils/initDB.js';

import * as phoneControllers from './controller/phones.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

initDB();

app.get('/phones', express.json(), phoneControllers.getAll);

app.listen(port);
