import React, { useState } from 'react'
import ITask from '../interfaces/Dashboard/ITask'
import TaskRow from '../components/userDashboard/TaskRow'

const TasksPage:React.FC = () => {
     const [tasks, setTasks] = useState<ITask[]>()

     const handleAddTask = () => {
          const formElement:HTMLElement | null = document.getElementById("add-task-form");
          if(formElement != null){
                formElement.style.display = 'flex';
          }
      
        }
     return (
          <div className='dashboard-content'>
      <div className="dash-board-row-container">
        <h4>check the progress of your tasks</h4>
      </div>
      <div className="dash-board-row-container">
        <h5>Add Task</h5>
        <button onClick={handleAddTask} className='add-button'>Add</button>
      </div>
      <div className="dash-board-col-container">
        <div className="entity-row">
          <b>Task title</b>
          <b>Description</b>
          <b>Start Date</b>
          <b>End Date</b>
          <b>Course Name</b>
          <b>Actions</b>
        </div>
        {tasks != null ? 
          tasks.map((task) => <TaskRow task={task}  key={task.taskId}/>)
        : null}
      </div>
    </div>
     )
}

export default TasksPage