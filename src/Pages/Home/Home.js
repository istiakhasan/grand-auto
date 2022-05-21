import React from 'react';
import BusinessSumary from './BusinessSumary';
import Header from './Header';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Header /> 
            <Tools />
            <BusinessSumary />
            
        </div>
    );
};

export default Home;