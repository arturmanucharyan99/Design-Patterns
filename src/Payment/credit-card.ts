import { PaymentStrategy } from "./interface/paymentStrategy";



export class CreditCard implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card`);
    }
}