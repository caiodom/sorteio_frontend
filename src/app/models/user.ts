import { Base } from "./base";

export class User extends Base{
    email:string | undefined;
    password:string | undefined;
    confirmPassword:string | undefined;
    role:string | undefined
}
