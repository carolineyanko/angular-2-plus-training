import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';
import { CartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  addProductQuantity(item: CartItem): void {
    this.cartService.increaseQuantity(item);
  }

  deductProductQuantity(item: CartItem): void {
    this.cartService.decreaseQuantity(item);
  }

  deleteProduct(item: CartItem): void {
    this.cartService.removeItem(item);
  }
}
