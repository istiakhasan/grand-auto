import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit=()=>{

    }
    return (
           <form onSubmit={handleSubmit}>
                <CardElement
                className='bg-white p-5 rounded'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: 'black',
                                },
                            },
                            invalid: {
                                color: 'red',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" >
                    Confirm Payment
                </button>
            </form>
    );
};

export default CheckoutForm;