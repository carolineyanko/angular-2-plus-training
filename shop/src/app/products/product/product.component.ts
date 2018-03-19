import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../../enums/category.enums';
import { CartService } from '../../cart/cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  // @Output() selectProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {}

  onBuy(): void {
    console.log(`You've successfully bought ${this.product.name}`);
    this.cartService.addToCart(this.product);
    // this.selectProduct.emit(this.product);
  }
}
