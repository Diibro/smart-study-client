import { EStatus } from "../../enums/EStatus";
import ICourse from "./ICourse";

export default interface ITask{
     taskId: string,
     taskTitle: string,
     taskDescription: string,
     startDate: Date,
     endDate: Date,
     status: EStatus,
     active: boolean,
     course?: ICourse
}