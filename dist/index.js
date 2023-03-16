import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './utils/initDB.js';
import { returnTemplate } from './template/template.js';
import * as phoneControllers from './controller/phones.js';
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
initDB();
app.get('', (req, res) => {
  res.send(returnTemplate());
});
app.get('/phones', express.json(), phoneControllers.getAll);
app.listen(port);
//# sourceMappingURL=index.js.map
