import React from 'react';
import { Link } from "react-router-dom";
import image404 from '../assets/error.404-01.png'

function NotFound() {

   return (
      <div className='container-notFound'>

         <img src={image404} className='imageNotFound'></img>
         <div className='btn-notFound'>
           
            <Link to='/home' key="5" id="home" className={`btn-white label-btn`} > Regresar </Link>
         </div>

      </div>
   )
}

export default NotFound