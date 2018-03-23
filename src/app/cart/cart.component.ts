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

  onAddProductQuantity(item: CartItem): void {
    this.cartService.increaseQuantity(item);
  }

  onDeductProductQuantity(item: CartItem): void {
    this.cartService.decreaseQuantity(item);
  }

  onDeleteProduct(item: CartItem): void {
    this.cartService.removeItem(item);
  }
}
