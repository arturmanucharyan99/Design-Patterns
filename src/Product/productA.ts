import { ProductInterface } from "./interface/Product.interface";
import { Product } from "./interface/product";


export class ProductA extends Product  {
    public someValidation(): void {
        console.log('some Validation');
    }
    
   

}