import React, { useContext } from 'react';
import s from './OrderForm.module.css';
import { useForm } from 'react-hook-form';
import { addOrder } from '../requests/orderForm_req'; 
import { Context } from '../context';
import { useSelector } from 'react-redux';

export default function OrderForm() {
    const { register, handleSubmit, reset } = useForm();  // Destructure methods from useForm: register for input fields, handleSubmit for form submission, reset to clear the form
    const { openModalWindow } = useContext(Context);      // Access openModalWindow function from Context to handle modal behavior

    const onSubmit = (data) => {                          // Function to handle form submission
        addOrder(data);                                   // Send form data to the server
        console.log(data);                                // Log the submitted data to the console 
        openModalWindow();                                // Open a modal window after submission
        reset();                                          // Reset the form fields to their initial state
    };

    return (                                              // Render the form with input fields for name, phone, and email
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>  
            <input type='text' placeholder='Name' {...register('name')} />
            <input type='tel' placeholder='Phone' {...register('phone')} />
            <input type='email' placeholder='Email' {...register('email')} />
            <button type='submit'>Order</button>
        </form>
    );
}