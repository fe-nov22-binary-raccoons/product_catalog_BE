import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

app.get('/expenses', (req, res) => {
  res.send('<div>HSsdsd</div>');
});

app.listen(port);
