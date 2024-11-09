import React from 'react'
import s from './DiscountForm.module.css'
import { addDiscount } from '../../requests/discountForm_req';

export default function DiscountForm() {
    const submit = e => {
        e.preventDefault();
    
        const { name, number, email } = e.target;

        const getDiscount = {
            name: name.value,
            number: number.value,
            email: email.value
        }

        addDiscount(getDiscount)
        console.log(getDiscount)

        e.target.reset();
    }

  return (
    <div className={s.discount_form}>
    
        <p>5% off on the first order</p>
    
        <div className={s.form_media}>
            <img src="discount.png" alt="discount" />
            <form className={s.form} onSubmit={submit}>
                <input type='text' placeholder='Name' name='name'/>
                <input type='number' placeholder='Phone number' name='number'/>
                <input type='email' placeholder='Email' name='email'/>
                <button>Get a discount</button>
            </form>
        </div>
    </div>
  )
}
