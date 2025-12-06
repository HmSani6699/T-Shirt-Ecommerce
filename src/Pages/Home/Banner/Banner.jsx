import React from "react";
import banner from "../../../../public/Images/banner.webp";

const Banner = () => {
  return (
    <div className="relative h-[350px] md:h-[500px] lg:h-full bg-primary">
      <img
        className="h-full w-full object-cover"
        src={banner}
        alt="Banner image"
      />

      {/* Absolute content but still inside 1200px container */}
      <div className="absolute bottom-[50px] left-0 right-0">
        <div className="max-w-[1200px] mx-auto px-5 text-center md:text-left lg:text-left">
          <p className="text-text-black">T-Shirt Collection</p>

          <h2 className="text-[30px] md:text-[55px] lg:text-[65px] font-bold text-text-black font-instrument whitespace-nowrap">
            Online Exclusive
          </h2>

          <button className="bg-bg-black text-text-white px-[30px] py-2.5 rounded-full mt-2.5">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
