import React from 'react'

import SSLogo from "../../assets/logo/ss-logo.png";
import { Link } from 'react-router-dom';

const NavBar:React.FC = () => {
     return (
          <header className='dash-nav-bar'>
               <div className="logo-container">
                    <Link to="/user">
                         <img width={100} src={SSLogo} alt='smart study Logo' />
                    </Link>
               </div>
               <div className="nav-container">
                    <Link to="/user/profile" className="link">Profile</Link>
                    <Link to="/user/courses" className="link">Courses</Link>
                    <Link to="/user/tasks" className="link">Tasks</Link>
                    <Link to="/user/resources" className="link">Resources</Link>
                    <Link to="/user/logout" className="link">Logout</Link>
               </div>
          </header>
     )
}

export default NavBar