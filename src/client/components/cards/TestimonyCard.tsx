import React from 'react'
import ITestimony from '../../interfaces/ITestimony'

const TestimonyCard:React.FC<ITestimony> = ({image, testimony, school}) => {
     return (
     <div className='testimony-card'>
          <img width={30} src={image} alt={"testimony image"} />
          <p>{testimony}</p>
          <b>
               Student At: <br />
               {school}
          </b>
     </div>
     )
}

export default TestimonyCard