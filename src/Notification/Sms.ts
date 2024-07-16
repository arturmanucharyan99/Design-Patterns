import { Observer } from "./interface/Observer";

export class SmsNotifiaction implements Observer {
    constructor(public username: string){}
    sendNotification(message: string): void {
        console.log(message);
    }
}