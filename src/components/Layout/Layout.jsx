import React, { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../ui-components/Loader";
import CursorEffect from "../../ui-components/CursorEffect";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="mx-1">
      <Toaster position="bottom-right" />
      <CursorEffect />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
