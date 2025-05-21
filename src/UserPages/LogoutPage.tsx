import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutPage:React.FC = () => {
     const navigate = useNavigate();
     useEffect(() => {
          sessionStorage.removeItem("accessToken");
          navigate("/login");
     },[])
     return (
     <div className='dashboard-content'>Loggin..... out</div>
     )
}

export default LogoutPage