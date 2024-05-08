import React, { useEffect, useState} from 'react'
import IErrorBoundary from '../interfaces/IErrorBoundary';


const ErrorBoundary:React.FC<IErrorBoundary> = ({children}) => {
     const [hasError, setHasError] = useState(false);
     useEffect(() => {
          const errorHandler = (error:ErrorEvent) => {
               console.error('Error caught by Error Boundary:', error);
               setHasError(true);
          };
     
          window.addEventListener('error', errorHandler);
     
          return () => {
          window.removeEventListener('error', errorHandler);
          }; 
     },[])
     return (
          <>
          {
               !hasError ? children :
               <main className="page">
                    <p>Sorry. Something went wrong. Try again later.</p>
               </main>
          }
          </>
     )
}

export default ErrorBoundary