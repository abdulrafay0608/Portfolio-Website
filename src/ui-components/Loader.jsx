import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-full fixed inset-0 flex justify-center items-center bg-slate-950 z-[999]">
      <div className="relative group h-full w-full">
        <div className="h-full w-full flex flex-col gap-5 justify-center items-center text-5xl md:text-7xl font-extrabold">
          <span
            data-aos="zoom-in"
            data-aos-duration="500"
            className="animate-fade-in-out"
          >
            Welcome{" "}
          </span>
          <span
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="animate-fade-in-out delay-150"
          >
            to My{" "}
          </span>
          <span
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="animate-fade-in-out delay-300"
          >
            Portfolio
          </span>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping w-2 h-2 bg-purple-500 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
