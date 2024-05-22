import React from 'react'
import { Link } from 'react-router-dom'

import PhoneIcon from '../../assets/svg/Phone.svg';
import EmailIcon from "../../assets/svg/Email.svg";
import LocationIcon from "../../assets/svg/Location.svg"

const ContactForm:React.FC = () => {
     return (
     <div className='contact-form'>
          <div className='col'>
               <h2>Let's Get in Touch</h2>
               <div className="links">
                    <Link to={"tel:+250780795232"}><img src={PhoneIcon} alt='phone icon' />+250 780 795 232</Link>
                    <Link to={'maito:smartstudy.plat@gmail.com'}><img src={EmailIcon} alt="email icon"  />smartstudy.plat@gmail.com</Link>
                    <Link to={'/'} ><img src={LocationIcon} alt='location icon' /> Kigali, Rwanda</Link>
               </div>
               <form className="form">
                    <div className="group">
                         <label htmlFor="contact-email">Email:</label>
                         <input type="email" name='contact-email' required id='contact-email' />
                    </div>
                    <div className="group">
                         <label htmlFor='contact-message'>Message:</label>
                         <textarea name='contact-message' id='contact-message' required rows={4} cols={15} />
                    </div>
                    <div className="group">
                         <button type='submit'>Contact Us</button>
                    </div>
               </form>
          </div>
          <div className='col'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31899.93086450257!2d30.04350059926379!3d-1.9569370324978195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca42936c4fc0b%3A0x8c6a59bcc69b83fb!2sNyarugenge%2C%20Kigali!5e0!3m2!1sen!2srw!4v1715634495811!5m2!1sen!2srw" width="600" height="450" style={{border: 0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
     </div>
     )
}

export default ContactForm