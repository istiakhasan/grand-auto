import React from 'react';
import banner from '../../assest/banner2.webp'
import Navbar from '../Shared/Navbar';
import BannerSlider from './BannerSlider';

const Header = () => {
    return (
        <div style={{
            background:`url(${banner})`,backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
            
            }}
            
          className="w-full h-screen"  
            >
               
            <Navbar />
            <BannerSlider />
            
        </div>
    );
};

export default Header;