import { Injectable } from '@angular/core';

import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';
import { CartItem } from './cart.model';

@Injectable()
export class CartService {
  cartItems: CartItem[];

  constructor(private productService: ProductService) {
    this.cartItems = [];
  }

  getCart(): CartItem[] {
    return this.cartItems;
  }

  findCartItemIndex(item: Product): number {
    return this.cartItems.findIndex((cartItem) => {
      return cartItem.product.id === item.id;
    });
  }

  addToCart(item: Product): void {
    const itemIndex = this.findCartItemIndex(item);

    itemIndex !== -1
      ? this.increaseQuantity(this.cartItems[itemIndex])
      : this.cartItems.push(new CartItem(item));
  }

  increaseQuantity(item: CartItem): void {
    item.quantity += 1;
  }

  decreaseQuantity(item: CartItem): void {
    item.quantity = item.quantity > 0 ? item.quantity - 1 : 0;
  }

  removeItem(item: CartItem): void {
    this.cartItems.splice(this.findCartItemIndex(item.product), 1);
  }
}
