import React from 'react'
import { Link } from 'react-router-dom'

const NotFound:React.FC = () => {
  return (
    <main className='page'>
      <p>Page Request not found</p>
      <Link to="/">Return Home</Link>
    </main>
  )
}

export default NotFound