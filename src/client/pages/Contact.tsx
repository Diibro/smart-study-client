import React from 'react'
import ContactForm from '../../components/forms/ContactForm'

const Contact:React.FC = () => {
     return (
     <main className='page'>
          <div className="col">
               <ContactForm />
          </div>
          <div className="col"></div>
     </main>
     )
}

export default Contact