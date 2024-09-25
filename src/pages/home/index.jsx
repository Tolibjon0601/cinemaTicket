import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const MySwiper = () => {
  return (
    <div className="container mx-auto ">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className=" h-[640px] rounded-xl ml-3 ">
           <img src="./image/main_swiperImg.svg" alt="" />

   </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[640px] rounded-xl ml-3 ">
            <img className=' h-[640px] rounded-xl' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29014e55-047e-42a5-b29e-d9fc261a5f34/dh4gllh-0c9dcc3e-d1c2-473f-94ef-eb10d17f3e7f.png/v1/fill/w_1920,h_955,q_80,strp/kung_fu_panda_4_rewrite__re_edited__by_through_the_movies_dh4gllh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTU1IiwicGF0aCI6IlwvZlwvMjkwMTRlNTUtMDQ3ZS00MmE1LWIyOWUtZDlmYzI2MWE1ZjM0XC9kaDRnbGxoLTBjOWRjYzNlLWQxYzItNDczZi05NGVmLWViMTBkMTdmM2U3Zi5wbmciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.S3kDvxpmWLnAQl5Zve8EPglT9LhqaVF2RQb53jU-uDQ" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" h-[640px] rounded-xl ml-3 ">
           <img src="./image/main_swiperImg.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" ">
            <img className=' h-[640px] rounded-xl ml-3' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29014e55-047e-42a5-b29e-d9fc261a5f34/dh4gllh-0c9dcc3e-d1c2-473f-94ef-eb10d17f3e7f.png/v1/fill/w_1920,h_955,q_80,strp/kung_fu_panda_4_rewrite__re_edited__by_through_the_movies_dh4gllh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTU1IiwicGF0aCI6IlwvZlwvMjkwMTRlNTUtMDQ3ZS00MmE1LWIyOWUtZDlmYzI2MWE1ZjM0XC9kaDRnbGxoLTBjOWRjYzNlLWQxYzItNDczZi05NGVmLWViMTBkMTdmM2U3Zi5wbmciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.S3kDvxpmWLnAQl5Zve8EPglT9LhqaVF2RQb53jU-uDQ" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
