import React from 'react';
import BusinessSumary from './BusinessSumary';
import Header from './Header';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Header /> 
            <Tools />
            <BusinessSumary />
            <Reviews />
            
        </div>
    );
};

export default Home;