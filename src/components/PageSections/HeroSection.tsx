import React from 'react'
import { useTranslation } from 'react-i18next'
import IHeroSection from '../../interfaces/client/IHeroSection';
import Button from '../buttons/Button';

const HeroSection:React.FC = () => {
     const {t} = useTranslation("global");
     const content:IHeroSection = t("home_page.hero_section", {returnObjects:true});
     return (
          <div className='hero-section'>
               <div className="col col-1">
                    <h1>{content.title}</h1>
                    <p>{content.message}</p>
                    <Button title={content.read_more} link="/about" />
               </div>
               <div className="col col-2">
                    <div className="back-images">
                         {
                              content.back_images.map((item:string, index:number) => <img width={50} src={item} alt={"content image"} key={`front-image-${index}`} />)
                         }
                    </div>
                    <div className="front-images">
                         {
                              content.front_images.map((item:string, index:number) => <img width={100} src={item} alt={"content image"} key={`back-image-${index}`} />)
                         }
                    </div>
                    
               </div>
          </div>
     )
}

export default HeroSection