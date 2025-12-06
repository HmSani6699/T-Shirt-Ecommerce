import { FaStar } from "react-icons/fa";
import csrdImg from "../../../../public/Images/card4.avif";
import { TbCurrencyTaka } from "react-icons/tb";

const CustomerSay = () => {
  return (
    <div className="mt-[50px] max-w-[1200px] mx-auto flex flex-col items-center justify-center px-5">
      {/* Head line */}
      <div className="text-center">
        <h2 className="font-instrument text-text-black text-[30px] font-semibold">
          Customer Say!
        </h2>
        <p className="text-text-gray mt-2.5">
          Customers love our products and we always strive to please them all.
        </p>
      </div>

      {/* Reviwe  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mt-10">
        <div className="lg:flex items-center  border border-gray-200 rounded-[10px] lg:h-[280px]">
          <div className="w-[35%] h-full lg:block hidden">
            <img
              className="rounded-l-[10px] w-full h-full"
              src={csrdImg}
              alt="img"
            />
          </div>

          {/* body */}
          <div className="p-8 lg:w-[65%]">
            <div className="flex items-center gap-[3px] mt-2.5">
              <FaStar className="text-[15px] text-yellow-500" />
              <FaStar className="text-[15px] text-yellow-500" />
              <FaStar className="text-[15px] text-yellow-500" />
              <FaStar className="text-[15px] text-yellow-500" />
              <FaStar className="text-[15px] text-yellow-500" />
            </div>
            <h2 className="text-text-black text-[20px] font-semibold mt-[15px] mb-[15px]">
              Sadiqur Rahman
            </h2>
            <p className="text-text-gray ">
              Discover a collection of timeless wardrobe essentials, seamlessly
              transitioning from work to weekend. America prioritize ...🥰
            </p>
            <hr className="my-5 border-t border-gray-200" />

            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full">
                <img
                  className="h-full w-full rounded-full"
                  src={csrdImg}
                  alt="img"
                />
              </div>
              <div>
                <p className="text-center font-semibold ">
                  Short Sleeved T-shirt
                </p>
                <div className="flex items-center gap-0.5  font-semibold">
                  <p className="flex items-center">
                    <TbCurrencyTaka className="text-[20px]" />
                    10,00
                  </p>
                  <p className="flex items-center line-through text-text-gray">
                    <TbCurrencyTaka className="text-[20px] line-through" />
                    10,00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="lg:flex items-center  border border-gray-200 rounded-[10px] lg:h-[280px]">
          <div className="w-[35%] h-full lg:block hidden">
            <img
              className="rounded-l-[10px] w-full h-full"
              src={csrdImg}
              alt="img"
            />
          </div>

          {/* body */}
          <div className="p-8 lg:w-[65%]">
            <div className="flex items-center gap-[3px] mt-2.5">
              <FaStar className="text-[15px] text-yellow-500" />
              <FaStar className="text-[15px] text-yellow-500" />
              <FaStar className="text-[15px] text-yellow-500" />
              <FaStar className="text-[15px] text-yellow-500" />
              <FaStar className="text-[15px] text-yellow-500" />
            </div>
            <h2 className="text-text-black text-[20px] font-semibold mt-[15px] mb-[15px]">
              Sadiqur Rahman
            </h2>
            <p className="text-text-gray ">
              Discover a collection of timeless wardrobe essentials, seamlessly
              transitioning from work to weekend. America prioritize ...🥰
            </p>
            <hr className="my-5 border-t border-gray-200" />

            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full">
                <img
                  className="h-full w-full rounded-full"
                  src={csrdImg}
                  alt="img"
                />
              </div>
              <div>
                <p className="text-center font-semibold ">
                  Short Sleeved T-shirt
                </p>
                <div className="flex items-center gap-0.5  font-semibold">
                  <p className="flex items-center">
                    <TbCurrencyTaka className="text-[20px]" />
                    10,00
                  </p>
                  <p className="flex items-center line-through text-text-gray">
                    <TbCurrencyTaka className="text-[20px] line-through" />
                    10,00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
