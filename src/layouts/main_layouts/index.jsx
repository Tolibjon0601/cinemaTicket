import React from "react";
import Header from "../../assets/components/header";
import Footer from "../../assets/components/footer";

const MainLayout = (props) => {
  return (
    <div className="container max-w-[1360px] mx-auto text-white flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow ">
        {props?.children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
