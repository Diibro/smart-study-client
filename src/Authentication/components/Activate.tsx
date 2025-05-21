import React, { useState } from 'react'
import { showNotification } from '../../util/UIFunctions';
import Loader from "../../assets/loading.gif";
import server from "../../services/UserServices";
import IResponce from '../../interfaces/Dashboard/IResponce';
import IUser from '../../interfaces/Dashboard/IUser';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
const Activate:React.FC = () => {
     const [otp, setOtp] = useState<number>(0); 
     const navigate = useNavigate();
     const [loading, setLoading] = useState<boolean>(false);
     const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          try {
               setLoading(true);
               const activateInfo:IResponce<IUser> = {entity: null, info:null,error:null, code: otp}; 
               console.log(activateInfo);
               server.completeActivation(activateInfo, (res:AxiosResponse | null, error: Error | null) => {
                    if(res != null ){
                         const resData:IResponce<IUser> = res.data;
                         if(resData.entity != null){
                              showNotification(resData.info || "Success", "pass-notification");
                              navigate('/login');
                         }else{
                              showNotification(resData.info || "fail", "fail-notification");
                         }
                    }else{
                         showNotification("Server error", "fail-notification");
                         console.log(error);
                    }
                    setLoading(false);
               })
          } catch (error) {
               showNotification("application error", "fail-notification");
               setLoading(false);
          }
     }
     return (
     <div className='auth-container' >
          <form className='auth-form' onSubmit={handleSubmit}>
               <div className="group">
               <label htmlFor="verificationCode">Verification Code</label>
               <input
                    type="text"
                    id="verificationCode"
                    name="verificationCode"
                    placeholder="Enter verification code"
                    required
                    maxLength={6}
                    pattern="\d{6}"
                    className="verification-input"
                    aria-describedby="verificationHelp"
                    onChange={(e) => setOtp(Number.parseInt(e.target.value) )}
               />
               <small id="verificationHelp" className="form-text text-muted">
                    Please enter the 6-digit code sent to your email.
               </small>
               </div>
               <div className="group">
                    <input type="submit" value={"Verify"} />
               </div>
               <div className="group">
                    {loading ? <img width={100} height={100} src={Loader} alt='loading gif' /> : null }
               </div>
          </form>
     </div>
     )
}

export default Activate