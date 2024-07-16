import { Staff } from "./staff";
import { Customer } from "./customer";

export class  UserFactory{
   static CreateUser (type: string, username: string) {
    switch(type) {
        case "Staff":
            return new Staff(username, type);
        case "Customer":
            return new Customer(username, type);
        default:
            throw new Error("Invalid user type");

    }
   }
}