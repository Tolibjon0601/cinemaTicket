import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MainSwiper() {
  return (
    <div className="container pl-9 pt-[116px] relative">
      <div className="">
        <div className="swiper-button-prev" />
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          className="mySwiper flex-grow"
        >

          <SwiperSlide>
            <div className="h-auto">
              <div className="w-[280px] h-[400px] bg-slate-700 rounded-xl mb-2"></div>
              <h2 className="font-medium text-2xl text-white max-w-[188px]">Kung Fu Panda 4 ENGLISH</h2>
              <p className="text-text_janr text-sm font-medium">Комедия, Фэнтези</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto">
              <div className="w-[280px] h-[400px] bg-slate-700 rounded-xl mb-2"></div>
              <h2 className="font-medium text-2xl text-white max-w-[188px]">Dune 2 – EN</h2>
              <p className="text-text_janr text-sm font-medium">Фантастика, Боевик</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto">
              <div className="w-[280px] h-[400px] bg-slate-700 rounded-xl mb-2"></div>
              <h2 className="font-medium text-2xl text-white max-w-[188px]">Дюна – RU</h2>
              <p className="text-text_janr text-sm font-medium">Фантастика, Боевик</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto">
              <div className="w-[280px] h-[400px] bg-slate-700 rounded-xl mb-2"></div>
              <h2 className="font-medium text-2xl text-white max-w-[188px]">Kung Fu Panda 4
RUSSIAN</h2>
              <p className="text-text_janr text-sm font-medium">Комедия, Фэнтези</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next" />
      </div>
    </div>
  );
}

export default MainSwiper;
