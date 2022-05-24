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

    const { data: orderdProduc, isLoading } = useQuery(['order', paymentId], () => fetch(url, {
        method: 'GET',
      
    }).then(res => res.json()));

    if (isLoading) {
        return ;
    }
    return (
        <div>
           
            <h2 className='text-primary text-3xl mt-5 font-semibold text-center'>Please Complete Your Payment</h2>
            
           
 
 
          
            <div className="card w-50 mx-auto max-w-md text-white shadow-xl bg-primary my-12 h-auto p-20">
               
                <h2 className=" text-2xl font-semibold ">{orderdProduc.toolsName}</h2>
                <h2 className="font-semibold text-white">{orderdProduc.toolsId}</h2>
                 <p className=''>Total Price: ${orderdProduc.totalPrice}</p>
                 <p className='mb-5'>Quantity: {orderdProduc.orderQuantity}</p>
                <p className='text-black'><small><strong>Please enter your card number for payment</strong></small></p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orderdProduc={orderdProduc} />
                    </Elements>
            </div>
            
       
 
   
      
    
</div>
            
     
    );
};

export default Payment;