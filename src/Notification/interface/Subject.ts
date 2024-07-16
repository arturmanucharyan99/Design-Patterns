import { Observer } from "./Observer";

export interface Subject {
    addObserver(observer: Observer): void;
    notifyUser(username: string): void;
    addProductNotification(message: string): void;
}