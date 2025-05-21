import { EStatus } from "../../enums/EStatus";
import IResource from "./IResource";
import ITask from "./ITask";
import IUser from "./IUser";

export default interface ICourse{
     courseId?:string,
     courseName?: string,
     courseCode?: string,
     startDate?: Date,
     endDate?: Date,
     status?: EStatus,
     active?: boolean,
     user?: IUser,
     resources?: IResource[],
     tasks?: ITask[]
}