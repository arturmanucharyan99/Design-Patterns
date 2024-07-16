import minimist from "minimist";
import { UserFactory } from "./User/userFactroy";
import { Checkout } from "./Payment/checkout";
import { CreditCard } from "./Payment/credit-card";
import { User } from "./User/interface/user";
import { ProductFactory } from "./Product/ProductFabrica";
import { Product } from "./Product/interface/product";
import { Paypal } from "./Payment/paypal";
import { ProductNotifier } from "./Notification/ProductNotifier";
import { Email } from "./Notification/Email";
import { SmsNotifiaction } from "./Notification/Sms";


const {role, username, price, paymentMethod, productType, typeNotifaction} = minimist(process.argv.slice(2));

const productNotifier = new ProductNotifier();
let notification;
if (typeNotifaction === 'sms') {
    notification = new SmsNotifiaction(username);
} else {
    notification = new Email(username);
}
productNotifier.addObserver(notification);

const user: User = UserFactory.CreateUser(role, username);

if (user.role === "Customer") {
    const findProduct = Product.products.find(prod => prod.type === productType);
    
    if (findProduct){
        const cardMethod = paymentMethod === 'paypal' ? new Paypal() : new CreditCard();
        const payment = new Checkout(cardMethod); 
        productNotifier.notifyUser(username);
        payment.processPayment(findProduct.price, price);
    }
    else {
        throw new Error("we don't have that product")
    }
} else {
    const someProduct: Product = ProductFactory.createProduct(productType, price);
    Product.addProduct(someProduct);
    productNotifier.addProductNotification("We add new Product");
}

// npx ts-node src/index.ts --role=Staff  --username=Alice --price=400  --productType=ProductA --typeNotifaction=sms
// npx ts-node src/index.ts --role=Customer  --username=Alice --price=700 --paymentMethod=paypal  --productType=ProductC --typeNotifaction=sms



