import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import s from "./index.module.css";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.divFooterH}><h2 className={s.footerH}>Contact</h2></div>
      

      <div className={s.footerContact}>

       <div className={s.cardsMain1}>
         <div className={s.cards1}>
            <p className={s.contactP}>Phone</p>
            <br />
            <a href="tel:+499999999999" className={s.contactA} >+49 999 999 99 99</a>
          </div>

          <div className={s.cards2}>
            <p className={s.contactP}>Socials</p>
            <br />
            <a href="https://www.instagram.com" className={s.contactInstaWhats} ><RiInstagramFill  /></a>
            <a href="https://wa.me/499999999999"  className={s.contactInstaWhats} ><IoLogoWhatsapp  /></a>
          </div>
      </div>

      <div className={s.cardsMain2}>
          <div className={s.cards1}>
            <p className={s.contactP}>Address</p>
           
            <a href="https://g.co/kgs/dikFxiR"  className={s.contactA}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
          </div>

          <div className={s.cards2}>
            <p className={s.contactP}>Working Hours</p>
            <br />
            <p className={s.contactA} >24 hours a day</p>
          </div>
      </div>
      
          <iframe className={s.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991914928346!2d13.372780315673502!3d52.50945537981112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c073da2a7b%3A0x1f68f58a356a1c0d!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1696969696969"
            width="100%"
            height="350"
          ></iframe>
    </div>
  </div>
  )
}
