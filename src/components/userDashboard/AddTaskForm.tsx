import React, { useState } from 'react'
import ITask from '../../interfaces/Dashboard/ITask';
import { EStatus } from '../../enums/EStatus';
import ICourse from '../../interfaces/Dashboard/ICourse';
import { AxiosResponse } from 'axios';
import services from "../../services/TaskServices";
import IResponce from '../../interfaces/Dashboard/IResponce';
import { showNotification } from '../../util/UIFunctions';

const AddTaskForm:React.FC = () => {
     const [courses, setCourses] = useState<ICourse[]>([]);
     const [task, setTask ] = useState<ITask>({
          taskId:"",
          taskTitle: "",
          taskDescription:"",
          startDate:new Date(),
          endDate: new Date(),
          status: EStatus.PROGRESS,
          active: true,
          course: courses[0]
     })

     const closeForm = () => {
          const formElement:HTMLElement | null = document.getElementById("add-task-form");
          if(formElement != null){
               formElement.style.display = 'none';
          }

     }

     const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
          const {name, value}  = e.target;
          if(name == "course") {
               const seletedCourse:ICourse | undefined= courses.find(course => course.courseId === value);
               setTask(prev => ({
                    ...prev,
                    [name]: seletedCourse
               }))
          }else{
               setTask(prev => ({
                    ...prev,
                    [name]: value
               }));
          }
          
     }

     const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log(task);
          
               services.add(task, (res:AxiosResponse | null ,error:Error | null) => {
                    try {
                    const taskRes:IResponce<ITask> = res?.data;
                         if(taskRes != null ){
                              if(taskRes.entity != null){
                                   showNotification(taskRes.info || "success", "pass-notification");
                              }else{
                                   showNotification(taskRes.info || "Failure", "fail-notification");
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

     return (
     <div className='dash-forms' id="add-task-form">
          <span onClick={closeForm} className='close-icon'>close</span>
               <div className='form-container'>
                    <form className='dash-form' onSubmit={handleSubmit}>
                         <div className="group">
                              <label htmlFor="taskTitle">Task Title:</label>
                              <input type="text" name='taskTitle' id='taskTitle' required onChange={handleChange} />
                         </div>
                         <div className="group">
                              <label htmlFor="taskDescription">Description: </label>
                              <input type="text" name='taskDescription' id='taskDescription' required onChange={handleChange} />
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
                              <label htmlFor="course">Course:</label>
                              <select name="course" id="course">
                                   <option value="">Select Course...</option>
                                   {courses != null ? 
                                        courses.map(course => <option value={course.courseId} key={course.courseId}>{course.courseName}</option>)
                                   : null}
                              </select>
                         </div>

                         <div className="group">
                              <input type="submit" value="Add Course" />
                         </div>
                    </form>
               </div>
     </div>
     )
}

export default AddTaskForm