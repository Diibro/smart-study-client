import React from 'react'
import { Link } from 'react-router-dom'

const NotFound:React.FC = () => {
  return (
    <main className='page'>
      <div className="error-page">
        <div className="container">
          <p>Page not found</p>
          <Link to="/">Return Home</Link>
        </div>
        
      </div>
    </main>
  )
}

export default NotFound