import React from 'react'
import IShowCase from '../../interfaces/IShowCase'

const ShowCaseCard:React.FC<IShowCase> = ({count,name}) => {
  return (
     <span className='show-case-card'>
          <h4>{count}</h4>
          <p className='name'>{name}</p>
     </span>
  )
}

export default ShowCaseCard