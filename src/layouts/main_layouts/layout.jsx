import React from "react";
import Header from "../../assets/components/header";
import Footer from "../../assets/components/footer";

import MainSwiper from "../../pages/home/swiper";
import LoginPage from "../../pages/home/login";
import AuthPage from "../../pages/home/AuthPage";

const MainLayout = (props) => {
  return (
    <div className="container max-w-[1360px] mx-auto text-white flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow ">{props?.children}</div>
      <MainSwiper />
      <LoginPage/>
      <AuthPage/>
      <Footer />
    </div>
  );
};

export default MainLayout;
