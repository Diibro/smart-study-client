import React from 'react'
import GoogleIcon from "../../assets/svg/Google.svg";

const GoogleLogin:React.FC = () => {
     return (
     <div className='google-auth-button'>
          <img src={GoogleIcon} alt="google icon" />
          <p>Continue with Google</p>
     </div>
     )
}

export default GoogleLogin