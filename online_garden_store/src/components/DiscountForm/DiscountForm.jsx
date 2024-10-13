import React from 'react'
import s from './DiscountForm.module.css'

export default function DiscountForm() {

    const submit = e => {
        e.preventDefault();
    
        const { name, number, email } = e.target;

        const getDiscount = {
            id: Date.now(),
            name: name.value,
            number: number.value,
            email: email.value
        }

        e.target.reset();

    }

  return (
    <div className={s.discount_form}>
    
        <p>5% off on the first order</p>
    
        <div>
            <img src="discount.png" alt="discount" />
            <form className={s.form}>
                <input type='text' placeholder='Name' name='name'/>
                <input type='number' placeholder='Phone number' name='number'/>
                <input type='email' placeholder='Email' name='email'/>
                <button>Get a discount</button>
            </form>
        </div>
    </div>
  )
}
