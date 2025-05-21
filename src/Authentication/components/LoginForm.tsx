import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import GoogleLogin from './GoogleLogin'
import IUser from '../../interfaces/Dashboard/IUser'
import { ERole } from '../../enums/ERole'
import UserServices from '../../services/UserServices'
import { AxiosResponse } from 'axios'
import IResponce from '../../interfaces/Dashboard/IResponce'
import { showNotification } from '../../util/UIFunctions'

const LoginForm:React.FC = () => {
     const [user, setUser] = useState<IUser>({
          email: '',
          name: '',
          phone: '',
          password: '',
          active: false,
          role: ERole.USER,
          registrationDate: new Date(),
          courses: []
     });

     const navigate = useNavigate();

     const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
          const {name, value}  = e.target;
          setUser(prevUser => ({
               ...prevUser,
               [name]: value
          }));
     }

     const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          UserServices.login(user, (res:AxiosResponse | null, error: Error | null) => {
               if(res != null ){
                    
                    const info:IResponce<string>= res.data;
                    if(info.entity != null) {
                         sessionStorage.setItem("accessToken", info.entity);
                         showNotification(info.info || "Login successful","pass-notification");
                         navigate("/user");
                    }else{
                         console.log(info);
                         showNotification(info.info || "login fail","fail-notification");
                    }
                    

               }else{
                    showNotification("application error", "fail-notification")
                    console.log(error);
               }
          })
     }
     return (
          <div className='auth-container'>
          <GoogleLogin/>
          <Divider />
          <form className='auth-form' onSubmit={handleSubmit}>
               <div className="group">
                    <label htmlFor="login-email">Email:</label>
                    <input type="email" name="email" id="login-email" required onChange={handleChange} autoComplete='email' />
               </div>
               <div className="group">
                    <label htmlFor="login-password">Password</label>
                    <input type="password" name="password" id="login-password" onChange={handleChange} />
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