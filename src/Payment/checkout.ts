import { PaymentStrategy } from "./interface/paymentStrategy";


export class Checkout {
    constructor(private paymentStrategy: PaymentStrategy) {}

    processPayment(price:number, amount: number) {
        if((amount - price) >= 0) {
            this.paymentStrategy.pay(amount);
        } else {
            throw new Error("you don't have enough money");
        }
    }
}