import React from 'react';
import s from './OrderForm.module.css';
import { addOrder } from '../requests/orderForm_req'; 

export default function OrderForm() {
    const submit = e => {
        e.preventDefault();
        const { name, address, number, email } = e.target;
        const newOrder = {
            name: name.value,
            address: address.value,
            number: number.value,
            email: email.value
        };
        addOrder(newOrder);
        console.log(newOrder);
        e.target.reset();
    };

    return (
        <div className={s.order_form}>
            
            <form className={s.form} onSubmit={submit}>
                <input type='text' placeholder='Name' name='name' required />
                <input type='number' placeholder='Phone number' name='number' required />
                <input type='email' placeholder='Email' name='email' required />
                <button type='submit'>Order</button>
            </form>
        </div>
    );
}