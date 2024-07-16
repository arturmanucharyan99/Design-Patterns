import { Observer } from "./interface/Observer";
import { Subject } from "./interface/Subject";


export class ProductNotifier implements Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyUser(username: string): void {
        const observer = this.observers.find(observer => observer.username === username);
        if (observer) {
            observer.sendNotification("Payment has been processed successfully.");
        }
    }

    addProductNotification(message:string): void {
        this.observers.forEach(observer => observer.sendNotification(message));
    }
}