import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slideimg1 from '../../assest/photo-gallary/slide-img-1.jpg'
import slideimg2 from '../../assest/photo-gallary/slide-img-2.jpg'
import slideimg3 from '../../assest/photo-gallary/slide-img-3.jpg'
import slideimg4 from '../../assest/photo-gallary/slide-img-4.jpg'
import slideimg5 from '../../assest/photo-gallary/slide-img-5.jpg'
import slideimg6 from '../../assest/photo-gallary/slide-img-6.webp'

const ImageGallary = () => {
    const settings = {
        slidesToShow: 3,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
  
     
      };
    return (
        <div className='max-w-7xl mx-auto  my-20 '>
            <h2 className='text-3xl text-primary text-center font-bold my-20'>Photo Gallary</h2>
        <Slider   {...settings}>
            <div className=' h-100 '>
                <img className='w-[90%] mx-auto border rounded-lg h-[20vh] lg:h-[50vh] object-cover'  src={slideimg1} alt="" />
            </div>
            <div className=''>
                <img className='w-[90%] mx-auto border rounded-lg h-[20vh] lg:h-[50vh] object-cover' src={slideimg2} alt="" />
            </div>
            <div className=''>
                <img className='w-[90%] mx-auto border rounded-lg h-[20vh] lg:h-[50vh] object-cover' src={slideimg3} alt="" />
            </div>
            <div className='h-max '>
                <img className='w-[90%] mx-auto border rounded-lg h-[20vh] lg:h-[50vh] object-cover' src={slideimg4} alt="" />
            </div>
            <div className=' h-auto '>
                <img className='w-[90%] mx-auto border rounded-lg h-[20vh] lg:h-[50vh] object-cover' src={slideimg5} alt="" />
            </div>
            <div className=''>
                <img className='w-[90%] mx-auto border rounded-lg h-[20vh] lg:h-[50vh] object-cover' src={slideimg6} alt="" />
            </div>
        
       
        </Slider>
      </div>
    );
};

export default ImageGallary;