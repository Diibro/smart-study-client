import React from 'react'

import SSLogo from "../../assets/logo/ss-logo.png";
import { Link } from 'react-router-dom';

const Header:React.FC = () => {
     return (
     <div className='auth-header'>
          <Link to={"/"}>
               <img src={SSLogo} alt="Smart-study Logo" width={70} />
          </Link>
          <div className='title'>
               <h2>Smart Study</h2>
               <p>Join other 1000+ Learners</p>
          </div>
     </div>
     )
}

export default Header