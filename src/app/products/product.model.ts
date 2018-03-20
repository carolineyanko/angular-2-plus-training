import { Category } from '../enums/category.enums';

interface ProductInterface {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
}

export class Product implements ProductInterface {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public category: Category;
    public isAvailable: boolean;

    constructor(product: Product) {
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.category = product.category;
        this.isAvailable = product.isAvailable;
    }
}
