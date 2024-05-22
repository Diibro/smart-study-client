import React from 'react'
import IAboutSection from '../../interfaces/IAboutSection';
import { useTranslation } from 'react-i18next'
import Button from '../buttons/Button';
import ShowCaseCard from '../cards/ShowCaseCard';
import IShowCase from '../../interfaces/IShowCase';

const AboutSection:React.FC<IAboutSection> = ({page}) => {
     const {t} = useTranslation("global");
     const content:IAboutSection = t("home_page.about_section",{returnObjects:true});
     return (
     <section className='about-section'>
          <div className="col col-1">
               <h3>
                    {content.title}
               </h3>
               <h2>
                    {content.main_title}
               </h2>
               <p>
                    {content.message}
               </p>
               {
                    page !== "about" ? <Button title={content.read_more?.title || ""} link={content.read_more?.link || "/"} /> : null
               }
          </div>
          <div className="col col-2">
               <img width={200} src={content.image} alt="About section image" />
               <div className="row">
                    {
                         content.showCases?.map((item:IShowCase, index:number) => <ShowCaseCard count={item.count} name={item.name} key={`showcase-${item.name}-${index}`} />)
                    }
               </div>
          </div>
     </section>
     )
}

export default AboutSection;