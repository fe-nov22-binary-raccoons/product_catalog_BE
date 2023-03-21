import { PhoneItem } from './models/PhoneItem.js';
import { Product } from './models/Product.js';
import { User } from './models/User.js';
import { initDB } from './utils/initDB.js';

(async() => {
  initDB();
  await Product.sync({ alter: true });
  await PhoneItem.sync({ alter: true });
  await User.sync({ alter: true });
})();
