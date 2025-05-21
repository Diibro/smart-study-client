import axios, { AxiosResponse } from "axios";
import IUser from "../interfaces/Dashboard/IUser";
import server from "./Server";
import IResponce from "../interfaces/Dashboard/IResponce";

export default {
     login: async (user:IUser, cb:(res: AxiosResponse | null, error: Error | null) => void) => {
          console.log(server.user.login);
          try {
               const res = await axios.post(server.user.login, user);
               return cb(res, null);
          } catch (error:unknown) {
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     },
     logout: async(cb:(res: AxiosResponse | null, error: Error | null )=> void) => {
          try {
               const res = await axios.post(server.user.logout);
               return cb(res, null);
          } catch (error:unknown) {
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     },
     activateAccount: async(user:IUser, cb: (res:AxiosResponse | null, error: Error | null) => void) => {
          try{
               
               const res = await axios.post(server.user.activate, user)
               return cb(res, null);
          }catch(error:unknown){
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     },
     checkSession: async(token:string, cb: (res:AxiosResponse | null, error: Error | null) => void) => {
          try{
               const res = await axios.post(server.user.checkSession, token);
               return cb(res, null);
          }catch(error:unknown){
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     },
     signup: async(user:IUser, cb: (res:AxiosResponse | null, error: Error | null) => void) => {
          try{
               
               const res = await axios.post(server.user.add, user)
               return cb(res, null);
          }catch(error:unknown){
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     },
     update: async(user:IUser, cb: (res:AxiosResponse | null, error: Error | null) => void) => {
          try{
               
               const res = await axios.put(server.user.update, user)
               return cb(res, null);
          }catch(error:unknown){
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     },
     delete: async(user:IUser, cb: (res:AxiosResponse | null, error: Error | null) => void) => {
          try{
               
               const res = await axios.post(server.user.delete, user)
               return cb(res, null);
          }catch(error:unknown){
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     },
     completeActivation: async(info:IResponce<IUser>, cb: (res:AxiosResponse | null, error: Error | null) => void) => {
          try{
               
               const res = await axios.post(server.user.completeActivation, info)
               return cb(res, null);
          }catch(error:unknown){
               if (axios.isAxiosError(error)) {
                    cb(null, error);
               } else {
               cb(null, new Error('An unexpected error occurred'));
               }
          }
     }
}