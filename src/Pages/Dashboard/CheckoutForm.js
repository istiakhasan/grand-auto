
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({orderdProduc}) => {
    const {totalPrice,eamil,customerName,_id}=orderdProduc;
   
    // orderdProduc.totalPrice
    const stripe = useStripe();
    const elements = useElements();
    const [success,setSuccess]=useState('')
    const [transectionId,setTransectionId]=useState('')
    const [paymentError,setPaymentError]=useState('')
    const [clientSecret,setClientScret]=useState('')


    useEffect(() => {
        fetch('http://localhost:4000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
               
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientScret(data.clientSecret);
                }
            });

    }, [totalPrice])
    const handleSubmit=async(e)=>{
        e.preventDefault()
  
        if(!stripe || !elements){
           return;
        }
        const card=elements.getElement(CardElement)
        if(card===null){
            return;
        }

        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            setPaymentError(error.message)
        }else{
            setPaymentError('')
        }
        //confirm card payment 
        const {paymentIntent, error:paymentSuccessError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: customerName,
                  email:eamil
                  
                },
              },
            },
          );
          if(paymentSuccessError){
              setPaymentError(paymentSuccessError?.message)
              setSuccess('')
          }else{
              setPaymentError('')
              setTransectionId(paymentIntent.id)
              setSuccess("Your payment completed successfully")


             fetch(`http://localhost:4000/order/${_id}`,{
                 method:"PATCH",
                 headers:{
                     'content-type':'application/json'
                 },
                 body:JSON.stringify({transectionId})
             })
              .then(res=>res.json())
              .then(data=>{
                  console.log(data,"update successfully")
              }) 
          }

    }
    return (
         <>
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
               
               { paymentError && <p className='text-red-400 font-bold text-sm'>{paymentError}</p>}
               {success && <>
                <p className='text-green-400 font-bold text-sm'>{success}</p>
                <p className='text-orange-500 font-bold text-sm'>Transection:{transectionId}</p>
               
               </>}
                <button className='btn btn-success btn-sm mt-4 text-black font-bold text-xs'  type="submit" disabled={!stripe || !clientSecret} >
                    Confirm Payment
                </button>
            </form>
           
                    </>
    );
};

export default CheckoutForm;