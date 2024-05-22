import React from 'react'
import IButton from '../../interfaces/client/IButton'
import { useNavigate } from 'react-router-dom'

const ContactButton:React.FC<IButton> = ({title,link}) => {
     const navigate = useNavigate();
     return (
     <button className='contact-button' onClick={() => navigate(link || "/")}>{title}</button>
     )
}

export default ContactButton