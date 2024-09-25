import React from "react";
import Header from "../../assets/components/header";
import Footer from "../../assets/components/footer";
import MainSwiper from "../../pages/home/swiper";
import { Outlet } from "react-router-dom";
import MySwiper from "../../pages/home";

const MainLayout = () => {
  return (
    <div className="container max-w-[1360px] mx-auto text-white flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />

      </div>
      <MainSwiper />
      <Footer />
    </div>
  );
};

export default MainLayout;
