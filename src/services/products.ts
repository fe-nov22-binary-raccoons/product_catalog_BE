import { Phone } from '../models/Phone.js';
import { PhoneItem } from '../models/PhoneItem.js';
import { setSortType } from '../utils/setSortType.js';

export const getPage = async(
  page: number,
  size: number,
  sortType: string,
  productType: string,
) => {
  const offset = (page - 1) * size;
  const sortBy = setSortType(sortType);

  try {
    const { count, rows } = await Phone.findAndCountAll({
      where: {
        category: productType,
      },
      order: [sortBy],
      offset,
      limit: size,
    });

    return {
      products: rows,
      total: count,
      page,
      size,
      sort: sortBy[0],
      category: productType,
    };
  } catch {
    return 500;
  }
};

export const getProductById = async(productId: string) => {
  try {
    const product = await PhoneItem.findByPk(productId);

    return product || 404;
  } catch {
    return 500;
  }
};

export const getRecommendedProducts = async(productId: string) => {
  try {
    const products = await Phone.findAll({
      order: [['name', 'ASC']],
    });

    const id = products.findIndex((product) => product.phoneId === productId);

    if (id === -1) {
      return 404;
    }

    let relatedProducts = products.slice(id - 8, id);

    if (!relatedProducts.length) {
      relatedProducts = [...products.slice(id - 8), ...products.slice(0, id)];
    }

    return { products: relatedProducts };
  } catch {
    return 500;
  }
};

export const getNewProducts = async() => {
  try {
    const products = await Phone.findAll({
      order: [['year', 'DESC']],
      offset: 1,
      limit: 12,
    });

    return { products };
  } catch {
    return 500;
  }
};

export const getProductsWithDiscount = async() => {
  try {
    const products = await Phone.findAll();

    products.sort(
      (product1, product2) =>
        product2.fullPrice
        - product2.price
        - (product1.fullPrice - product1.price),
    );

    return { products: products.slice(0, 12) };
  } catch {
    return 500;
  }
};

// export const getCategories = async() => {
//   try {
//     const categoriesObjects = await Phone.findAll({
//       attributes: ['category'],
//       group: ['category'],
//     });

//     const categories = categoriesObjects.map(obj => obj.category)

//     return { categories };
//   } catch {
//     return 500;
//   }
// };
