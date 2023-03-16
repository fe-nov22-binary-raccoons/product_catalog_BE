import { PhoneItem } from './models/PhoneItem.js';
import { Phone } from './models/Phone.js';
import { initDB } from './utils/initDB.js';

(async() => {
  initDB();
  await Phone.sync({ alter: true });
  await PhoneItem.sync({ alter: true });
})();
