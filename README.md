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

sortBy values: title, age, price
page by default = 1
size by default = 16
sortBy by default = age
productType by default = products

Each endpoint returns a different set of information, as described below.

### Endpoints:

- GET /products
  Returns an object with the following parameters:

products
total
page
size
sort
category

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
PGHOST='host-link'
PGDATABASE='database-name'
PGUSER='user-name'
PGPASSWORD='password'
ENDPOINT_ID='endpointId'
PORT='port'

SMTP_HOST='email-host'
SMTP_PORT='port'
SMTP_USER='email'
SMTP_PASSWORD='password'

CLIENT_URL='host-link'
