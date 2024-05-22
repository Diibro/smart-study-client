import React from 'react'
import { useTranslation } from 'react-i18next'
import IAboutHeroSection from '../../interfaces/IAboutHeroSection';

const AboutHeroSection:React.FC = () => {
     const {t} = useTranslation("global");
     const content:IAboutHeroSection = t("about_page.about", {returnObjects:true});
     return (
     <section className='about-hero-section'>
          <h2>{content.title}</h2>
          <p>{content.content}</p>
     </section>
     )
}

export default AboutHeroSection