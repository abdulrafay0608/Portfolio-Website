import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent bg-opacity-80 backdrop-blur-md border-slate-800 border rounded-tl-3xl rounded-tr-3xl max-w-screen-xl mx-auto px-4 py-4 mt-8 transition-transform duration-1000 ease-in-out delay-200">
      <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <a href="#home" className="text-primary/90">
            <h3 className="flex items-center gap-3 text-base font-medium">
              Abdul Rafay - MERN Stack Developer
              <FaExternalLinkAlt className="text-sm text-purple-500" />
            </h3>
          </a>
          <p className="text-primary/60 text-sm mt-1">
            Thanks for giving your time.
          </p>
        </div>
        <p className="text-primary/80 text-sm text-center">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
