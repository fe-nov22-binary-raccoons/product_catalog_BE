# API Endpoints for Product Information

### Overview

You can get product information through the following endpoints:

- /products or /products?page=_&size=_&sortBy=_&productType=_
- /products/:productId
- /products/:productId/recommended
- /products/discount
- /products/new
- /products/category

If the page, size, sortBy, or productType parameters are not specified, they will be set to their default values.

sortBy values: title, age, price <br />
page by default = 1 <br />
size by default = 16 <br />
sortBy by default = age <br />
productType by default = products <br />

Each endpoint returns a different set of information, as described below.

### Endpoints:

- GET /products
  Returns an object with the following parameters:

products <br />
total <br />
page <br />
size <br />
sort <br />
category <br />

- GET /products/:productId
  Returns information about a single product as an object.

- GET /products/:productId/recommended
  Returns an object with an array of 8 recommended products.

- GET /products/discount
  Returns an object with an array of 12 products with the biggest sales.

- GET /products/new
  Returns an object with an array of 12 newest products.

- GET /products/category
  Returns all categories.

You will also need to create .env file with current variables:
PGHOST='host-link' <br />
PGDATABASE='database-name' <br />
PGUSER='user-name' <br />
PGPASSWORD='password' <br />
ENDPOINT_ID='endpointId' <br />
PORT='port' <br />

SMTP_HOST='email-host' <br />
SMTP_PORT='port' <br />
SMTP_USER='email' <br />
SMTP_PASSWORD='password' <br />

CLIENT_URL='host-link'
