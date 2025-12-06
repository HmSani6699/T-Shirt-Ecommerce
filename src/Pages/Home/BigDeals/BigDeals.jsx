import card1 from "../../../../public/Images/card4.avif";
import big from "../../../../public/Images/big.webp";

const BigDeals = () => {
  return (
    <div className=" max-w-[1200px] mx-auto  mt-[50px]  px-5 ">
      {/* Headline */}
      <div className="text-center block lg:hidden mb-10">
        <h2 className="font-instrument text-[30px] font-semibold">
          Big Dealse
        </h2>
        <p className="text-text-gray mt-2.5">
          Express your style with our standout collection—fashion meets
          sophistication.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-[30px] gap-5">
        <div className="rounded-lg relative h-[530px] ">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={card1}
            alt=""
          />

          <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white px-10 py-2.5 rounded-full font-semibold">
            Men's
          </button>
        </div>
        <div className="rounded-lg h-[530px] relative">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={big}
            alt="mg"
          />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 ">
            <div className="text-text-white text-center mb-5">
              <p className="uppercase text-center mb-5">DON'T MISS OUT...</p>
              <h2 className="text-[30px] text-text-white font-instrument font-bold text-center">
                Today's Big Deals
              </h2>
              <p>Sale up to 75% all items. Hurry Up!</p>
            </div>
            {/* time */}
            <div className="flex  items-center justify-center gap-2.5 mb-10">
              <div className="h-[90px] w-[70px] bg-white/20 shadow  rounded-sm flex flex-col items-center justify-center text-white">
                <span className="text-2xl font-bold">08</span>
                <p>Days</p>
              </div>

              <div className="h-[90px] w-[70px] bg-white/20 shadow  rounded-sm flex flex-col items-center justify-center text-white">
                <span className="text-2xl font-bold">02</span>
                <p>Hours</p>
              </div>

              <div className="h-[90px] w-[70px] bg-white/20 shadow  rounded-sm flex flex-col items-center justify-center text-white">
                <span className="text-2xl font-bold">05</span>
                <p>Mins</p>
              </div>

              <div className="h-[90px] w-[70px] bg-white/20 shadow  rounded-sm flex flex-col items-center justify-center text-white">
                <span className="text-2xl font-bold">09</span>
                <p>Secs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className=" bg-white px-10 py-2.5 rounded-full font-semibold">
                Shop Sale
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-lg relative h-[530px]">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={card1}
            alt=""
          />

          <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white px-10 py-2.5 rounded-full font-semibold">
            Women's
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigDeals;
