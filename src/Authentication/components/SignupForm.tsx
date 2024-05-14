import React from 'react'
import { Link } from 'react-router-dom'
import Divider from './Divider'
import GoogleLogin from './GoogleLogin'

const SignupForm:React.FC = () => {
     return (
     <div className='auth-container'>
          <GoogleLogin />
          <Divider />
          <form className='auth-form'>
               <div className="group">
                    <label htmlFor="auth-name">Full Name:</label>
                    <input type="text" name="auth-name" id="auth-name" />
               </div>
               <div className="group">
                    <label htmlFor="auth-email">Email:</label>
                    <input type="email" name="auth-email" id="auth-email" />
               </div>
               <div className="group">
                    <label htmlFor="auth-password">Password</label>
                    <input type="password" name="auth-password" id="auth-password" />
               </div>
               <div className="group">
                    <input type="submit" value="Sign me Up" />
               </div>
          </form>
          <p className='account-message'>Already have an Account.<Link to={"/login"}>Login</Link></p>
     </div>
     )
}

export default SignupForm