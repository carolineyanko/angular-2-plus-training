import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { Category } from '../enums/category.enums';

const productMock = [
  {
    id: 1,
    name: 'Wonder product',
    description: 'The best product in the Wonderland',
    price: 99.99,
    category: Category.Category2,
    isAvailable: true
  },
  {
    id: 2,
    name: 'Wonder product1',
    description: 'The best product in the Wonderland',
    price: 9.9,
    category: Category.Category4,
    isAvailable: true
  },
  {
    id: 3,
    name: 'Wonder product2',
    description: 'The best product in the Wonderland',
    price: 9.99,
    category: Category.Category1,
    isAvailable: true
  },
  {
    id: 4,
    name: 'Wonder product3',
    description: 'The best product in the Wonderland',
    price: 99.9,
    category: Category.Category3,
    isAvailable: true
  }
];

@Injectable()
export class ProductService {
  private products: Product[];
  constructor() {
    this.products = productMock.map(product  => new Product(product));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(productId): Product {
    return this.products.find(product => product.id === productId);
  }
}
