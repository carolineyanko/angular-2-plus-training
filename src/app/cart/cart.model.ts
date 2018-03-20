import { Product } from '../products/product.model';

interface CartItemInterface {
    product: Product;
    quantity: number;
}

export class CartItem implements CartItemInterface {
    public product: Product;
    public quantity: number;

    constructor(item: Product) {
        this.product = item;
        this.quantity = 1;
    }
}
