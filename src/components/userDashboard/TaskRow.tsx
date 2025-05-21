import React from 'react'
import ITask from '../../interfaces/Dashboard/ITask'

interface TaskProps {
     task:ITask
}
const TaskRow:React.FC<TaskProps> = ({task}) => {
  return (
    <div className='enity-row'>
     <span>{task.taskTitle}</span>
     <span>{task.taskDescription}</span>
     <span>{task.startDate.getTime()}</span>
     <span>{task.endDate.getDate()}</span>
     <span>{task.course.courseName}</span>
     <button className='delete button'>Delete</button>
    </div>
  )
}

export default TaskRow