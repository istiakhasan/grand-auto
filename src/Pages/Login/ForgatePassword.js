
import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';

const ForgatePassword = () => {
    const [sendPasswordResetEmail, sending] =
    useSendPasswordResetEmail(auth);
    const emailRef=useRef()
    const handleResetPass=async(e)=>{
        e.preventDefault()
        const email=emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Mail Sent");
          } else {
            toast.error("please enter your email address");
          }
    }
   let loadingElement;
    if(sending){
      loadingElement=   <div><Loading /></div>
    }

    return (
        <>
          <Navbar />
          <Helmet>
            <title>Reset Pass</title>
          </Helmet>
          <div className='min-h-screen flex justify-center items-center mx-10'>
            <form onSubmit={handleResetPass}>
              {loadingElement}
              <label className='text-2xl'>Enter Your Email:</label><br />
              <input ref={emailRef} type="text" placeholder="Email..."
                className="input input-bordered input-primary w-full max-w-xs mt-4" />
              <button type='submit' className='btn btn-primary mt-5'>Send Reset Mail</button>
            </form>
          </div>
          <Footer />
        </>
    );
};

export default ForgatePassword;