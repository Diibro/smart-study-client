import React from 'react'

import SendIcon from "../../assets/svg/send.svg"

const FeedbackForm:React.FC = () => {
     return (
          <div className='feedback-form'>
               <textarea rows={2} cols={30} name='feedback-input' id='feedback-input' placeholder='Feedback...' />
               <label htmlFor='feedback-input'><img src={SendIcon} alt='sendicon' /></label>
          </div>
     )
}

export default FeedbackForm