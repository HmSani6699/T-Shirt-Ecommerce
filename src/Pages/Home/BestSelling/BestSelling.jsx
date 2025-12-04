import { FaStar } from "react-icons/fa";
import cardimage from "../../../../public/Images/card.webp";
import { TbCurrencyTaka } from "react-icons/tb";
import Card from "../../../Component/Card/Card";

const BestSelling = () => {
  return (
    <div className="mt-[60px] max-w-[1200px] mx-auto flex flex-col items-center justify-center px-5">
      {/* Head line */}
      <div className="text-center">
        <h2 className="font-instrument text-text-black text-[30px] font-semibold">
          Best Selling
        </h2>
        <p className="text-text-gray mt-2.5">
          Unmatched design—superior performance and customer satisfaction in
          one.
        </p>
      </div>

      {/* Card */}
      <div className=" hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] gap-5 mt-10 w-full  ">
        {[1, 2, 3, 4]?.map((item, i) => (
          <Card key={i} />
        ))}
      </div>

      {/* Card */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] gap-5 mt-10 w-full lg:block ">
        {[1, 2]?.map((item, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
