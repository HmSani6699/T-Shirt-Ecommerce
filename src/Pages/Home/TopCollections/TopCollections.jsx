import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import tShirt from "../../../../public/Images/t-shirt.jpg";
import tShirt1 from "../../../../public/Images/t-shirt1.jpg";
import tShirt2 from "../../../../public/Images/t-shirt2.jpg";
import tShirt3 from "../../../../public/Images/t-shirt3.jpg";
import tShirt4 from "../../../../public/Images/t-shirt4.jpg";

import "swiper/css";
import "swiper/css/pagination";

const TopCollections = () => {
  const items = [tShirt, tShirt1, tShirt2, tShirt3, tShirt4, tShirt];

  return (
    <div className="mt-[60px] max-w-[1200px] mx-auto flex flex-col items-center px-5">
      {/* Headline */}
      <div className="text-center">
        <h2 className="font-instrument text-[30px] font-semibold">
          Top Collections
        </h2>
        <p className="text-text-gray mt-2.5">
          Express your style with our standout collection—fashion meets
          sophistication.
        </p>
      </div>

      {/* Slider */}
      <div className="w-full mt-10">
        <Swiper
          modules={[Pagination]}
          // spaceBetween={25}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active custom-bullet-active",
          }}
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
          className="pb-10"
        >
          {items.map((item, i) => (
            <SwiperSlide className="pb-[50px]" key={i}>
              <div className="flex flex-col items-center">
                <div className="h-full w-full rounded-full bg-primary overflow-hidden flex items-center justify-center">
                  <img
                    className="h-full w-full object-cover"
                    src={item}
                    alt="img"
                  />
                </div>
                <p className="text-center font-semibold mt-3">T-shirt</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopCollections;
