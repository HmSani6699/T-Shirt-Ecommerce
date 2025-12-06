import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const ServiceHighlights = () => {
  return (
    <div className="lg:mt-[70px] mt-[50px] max-w-[1200px] mx-auto flex flex-col items-center justify-center px-5 border-b border-gray-200 lg:pb-[60px] pb-[50px]">
      <div className=" lg:hidden">
        <div className="flex flex-col items-center justify-center text-center">
          <FaShippingFast className="text-[20px]" />
          <h2 className="text-[18px] text-text-black font-semibold my-2.5">
            Free Shipping
          </h2>
          <p className="text-text-gray">
            Find a location nearest you to reduce shipping costs and make
            shopping easier.
          </p>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between gap-5  ">
        <div className="flex flex-col items-center justify-center text-center">
          <FaShippingFast className="text-[20px]" />
          <h2 className="text-[18px] text-text-black font-semibold my-2.5">
            Free Shipping
          </h2>
          <p className="text-text-gray">
            Find a location nearest you to reduce shipping costs and make
            shopping easier.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <GoVerified className="text-[20px]" />
          <h2 className="text-[18px] text-text-black font-semibold my-2.5">
            Free Shipping
          </h2>
          <p className="text-text-gray">
            Find a location nearest you to reduce shipping costs and make
            shopping easier.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <BiMessageRoundedDots className="text-[20px]" />
          <h2 className="text-[18px] text-text-black font-semibold my-2.5">
            Free Shipping
          </h2>
          <p className="text-text-gray">
            Find a location nearest you to reduce shipping costs and make
            shopping easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;
