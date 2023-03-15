import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const app = express();

app.get('/expenses', (req, res) => {
  res.send('<div>HSsdsd</div>');
});
app.listen(port);
// # sourceMappingURL=index.js.map
