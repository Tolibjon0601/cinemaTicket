import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function MainSwiper() {
  return (
    <div className="container pl-9 pt-[116px] relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={15}
        slidesPerView={4}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-auto">
            <div className="w-[280px] h-[400px] bg-slate-700 rounded-xl mb-2"></div>
            <h2 className="font-medium text-2xl text-white">Kung Fu Panda 4 ENGLISH</h2>
            <p className="text-text_janr text-sm font-medium">Комедия, Фэнтези</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto">
            <div className="w-[280px] h-[400px] bg-slate-700 rounded-xl mb-2"></div>
            <h2 className="font-medium text-2xl text-white">Dune 2 – EN</h2>
            <p className="text-text_janr text-sm font-medium">Фантастика, Боевик</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto">
            <div className="w-[280px] h-[400px] bg-slate-700 rounded-xl mb-2"></div>
            <h2 className="font-medium text-2xl text-white">Дюна – RU</h2>
            <p className="text-text_janr text-sm font-medium">Фантастика, Боевик</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto">
            <div className="w-[280px] h-[400px] bg-slate-700 rounded-xl mb-2"></div>
            <h2 className="font-medium text-2xl text-white">Kung Fu Panda 4 RUSSIAN</h2>
            <p className="text-text_janr text-sm font-medium">Комедия, Фэнтези</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainSwiper;
