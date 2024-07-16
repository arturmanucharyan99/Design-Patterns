import { Observer } from "./interface/Observer";

export class Email implements Observer {
    constructor(public username: string){}
    sendNotification(message:string) {
        console.log(message);
    }
}