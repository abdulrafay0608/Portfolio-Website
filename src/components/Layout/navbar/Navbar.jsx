import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

// Define your menu items in a single array
const navItems = [
  { title: "About", path: "#about" },
  { title: "Services", path: "#services" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState("translate-y-0");

  const controlNavbar = () => {
    if (window.scrollY > 400) {
      if (window.scrollY > lastScrollY && !isOpen) {
        setShow("-translate-y-[70px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    setIsOpen(false);
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header
      // data-aos="zoom-in"
      className={`bg-transparent bg-opacity-80 backdrop-blur-md shadow-slate-800 rounded-bl-3xl rounded-br-3xl shadow-sm max-w-screen-xl mx-auto px-2 md:px-4 md:p-0 z-50 sticky top-0 transition-transform duration-1000 ease-in-out delay-200 ${show}`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="" href="#home">
              <h3 className="text-xl font-bold">&lt; Abdul Rafay / &gt;</h3>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.path}
                    className="relative inline-block transition-colors duration-300 group hover:text-purple-500"
                  >
                    {item.title}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            {/* Hamburger Button: Visible on mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="rounded-sm text-primary p-2  transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay with Slide Transition */}
      {isOpen && <MobileNavbar setIsOpen={setIsOpen} isOpen={isOpen} />}
    </header>
  );
};

export default Navbar;
