import React, { useEffect, useState } from 'react'
import ICourse from '../interfaces/Dashboard/ICourse';
import CourseRow from '../components/userDashboard/CourseRow';
import { AxiosResponse } from 'axios';
import IResponce from '../interfaces/Dashboard/IResponce';
import { showNotification } from '../util/UIFunctions';
import services from "../services/UserServices"
import IUser from '../interfaces/Dashboard/IUser';

const CoursesPage:React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>();
  
  const handleAddCourse = () => {
    const formElement:HTMLElement | null = document.getElementById("addCourse-form");
    if(formElement != null){
          formElement.style.display = 'flex';
    }

  }

  const fetchUserInfo = () => {
    const token:string = sessionStorage.getItem("accessToken") || "";
         if(token !== ""){
              services.checkSession(token,(res:AxiosResponse | null, error: Error | null) => {
                   console.log(res);
                   try {
                        const resInfo:IResponce<IUser> = res?.data;
                        if(resInfo.entity != null) {
                            setCourses(resInfo.entity.courses);
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
    <div className='dashboard-content'>
      <div className="dash-board-row-container">
        <h4>Manage Courses</h4>
      </div>
      <div className="dash-board-row-container">
        <h5>Add Course</h5>
        <button onClick={handleAddCourse} className='add-button'>Add</button>
      </div>
      <div className="dash-board-col-container">
        <div className="entity-row">
          <b>Course name</b>
          <b>Course Code</b>
          <b>Start Date</b>
          <b>End Date</b>
          <b>Status</b>
          <b>Actions</b>
        </div>
        {courses != null ? 
          courses.map((course) => <CourseRow course={course}  key={course.courseId}/>)
        : null}
      </div>
    </div>
  )
}

export default CoursesPage