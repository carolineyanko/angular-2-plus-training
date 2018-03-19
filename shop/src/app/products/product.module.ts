import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartModule } from '../cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    CartModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }
