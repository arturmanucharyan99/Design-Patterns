import { PaymentStrategy } from "./interface/paymentStrategy";


export class Paypal implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Paypal`);
    }
}