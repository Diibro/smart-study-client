import React from 'react'
import HeroSection from '../components/PageSections/HeroSection'
import AboutSection from '../components/PageSections/AboutSection'
import ServicesSection from '../components/PageSections/ServicesSection'
import TestimonialSection from '../components/PageSections/TestimonialSection'
import ContactSection from '../components/PageSections/ContactSection'
const Home:React.FC = () => {
     return (
     <main className='page'>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TestimonialSection />
          <ContactSection />
     </main>
     )
}

export default Home