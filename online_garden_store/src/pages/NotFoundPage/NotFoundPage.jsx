import React from 'react'
import mage from '../../components/images/mage.png'
import s from './NotFoundPage.module.css'
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className={s.not_found_page}>
      <div className={s.not_found_content}>
        <p className={s.number}>4</p>
        <img src={mage} alt="MAGE" />
        <p className={s.number}>4</p>
      </div>
      <p className={s.error_text}>Page Not Found</p>
      <p className={s.subtext}>We’re sorry, the page you requested could not be found.<br />
      Please go back to the homepage.</p>
      <Link to='/' className={s.button}> Go Home</Link>
    </div>
  )
}
