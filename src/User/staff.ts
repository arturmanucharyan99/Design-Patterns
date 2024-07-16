import { User } from "./interface/user";

export class Staff implements User {
    constructor(
        public username: string,
        public role: string,
    ) {}
}