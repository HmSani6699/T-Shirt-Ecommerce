import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import cardimage1 from "../../../../public/Images/card4.avif";
import cardimage2 from "../../../../public/Images/card3.avif";
import cardimage3 from "../../../../public/Images/card2.avif";

import "swiper/css";
import "swiper/css/pagination";
import Card from "../../../Component/Card/Card";

const TrendingOutfits = () => {
  const items = [cardimage1, cardimage2, cardimage1, cardimage3];

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
            0: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="pb-10"
        >
          {items.map((item, i) => (
            <SwiperSlide className="pb-[60px]" key={i}>
              <Card key={i} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingOutfits;
