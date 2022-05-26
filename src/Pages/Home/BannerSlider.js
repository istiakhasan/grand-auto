import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const BannerSlider = () => {
    const settings = {
        slidesToShow: 1,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000
  
     
      };
    return (
        <div>
            <Slider {...settings}>
                <div className='ml-5 my-5'>
                    <div className='lg:h-[80vh]  flex justify-center lg:pl-32  flex-col'>
                        <div>
                            <h1 className='lg:text-8xl text-5xl text-white'>Life Is Good </h1>
                            <p className='text-orange-500 text-3xl lg:text-5xl'>Enjoy The Ride</p>
                            <p className='text-white text-md w-8/12 lg:w-4/12 my-6'>Are you looking for bike parts for
                                your business ?You are In right place .Find your Special parts for your bike here.With
                                thousands of products , we have just the right one for you.</p>
                            <Link to="/login" className='btn btn-primary'>Click To Join</Link>
                        </div>
                    </div>
                </div>
                <div className='ml-5 my-5'>
                    <div className='lg:h-[80vh] flex justify-center lg:pl-32  flex-col'>
                        <div>
                            <h1 className='lg:text-8xl text-5xl text-white'>Born To Ride </h1>
                            <p className='text-orange-500 lg:text-5xl text-3xl'>Ride To Love</p>
                            <p className='text-white text-md w-8/12 lg:w-4/12 my-6'>Specificatioins and pricing are
                                subject to change. Dealer sets the actual destination charge. your price may vary. </p>
                            <Link to="/login" className='btn btn-primary'>Click To Join</Link>
                        </div>
                    </div>
                </div>


            </Slider>
        </div>
    );
};

export default BannerSlider;