import React from 'react'
import IService from '../../interfaces/IService'

const ServiceCard:React.FC<IService> = ({icon,title, content}) => {
     return (
          <div className='service-card'>
               <div className="service-title">
                    <img width={30} src={icon} alt={title} />
                    <h4>{title}</h4>
               </div>
               <div className="service-content">
                    <p>{content}</p>
               </div>
          </div>
     )
}

export default ServiceCard