import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import BusinessSumary from './BusinessSumary';
import Contactus from './Contactus';
import Header from './Header';
import ImageGallary from './ImageGallary';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <>
            <div className='bg-black'>
                <Navbar />
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Header />
                <Tools />
                <BusinessSumary />
                <Reviews />
                <ImageGallary />
                <Contactus />
            </div>
            <Footer />
        </>
    );
};

export default Home;