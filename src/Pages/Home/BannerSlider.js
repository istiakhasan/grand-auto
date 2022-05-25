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
        <Slider   {...settings}>
            <div>
                <div className='h-[80vh] flex justify-center pl-32  flex-col'>
                <div>
                <h1 className='text-8xl text-white'>Life Is Good </h1>  
                 <p className='text-orange-500 text-5xl'>Enjoy The Ride</p>
                 <p className='text-white w-6/12 my-6'>Are you looking for bike parts for your business ?You are In right place .Find your Special parts for your bike here.With thousands of products , we have just the right one for you.</p>
                 <Link to="/login" className='btn btn-primary'>Click To Join</Link>
                </div>
                </div>
            </div>
            <div>
                <div className='h-[80vh] flex justify-center pl-32  flex-col'>
                <div>
                <h1 className='text-8xl text-white'>Born To Ride  </h1>  
                 <p className='text-orange-500 text-5xl'>Ride To Love</p>
                 <p className='text-white w-6/12 my-6'>Specificatioins and pricing are subject to change. Dealer sets the actual destination charge. your price may vary. </p>
                 <Link to="/login" className='btn btn-primary'>Click To Join</Link>
                </div>
                </div>
            </div> 
            {/* <div>
                <div className='h-[80vh] flex justify-center pl-32  flex-col'>
                <div>
                <h1 className='text-8xl text-white'>Life Is Good </h1>  
                 <p className='text-orange-500 text-5xl'>Enjoy The Ride</p>
                 <p className='text-white w-6/12 my-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae iusto, adipisci enim veritatis tempore neque sequi autem vel fugit consequuntur.</p>
                 <button className='btn btn-primary'>Click To Join</button>
                </div>
                </div>
            </div> */}
       
        </Slider>
      </div>
    );
};

export default BannerSlider;