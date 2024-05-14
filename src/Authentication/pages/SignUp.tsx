import React from 'react'
import SignupForm from '../components/SignupForm'
import Header from '../components/Header'

const SignUp:React.FC = () => {
     return (
          <main className='auth-page'>
          <div className="col">
               <Header />
               <SignupForm />
          </div>
          <div className="col signup-col"></div>
     </main>
     )
}

export default SignUp