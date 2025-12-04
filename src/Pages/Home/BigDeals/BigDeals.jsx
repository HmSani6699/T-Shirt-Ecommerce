import card1 from "../../../../public/Images/card4.avif";
import big from "../../../../public/Images/big.webp";

const BigDeals = () => {
  return (
    <div className=" max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-[30px] gap-5 mt-[50px]  px-5 ">
      <div className="rounded-lg relative h-[530px]">
        <img className="w-full h-full rounded-lg" src={card1} alt="" />

        <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-10 py-2.5 rounded-full font-semibold">
          Men's
        </button>
      </div>
      <div className="rounded-lg h-[530px]">
        <img className="w-full h-full rounded-lg" src={big} alt="" />
      </div>
      <div className="rounded-lg relative h-[530px]">
        <img className="w-full h-full rounded-lg" src={card1} alt="" />

        <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-10 py-2.5 rounded-full font-semibold">
          Women's
        </button>
      </div>
    </div>
  );
};

export default BigDeals;
