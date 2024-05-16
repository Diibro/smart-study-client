import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

const Login:React.FC = () => {
     return (
     <main className='auth-page'>
          <div className="col">
               <Header />
               <LoginForm />
          </div>
          <div className="col login-col"></div>
     </main>
     )
}

export default Login