import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const {paymentId}=useParams()
    const stripePromise = loadStripe('pk_test_51L1SoeFy5LiygH25WkcLlk6ErZDMZv0EIR7aU3EAiwFxDCLbD2nX7c2YNRN013cCFV5mFFZX43o2wWdNhfjPRqZF00RtHF53n6');
    
    const url = `http://localhost:4000/order/${paymentId}`;

    const { data: payment, isLoading } = useQuery(['order', paymentId], () => fetch(url, {
        method: 'GET',
      
    }).then(res => res.json()));

    if (isLoading) {
        return ;
    }
    return (
        <div>
           
            <h2 className='text-primary text-2xl font-semibold'>Please Complete Your Payment</h2>
            
           
 
 
          
            <div class="card w-50 mx-auto max-w-md text-white shadow-xl bg-primary my-12 h-auto p-20">
               
                <h2 class=" text-2xl font-semibold ">{payment.toolsName}</h2>
                <h2 class="font-semibold text-white">{payment.toolsId}</h2>
                 <p className=''>Price: ${payment.totalPrice}</p>
                 <p className='mb-5'>Quantity: ${payment.orderQuantity}</p>
                <p className='text-success'><small><strong>Please enter your card number for payment</strong></small></p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
            </div>
            
       
 
   
      
    
</div>
            
     
    );
};

export default Payment;