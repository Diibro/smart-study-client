import React, { useEffect, useState } from 'react'
import ICourse from '../../interfaces/Dashboard/ICourse'
import { EStatus } from '../../enums/EStatus'
import IUser from '../../interfaces/Dashboard/IUser'
import userServices from "../../services/UserServices"
import services from "../../services/CourseServices";
import { showNotification } from '../../util/UIFunctions';
import IResponce from '../../interfaces/Dashboard/IResponce';
import { AxiosResponse } from 'axios';

const AddCourseForm:React.FC = () => {
     const [course, setCourse] = useState<ICourse> ({
          courseId: "",
          courseName: "",
          courseCode: "",
          startDate: new Date(),
          endDate: new Date(),
          status: EStatus.PROGRESS,
          active: true,
          resources: [],
          user:JSON.parse(sessionStorage.getItem("userInfo") || "") || null,
          tasks: []
     })

     const closeForm = () => {
          const formElement:HTMLElement | null = document.getElementById("addCourse-form");
          if(formElement != null){
               formElement.style.display = 'none';
          }

     }

     const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
          const {name, value}  = e.target;
          setCourse(prev => ({
               ...prev,
               [name]: value
          }));
     }

     const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          services.add(course, (res:AxiosResponse | null ,error:Error | null) => {
               try {
               const courseRes:IResponce<ICourse> = res?.data;
                    if(courseRes != null ){
                         if(courseRes.entity != null){
                              showNotification(courseRes.info || "success", "pass-notification");
                         }else{
                              showNotification(courseRes.info || "Failure", "fail-notification");
                         }
                         
                         
                    }else{
                         console.log(error);
                         showNotification("application error", "fail-notification");
                    }
               } catch (error) {
                    console.log(error)
                    showNotification("Error adding course. try again latter","fail notification");
               }

               closeForm();
          })
     }

     const fetchUserInfo = () => {
          const token:string = sessionStorage.getItem("accessToken") || "";
               if(token !== ""){
                    userServices.checkSession(token,(res:AxiosResponse | null, error: Error | null) => {
                         console.log(res);
                         try {
                              const resInfo:IResponce<IUser> = res?.data;
                              if(resInfo.entity != null) {
                                   console.log(resInfo);
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
     return (
          <div className='dash-forms' id='addCourse-form'>
               <span onClick={closeForm} className='close-icon'>close</span>
               <div className='form-container'>
                    <form className='dash-form' onSubmit={handleSubmit}>
                         <div className="group">
                              <label htmlFor="courseName">Course Name:</label>
                              <input type="text" name='courseName' id='courseName' required onChange={handleChange} />
                         </div>
                         <div className="group">
                              <label htmlFor="courseCode">Course Code: </label>
                              <input type="text" name='courseCode' id='courseCode' required onChange={handleChange} />
                         </div>
                         <div className="group">
                              <label htmlFor="startDate">Start Date:</label>
                              <input type="date" name="startDate" id="startDate" required onChange={handleChange} />
                         </div>
                         <div className="group">
                              <label htmlFor="endDate">End Date:</label>
                              <input type="date" name="endDate" id="endDate" required onChange={handleChange} />
                         </div>
                         <div className="group">
                              <input type="submit" value="Add Course" />
                         </div>
                    </form>
               </div>
               
          </div>
     )
}

export default AddCourseForm