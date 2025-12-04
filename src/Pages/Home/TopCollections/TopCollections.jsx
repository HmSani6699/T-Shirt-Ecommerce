import tShirt from "../../../../public/Images/t-shirt.jpg";

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
        {[1, 2, 3, 4, 5, 6]?.map((item, i) => (
          <div key={i}>
            <div className="h-[130px] w-[130px] rounded-full">
              <img src={tShirt} alt="img" />
            </div>
            <p className="text-center font-semibold mt-2.5">T-shirt</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollections;
