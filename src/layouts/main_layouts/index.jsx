import React from "react";
import Header from "../../assets/components/header";
import Footer from "../../assets/components/footer";

const MainLayout = (props) => {
  return <>
<Header/>
{props?.children}
<Footer/>
  </>;
};

export default MainLayout;
