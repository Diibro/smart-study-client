import React from 'react'
import IButton from '../../interfaces/IButton'
import { useNavigate } from 'react-router-dom'

const Button:React.FC<IButton> = ({title, link}) => {
     const navigate = useNavigate();
     const handleClick = () => {
          return navigate(link);
     }
     return (
     <div className='main-button' onClick={handleClick}>{title}</div>
     )
}

export default Button