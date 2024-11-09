import React, { useContext } from 'react';
import s from './OrderForm.module.css';
import { addOrder } from '../requests/orderForm_req'; 
import { Context } from '../context';

export default function OrderForm() {

    const { openModalWindow } = useContext(Context);



    const submit = e => {
        e.preventDefault();
        const { name, number, email } = e.target;
        const newOrder = {
            name: name.value,
            number: number.value,
            email: email.value
        };
        addOrder(newOrder);
        console.log(newOrder);
        
        openModalWindow()

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