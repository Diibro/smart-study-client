import { ERole } from "../../enums/ERole";
import ICourse from "./ICourse";

export default interface IUser {
     email?:string,
     name?:string,
     phone?:string,
     password?:string,
     active?:boolean,
     role?: ERole,
     registrationDate?:Date,
     courses?: ICourse[]
}