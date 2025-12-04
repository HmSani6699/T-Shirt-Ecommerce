import React from "react";
import banner from "../../../../public/Images/banner.webp";

const Banner = () => {
  return (
    <div className="relative h-[400px] lg:h-screen">
      <img className="h-full" src={banner} alt="Banner image" />
      <div
        className="absolute bottom-[50px] left-1/2 -translate-x-1/2 text-center 
                lg:left-10 lg:translate-x-0 lg:text-left "
      >
        <p className="text-text-black">T-Shirt Collection</p>

        <h2 className="text-[30px] lg:text-[65px] font-bold text-text-black font-instrument whitespace-nowrap">
          Online Exclusive
        </h2>

        <button className="bg-bg-black text-text-white px-[30px] py-2.5 rounded-full mt-2.5">
          Shop Collection
        </button>
      </div>
    </div>
  );
};

export default Banner;
