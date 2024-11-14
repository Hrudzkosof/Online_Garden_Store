import React from 'react'
import mage from '../../components/images/mage.png'
import s from './NotFoundPage.module.css'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';


export default function NotFoundPage() {
  return (
    <div>
    <div className={s.not_found_page}>
      
    
      <div className={s.not_found_content}>
        <p className={s.number}>4</p> {/* First "4" in 404  */}
        <img src={mage} alt="MAGE" />  {/* Image between "4"s for creative 404 look*/}
        <p className={s.number}>4</p> {/* Second "4" in 404 */}
      </div>
      <p className={s.error_text}>Page Not Found</p> {/* Main error message */}
      {/* Subtext providing further details / Подтекст с дополнительной информацией */}
      <p className={s.subtext}>We’re sorry, the page you requested could not be found.<br /> 
      Please go back to the homepage.</p>
      <Link to='/' className={s.button}> Go Home</Link> {/* Button link to return to the homepage */}
      
     

      </div>

      <Footer/>
    </div>
  )
}
