import React from 'react'
import s from './DiscountForm.module.css'
import { addDiscount } from '../../requests/discountForm_req';
import { useForm } from 'react-hook-form';

export default function DiscountForm() {

    const { register, handleSubmit, reset, formState: { errors } }  = useForm(); 

    const submit = data => {
        addDiscount(data);
        console.log(data);
        reset();
    }

    // Validation //
    const nameRegister = register('name', {
        required: '*The field "Name" is required'
    });
    const phoneRegister = register('phone', {
        required: '*The field "Name" is required'
    });
    const emailRegister = register('email', {
        required: '*The field "Email" is required'
    });

  return (
    <div className={s.discount_form}>
    
        <p>5% off on the first order</p>
    
        <div className={s.form_media}>
            <img src="discount.png" alt="discount" />
            <form className={s.form} onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder='Name' {...nameRegister}/>
                <input type='number' placeholder='Phone number' {...phoneRegister}/>
                <input type='email' placeholder='Email' {...emailRegister}/>
                <button>Get a discount</button>
            </form>
        </div>
    </div>
  )
}
