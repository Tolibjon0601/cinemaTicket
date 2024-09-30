import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetchData from "../../assets/hooks/useFetchData";
import { ToastContainer } from "react-toastify";

function MainSwiper() {

  const { movies, loading, error } = useFetchData("https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[400px] text-red-700 uppercase">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container pl-9 pt-[116px] relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="h-auto">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-[280px] h-[400px] rounded-xl mb-2 object-cover"
              />
              <h2 className="font-medium text-2xl text-white">{movie.title}</h2>
              <p className="text-white text-sm font-medium mt-2">
                {movie.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ToastContainer />
    </div>
  );
}

export default MainSwiper;
