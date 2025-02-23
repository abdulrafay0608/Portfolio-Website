import React from "react";
import { NavLink } from "react-router-dom";
const navItems = [
  { title: "About", path: "#about" },
  { title: "Careers", path: "#careers" },
  { title: "History", path: "#history" },
  { title: "Services", path: "#services" },
  { title: "Projects", path: "#projects" },
  { title: "Blog", path: "#blog" },
];
const MobileNavbar = ({ setIsOpen, isOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transform transition-transform duration-700 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setIsOpen(false)}
      ></div>
      {/* Mobile Menu Panel */}
      <div className="relative ml-auto w-full min-h-screen  bg-slate-950 p-6">
        <button
          onClick={() => setIsOpen(false)}
          className="mb-4 block text-primary"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav>
          <ul className="space-y-8">
            {navItems.map((item) => (
              <li key={item.title} className="text-2xl font-medium text-center">
                <a
                  onClick={() => setIsOpen(false)}
                  href={item.path}
                  className="relative inline-block transition-colors duration-300 group hover:scale-105"
                >
                  {item.title}
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-purple-500 w-1/2 transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
