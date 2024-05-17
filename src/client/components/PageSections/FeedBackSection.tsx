import React from 'react'
import { useTranslation } from 'react-i18next'
import IFeedBackSection from '../../interfaces/IFeedBackSection';
import FeedbackRow from '../cards/FeedbackRow';
import FeedbackForm from '../forms/FeedbackForm';
import ITestimony from '../../interfaces/ITestimony';

const FeedBackSection:React.FC = () => {
     const {t} = useTranslation("global");
     const content:IFeedBackSection = t("feedback_page.testimonies-section", {returnObjects:true});

     return (
     <section className='feedback-section'>
          <div className="title">
               <img src={content.titleIcon} alt="feedback icon" />
               <h3>{content.title}<b>{content.count}</b></h3>
          </div>
          <div className="testimonies">
               {
                    content.testimonies?.map((item:ITestimony, index:number) => 
                    <FeedbackRow 
                         key={`feed-back-page-feedback-${index}` } 
                         image={item.image}
                         title={item.title}
                         testimony={item.testimony}
                         name={item.name}
                         postedOn={item.postedOn}
                    />)
               }
          </div>
          <FeedbackForm />
     </section>
     )
}

export default FeedBackSection