import React, { useContext } from 'react';
import s from './OrderForm.module.css';
import { useForm } from 'react-hook-form';
import { addOrder } from '../requests/orderForm_req'; 
import { Context } from '../context';

export default function OrderForm() {
    const { register, handleSubmit, reset } = useForm();
    const { openModalWindow } = useContext(Context);

    const onSubmit = (data) => {
        addOrder(data); 
        console.log(data);
        openModalWindow();
        reset(); 
    };

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Name' {...register('name')} />
            <input type='tel' placeholder='Phone' {...register('phone')} />
            <input type='email' placeholder='Email' {...register('email')} />
            <button type='submit'>Order</button>
        </form>
    );
}