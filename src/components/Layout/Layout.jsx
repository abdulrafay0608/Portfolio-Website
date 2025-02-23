import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
