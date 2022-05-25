import React from 'react';
import ContactForm from './ContactForm';
import OurInformation from './OurInformation';

const Contactus = () => {
    return (
        <div className='my-20 max-w-7xl mx-auto'>
            <h2 className='text-center text-primary text-3xl font-bold my-20'>Contuct Us</h2>
            <OurInformation />
            <ContactForm />
            
        </div>
    );
};

export default Contactus;