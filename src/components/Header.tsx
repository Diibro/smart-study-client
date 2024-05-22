import React from 'react'
import SSLog from "../assets/logo/ss-logo.png";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ILink from '../interfaces/ILink';
import MenuIcon from "../assets/svg/Menu.svg";
import CrossIcon from "../assets/svg/Close.svg";

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
               {navLinks.map((item:ILink, index:number)=> <Link key={`nav-link-${index}`} to={item.link}>{item.title}</Link>)}
          </div>
          <img className='menu-icon drop-down' width={30} src={MenuIcon} alt="" />
          <img className='menu-icon close-drop-down' width={30} src={CrossIcon} alt='' />
          <Link to="/login" className='contact-btn'>Login</Link>
     </header>
     )
}

export default Header