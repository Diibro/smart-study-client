import React from 'react'
import Header from '../components/Header'
import Activate from '../components/Activate'

const ActivateAccount:React.FC = () => {
     return (
     <div className='auth-page'>
          <div className="col">
               <Header />
               <Activate />
          </div>
          <div className="col signup-col"></div>
     </div>
     )
}

export default ActivateAccount