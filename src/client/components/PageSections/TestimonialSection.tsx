import React from 'react'
import { useTranslation } from 'react-i18next'
import ITestimonialsSection from '../../interfaces/ITestimonialsSection';
import TestimonyCard from '../cards/TestimonyCard';

const TestimonialSection:React.FC = () => {
     const {t} = useTranslation("global");
     const content:ITestimonialsSection = t("home_page.testimonial_section", {returnObjects:true});

     return (
     <section className='testimonial-section'>
          <div className="row">
               <h2>{content.title}</h2>
          </div>
          <div className="row row-2">
               {
                    content.testimonies.map((item, index) => <TestimonyCard image={item.image} testimony={item.testimony} school={item.school} key={`testimony-${index}`} />)
               }
          </div>
     </section>
     )
}

export default TestimonialSection