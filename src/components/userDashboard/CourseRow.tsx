import React from 'react'
import ICourse from '../../interfaces/Dashboard/ICourse'

interface CourseProps {
     course: ICourse
}

const CourseRow:React.FC<CourseProps> = ({course}) => {
     return (
     <div className='entity-row'>
          <span>{course.courseName}</span>
          <span>{course.courseCode}</span>
          <span>{course.startDate.getDate()}</span>
          <span>{course.endDate.getDate()}</span>
          <span>{course.active}</span>
          <button className='delete-button'>Delete</button>
     </div>
     )
}

export default CourseRow