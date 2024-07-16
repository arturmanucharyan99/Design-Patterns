import { ProductA } from "./productA";
import { ProductB } from "./productB";


export class ProductFactory {

    public static createProduct(type:string, price: number) {
        switch (type) {
            case "ProductA":
               return new ProductA(price, type);
            case "ProductB":
               return new ProductB(price, type);
            default:
                throw new Error("We don't have that product");
        }
    }
}