import React from "react";
import banner from "../../../../public/Images/banner.webp";

const Banner = () => {
  return (
    <div className="relative">
      <img src={banner} alt="Banner image" />
      <div className="absolute bottom-[50px] left-[40px]">
        <p className="text-text-black">T-Shirt Collection</p>
        <h2 className="text-[50px] font-bold text-text-black font-i">
          Online Exclusive
        </h2>
        <button className="bg-bg-black text-text-white px-[30px] py-[10px] rounded-full mt-[10px]">
          Shop Collection
        </button>
      </div>
    </div>
  );
};

export default Banner;
