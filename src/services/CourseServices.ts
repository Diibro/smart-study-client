import axios, { AxiosResponse } from "axios"
import server from "./Server"
import ICourse from "../interfaces/Dashboard/ICourse"
export default {
     add: async(course:ICourse,cb: (res: AxiosResponse | null, error: Error | null) => void) => {
          try {
               const accessToken:string = sessionStorage.getItem("accessToken") || "";
               console.log(course);
               const res = await axios.post(server.course.add, course, {
                    headers: {
                         Authorization: `Bearer ${accessToken}`
               }
               });
               return cb(res, null);
          } catch (error:unknown) {
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     },
     update: async(course:ICourse,cb: (res: AxiosResponse | null, error:Error | null) => void) => {
          try {
               const res = await axios.put(server.course.update, course);
               return cb(res, null);
          } catch (error:unknown) {
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     },
     delete: async (course:ICourse,cb: (res: AxiosResponse | null, error:Error | null) => void) => {
          try {
               const res = await axios.post(server.course.delete, course);
               return cb(res, null);
          } catch (error:unknown) {
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     },
     search: (course:ICourse,cb: (res: AxiosResponse) => void):void => {
          axios.post(server.course.add, course)
          .then((res:AxiosResponse) => cb(res))
          .catch(error => cb(error));
     },
     findAll: async (cb: (res: AxiosResponse | null, error:Error | null ) => void) => {
          try {
               const res = await axios.get(server.course.getAll);
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