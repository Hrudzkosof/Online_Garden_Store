import React from 'react'; // Import React library
import { IoLogoWhatsapp } from "react-icons/io"; // Import WhatsApp icon
import { RiInstagramFill } from "react-icons/ri"; // Import Instagram icon
import s from "./index.module.css"; // Import CSS styles

export default function Footer() {
  return (
    <div className={s.footer}> {/* Main footer container */}
      <div className={s.divFooterH}><h2 className={s.footerH}>Contact</h2></div> {/* Contact header */}
      
      <div className={s.footerContact}> {/* Footer contact section */}

       <div className={s.cardsMain1}> {/* First contact card set */}
         <div className={s.cards1}> {/* Phone card */}
            <p className={s.contactP}>Phone</p> {/* Phone label */}
            <br />
            <a href="tel:+499999999999" className={s.contactA} >+49 999 999 99 99</a> {/* Phone number link */}
          </div>

          <div className={s.cards2}> {/* Social media card */}
            <p className={s.contactP}>Socials</p> {/* Social label */}
            <br />
            <a href="https://www.instagram.com" className={s.contactInstaWhats} ><RiInstagramFill  /></a> {/* Instagram link */}
            <a href="https://wa.me/499999999999"  className={s.contactInstaWhats} ><IoLogoWhatsapp  /></a> {/* WhatsApp link */}
          </div>
      </div>

      <div className={s.cardsMain2}> {/* Second contact card set */}
          <div className={s.cards1}> {/* Address card */}
            <p className={s.contactP}>Address</p> {/* Address label */}
           
            <a href="https://g.co/kgs/dikFxiR"  className={s.contactA}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a> {/* Address link */}
          </div>

          <div className={s.cards2}> {/* Working hours card */}
            <p className={s.contactP}>Working Hours</p> {/* Working hours label */}
            <br />
            <p className={s.contactA} >24 hours a day</p> {/* Working hours text */}
          </div>
      </div>
          {/* Map iframe container */}
          <iframe className={s.map} 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991914928346!2d13.372780315673502!3d52.50945537981112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c073da2a7b%3A0x1f68f58a356a1c0d!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1696969696969" 
            width="100%" 
            height="350" 
          ></iframe> {/* Embedded Google Maps */}
    </div>
  </div>
  )
}
