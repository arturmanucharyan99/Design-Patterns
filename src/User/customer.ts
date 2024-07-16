import { User } from "./interface/user";

export class Customer implements User {
    constructor(
        public username: string,
        public role: string,
    ) {}
}