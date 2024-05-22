import { useTranslation } from "react-i18next"
import IServicesSection from "../../interfaces/client/IServicesSection";
import React from "react";
import ServiceCard from "../cards/ServiceCard";
import IService from "../../interfaces/client/IService";

const ServicesSection:React.FC = () => {
     const {t} = useTranslation("global");
     const content:IServicesSection = t("home_page.services_section", {returnObjects:true})
     return (
     <section className="services-section">
          <div className="row">
               <h2>{content.title}</h2>
          </div>
          <div className="row row-2">
               {
                    content.services.map((item:IService,index:number )=> <ServiceCard title={item.title} icon={item.icon} content={item.content} key={`service-${item.title}-${index}`} />)
               }
          </div>
     </section>
     )
}

export default ServicesSection