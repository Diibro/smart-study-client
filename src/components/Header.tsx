import React from 'react'
import SSLog from "../assets/logo/ss-logo.png";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ILink from '../interfaces/ILink';

const Header:React.FC = () => {
     const {t} = useTranslation("global");
     const navLinks:ILink[] = t("header.navLinks", {returnObjects: true});
     return (
     <header className='main-header'>
          <div className="logo-container">
               <Link to="/">
                    <img src={SSLog} alt="Smart study logo" />
               </Link>
          </div>
          <div className="nav-bar">
               {navLinks.map((item, index)=> <Link key={`nav-link-${index}`} to={item.link}>{item.title}</Link>)}
          </div>
          <Link to="/login" className='contact-btn'>Login</Link>
     </header>
     )
}

export default Header