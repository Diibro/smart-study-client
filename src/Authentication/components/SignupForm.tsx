import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import GoogleLogin from './GoogleLogin'
import IUser from '../../interfaces/Dashboard/IUser'
import { ERole } from '../../enums/ERole'
import UserServices from '../../services/UserServices'
import { AxiosResponse } from 'axios'
import IResponce from '../../interfaces/Dashboard/IResponce'
import { showNotification } from '../../util/UIFunctions'
import Loader from "../../assets/loading.gif";

const SignupForm:React.FC = () => {

     const [loading, setLoading] = useState<boolean>(false);
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
          try {
               setLoading(true);
               UserServices.signup(user, (res:AxiosResponse | null, error: Error | null) => {
                    if(res != null ){
                         const resData:IResponce<IUser> = res.data;
                         if(resData.entity != null){
                              showNotification(resData.info || "success", "pass-notification");
                              navigate('/login');
                         }else{
                              showNotification(resData.info || "fail", "fail-notification");
                         }
                    }else{
                         showNotification("Server error", "fail-notification");
                         console.log(error);
                    }
                    setLoading(false);
               });
          } catch (error) {
               console.log(error)
               showNotification("system error", "fail-notification");
               setLoading(false);
          }
          
     }
     return (
     <div className='auth-container'>
          <GoogleLogin />
          <Divider />
          <form className='auth-form' onSubmit={handleSubmit}>
               <div className="group">
                    <label htmlFor="auth-name">Full Name:</label>
                    <input type="text" name="name" id="auth-name" onChange={handleChange} />
               </div>
               <div className="group">
                    <label htmlFor="auth-email">Email:</label>
                    <input type="email" name="email" id="auth-email" onChange={handleChange} />
               </div>
               <div className="group">
                    <label htmlFor="auth-password">Password</label>
                    <input type="password" name="password" id="auth-password" onChange={handleChange} />
               </div>
               <div className="group">
                    <input type="submit" value="Sign me Up" />
                    
               </div>
               <div className="group">
                    {loading ? <img width={100} height={100} src={Loader} alt='loading gif' /> : null }
               </div>
          </form>
          <p className='account-message'>Already have an Account.<Link to={"/login"}>Login</Link></p>
     </div>
     )
}

export default SignupForm