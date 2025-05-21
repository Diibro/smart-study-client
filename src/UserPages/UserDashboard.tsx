import React, { useEffect, useState } from 'react'
import NavBar from '../components/userDashboard/NavBar'
import { Link, Route, Routes } from 'react-router-dom'
import UserHome from './UserHome'
import Profile from './Profile'
import CoursesPage from './CoursesPage'
import TasksPage from './TasksPage'
import ResourcesPage from './ResourcesPage'
import LogoutPage from './LogoutPage'
import services from "../services/UserServices";
import { showNotification } from '../util/UIFunctions'
import IResponce from '../interfaces/Dashboard/IResponce'
import IUser from '../interfaces/Dashboard/IUser'
import { AxiosResponse } from 'axios'
import AddTaskForm from '../components/userDashboard/AddTaskForm'
import AddCourseForm from '../components/userDashboard/AddCourseForm'

const UserDashboard:React.FC = () => {
     const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
     const fetchUserInfo = () => {
          const token:string = sessionStorage.getItem("accessToken") || "";
          document.cookie = `token=${token}; path=/;`;
               if(token !== ""){
                    services.checkSession(token,(res:AxiosResponse | null, error: Error | null) => {
                         console.log(res);
                         try {
                              const resInfo:IResponce<IUser> = res?.data;
                              if(resInfo.entity != null) {
                                   setIsLoggedIn(true);
                                   sessionStorage.setItem("userInfo", JSON.stringify(resInfo.entity));
                              }else{
                                   showNotification(resInfo?.info || "Authentication failed. First login", "fail-notification");
                              }
                              if(error){
                                   console.log(error);
                              }
                         } catch (error) {
                              showNotification("Authentication error", "fail-notification");
                              console.log(error);
                         }
                    } )
               }else{
                    showNotification("Not logged in", "fail-notification");
               }
                
          
     }
     useEffect(() => {
          fetchUserInfo();
     }, [])
     if(isLoggedIn){
          return (
               <div className='user-dashboard'>
                    <NavBar/>
                    <Routes>
                         <Route path="/" element={<UserHome/>} />
                         <Route path='/profile' element={<Profile />} />
                         <Route path="/courses" element={<CoursesPage />} />
                         <Route path='/tasks' element={<TasksPage />} />
                         <Route path='/resources' element={<ResourcesPage />} />
                         <Route path='/logout' element={<LogoutPage />} />
                    </Routes>
                    <AddCourseForm/>
                    <AddTaskForm/>
               </div>
               )
     }else{
          return (
               <div className='user-dashboard'>
                    <h3>You must be logged in to access the user dashboard</h3>
                    <Link className='my-button' to="/login">Login</Link>
               </div>
          )
     }
     
}

export default UserDashboard