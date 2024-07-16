import { ProductInterface } from "./Product.interface";

export abstract class Product {
    public static products = [
        {
            type: "ProductC",
            price: 500,
        },
        {
            type: "ProductD",
            price: 300,
        },
    ];

    constructor(
        public price: number,
        public type: string,
    ){}
    public static addProduct(product:ProductInterface): void {
        this.products.push(product);
    }
    public abstract someValidation():void;
}