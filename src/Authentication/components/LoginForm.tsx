import React from 'react'
import { Link } from 'react-router-dom'
import Divider from './Divider'
import GoogleLogin from './GoogleLogin'

const LoginForm:React.FC = () => {
     return (
          <div className='auth-container'>
          <GoogleLogin/>
          <Divider />
          <form className='auth-form'>
               <div className="group">
                    <label htmlFor="login-email">Email:</label>
                    <input type="email" name="login-email" id="login-email" />
               </div>
               <div className="group">
                    <label htmlFor="login-password">Password</label>
                    <input type="password" name="login-password" id="login-password" />
               </div>
               <div className="group">
                    <input type="submit" value="Login" />
               </div>
          </form>
          <p className='account-message'>Don't have an Account.<Link to={"/sign-up"}>Sign up</Link></p>
          </div>
     
     )
}

export default LoginForm