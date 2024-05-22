import React from 'react'
import { useTranslation } from 'react-i18next'
import ContactButton from '../buttons/ContactButton';
import IContactSection from '../../interfaces/client/IContactSection';

const ContactSection:React.FC = () => {
     const {t} = useTranslation("global");
     const content:IContactSection = t("home_page.contact_section", {returnObjects:true})

     return (
     <section className='contact-section'>
          <div className='content'>
               <img width={400} src={content.backImage} alt="contact back image" />
               <div className="message">
                    <h4>{content.title}</h4>
                    <ContactButton title={content.contactButton.title} link={content.contactButton.link} />
               </div>
          </div>
     </section>
     )
}

export default ContactSection