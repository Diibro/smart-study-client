import React, { useEffect, useState} from 'react'
import IErrorBoundary from '../interfaces/client/IErrorBoundary';


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
                    <div className="error-page">
                         <div className="container">
                              <p>Sorry. Something went wrong. Try again later.</p>
                         </div>
                    </div>
                    
               </main>
          }
          </>
     )
}

export default ErrorBoundary