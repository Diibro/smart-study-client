import React from 'react'
import ITestimony from '../../../interfaces/ITestimony'

const FeedbackRow:React.FC<ITestimony> = ({image,name,postedOn,testimony,title}) => {
     return (
     <div className='feedback-row'>
          <div className="row-heading">
               <div className="title-container">
                    <img width={40} src={image} alt={name} />
                    <h5>{name}</h5>
               </div>
               <p>{postedOn}</p>
          </div>
          <div className="row-body">
               <h5>{title}</h5>
               <p>{testimony}</p>
          </div>
     </div>
     )
}

export default FeedbackRow