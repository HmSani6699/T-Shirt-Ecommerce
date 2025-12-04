import tShirt from "../../../../public/Images/t-shirt.jpg";
import tShirt1 from "../../../../public/Images/t-shirt1.jpg";
import tShirt2 from "../../../../public/Images/t-shirt2.jpg";
import tShirt3 from "../../../../public/Images/t-shirt3.jpg";
import tShirt4 from "../../../../public/Images/t-shirt4.jpg";

const TopCollections = () => {
  return (
    <div className="mt-[60px] max-w-[1200px] mx-auto flex flex-col items-center justify-center px-5">
      {/* Head line */}
      <div className="text-center">
        <h2 className="font-instrument text-text-black text-[30px] font-semibold">
          Top Collections
        </h2>
        <p className="text-text-gray mt-2.5">
          Express your style with our standout collection—fashion meets
          sophistication.
        </p>
      </div>

      {/* COllections */}
      <div className="flex items-center gap-10 mt-10">
        {[tShirt, tShirt1, tShirt2, tShirt3, tShirt4, tShirt]?.map(
          (item, i) => (
            <div key={i}>
              <div className="h-[130px] w-[130px] rounded-full">
                <img src={item} alt="img" />
              </div>
              <p className="text-center font-semibold mt-2.5">T-shirt</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TopCollections;
