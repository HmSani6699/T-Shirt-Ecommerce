import { TbCurrencyTaka } from "react-icons/tb";
import cardimage from "../../../public/Images/card.webp";

import { FaStar } from "react-icons/fa";

const Card = ({ data }) => {
  return (
    <div className="w-full">
      <div className=" h-[350px] lg:h-[300px] w-full rounded-[15px] ">
        <img
          className="h-full w-full rounded-[15px] object-cover"
          src={data}
          alt="img"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-center font-semibold mt-2.5">
          Short Sleeved T-shirt
        </p>

        <div className="flex items-center gap-[3px] mt-2.5">
          <FaStar className="text-[15px] text-yellow-500" />
          <FaStar className="text-[15px] text-yellow-500" />
          <FaStar className="text-[15px] text-yellow-500" />
          <FaStar className="text-[15px] text-yellow-500" />
          <FaStar className="text-[15px] text-yellow-500" />
        </div>

        <div className="flex items-center gap-0.5 mt-2.5 font-semibold">
          <p className="flex items-center">
            <TbCurrencyTaka className="text-[20px]" />
            10,00
          </p>
          <p className="flex items-center line-through text-text-gray">
            <TbCurrencyTaka className="text-[20px] line-through" />
            10,00
          </p>
        </div>
        <div className="flex items-center gap-2.5 mt-2.5 text-text-gray">
          <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center border border-gray-600">
            <img
              className="h-full w-full rounded-full"
              src={cardimage}
              alt="img"
            />
          </div>
          <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center ">
            <img
              className="h-full w-full rounded-full"
              src={cardimage}
              alt="img"
            />
          </div>

          <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center ">
            <img
              className="h-full w-full rounded-full"
              src={cardimage}
              alt="img"
            />
          </div>
        </div>

        <button className="border border-gray-400 mt-5 w-full py-2 rounded-sm ">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
