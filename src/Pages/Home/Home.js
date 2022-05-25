import React from 'react';

import BusinessSumary from './BusinessSumary';
import Contactus from './Contactus';
import Header from './Header';
import ImageGallary from './ImageGallary';



import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Header /> 
            <Tools />
            <BusinessSumary />
            <Reviews />
            <ImageGallary />
            <Contactus />
          
            
        </div>
    );
};

export default Home;