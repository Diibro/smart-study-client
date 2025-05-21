
import ICourse from "./ICourse";

export default interface IResource{
     resourceId: string,
     resourceName: string,
     resourceURL:string,
     registrationDate: Date,
     active: boolean,
     course: ICourse
}