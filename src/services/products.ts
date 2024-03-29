import { Product } from '../models/Product.js';
import { PhoneItem } from '../models/PhoneItem.js';
import { setSortType } from '../utils/setSortType.js';
import { type GetPage } from '../types/GetPage.js';
import { type Category } from '../types/Category.js';

export const getPage = async(
  page: number,
  size: number,
  sortType: string,
  productType: string
): Promise<500 | GetPage> => {
  const offset = (page - 1) * size;
  const sortBy = setSortType(sortType);

  try {
    const { count, rows } = await Product.findAndCountAll({
      where: {
        category: productType
      },
      order: [sortBy],
      offset,
      limit: size
    });

    return {
      products: rows,
      total: count,
      page,
      size,
      sort: sortBy[0],
      category: productType
    };
  } catch {
    return 500;
  }
};

export const getProductById = async(
  productId: string
): Promise<500 | PhoneItem | 404> => {
  try {
    const product = await PhoneItem.findByPk(productId);

    return product || 404;
  } catch {
    return 500;
  }
};

export const getProductFromProductsById = async(
  phoneId: string
): Promise<Product | 500 | 404> => {
  try {
    const product = await Product.findOne({
      where: { phoneId }
    });

    return product || 404;
  } catch {
    return 500;
  }
};

export const getRecommendedProducts = async(
  productId: string
): Promise<
| 500
| 404
| {
  products: Product[]
}
> => {
  try {
    const products = await Product.findAll({
      order: [['name', 'ASC']]
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

export const getNewProducts = async(): Promise<
| 500
| {
  products: Product[]
}
> => {
  try {
    const products = await Product.findAll({
      order: [['year', 'DESC']],
      offset: 1,
      limit: 12
    });

    return { products };
  } catch {
    return 500;
  }
};

export const getProductsWithDiscount = async(): Promise<
| 500
| {
  products: Product[]
}
> => {
  try {
    const products = await Product.findAll();

    products.sort(
      (product1, product2) =>
        product2.fullPrice -
        product2.price -
        (product1.fullPrice - product1.price)
    );

    return { products: products.slice(0, 12) };
  } catch {
    return 500;
  }
};

export const getCategories = async(): Promise<500 | Category[]> => {
  try {
    const products = await Product.findAll();

    const phonesCount = products.filter(
      (product) => product.category === 'phones'
    ).length;
    const tabletsCount = products.filter(
      (product) => product.category === 'tablets'
    ).length;
    const accesoiresCount = products.filter(
      (product) => product.category === 'accesoires'
    ).length;

    return [
      {
        id: 1,
        name: 'Mobile phones',
        itemsCount: phonesCount,
        img: 'https://i.ibb.co/9tRcHMV/category-phones.png',
        path: 'phones',
        backgroundColor: '#6D6474'
      },
      {
        id: 2,
        name: 'Tablets',
        itemsCount: tabletsCount,
        img: 'https://i.ibb.co/ZfxmNQ4/category-tablets.png',
        path: 'tablets',
        backgroundColor: '#8D8D92'
      },
      {
        id: 3,
        name: 'Accessories',
        itemsCount: accesoiresCount,
        img: 'https://i.ibb.co/cCqB3t2/category-accessories.png',
        path: 'accessories',
        backgroundColor: '#D53C51'
      }
    ];
  } catch {
    return 500;
  }
};
