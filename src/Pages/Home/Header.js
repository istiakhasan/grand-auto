import React from "react";
import banner from "../../assest/banner2.webp";
import BannerSlider from "./BannerSlider";

const Header = () => {
  return (
    <div
      style={{
        background: `url(${banner})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full lg:h-screen"
    >
      <BannerSlider />
    </div>
  );
};

export default Header;
