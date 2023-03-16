import { Item } from './models/Item.js';
import { Phone } from './models/Phone.js';
import { initDB } from './utils/initDB.js';
(async () => {
  initDB();
  await Phone.sync({ alter: true });
  await Item.sync({ alter: true });
})();
//# sourceMappingURL=setup.js.map
