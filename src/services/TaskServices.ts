import axios, { AxiosResponse } from "axios";
import ITask from "../interfaces/Dashboard/ITask";
import Server from "./Server";

export default {
     add: async(task:ITask,cb: (res: AxiosResponse | null, error: Error | null) => void) => {
          try {
               const res = await axios.post(Server.task.add, task);
               return cb(res, null);
          } catch (error:unknown) {
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     },
}