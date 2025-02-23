import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <div className="md:mb-4">
      <TypeAnimation
        sequence={[
          "Mern Stack Developer",
          1000,
          "Web Developer",
          1000,
          "Front-End Developer",
          1000,
          "Back-End Developer",
          1000,
          "App Developer",
          1000,
          "Full Stack Developer",
          1000,
          "Freelancer",
          1000,
        ]}
        wrapper="span"
        speed={10}
        className="text-2xl sm:text-3xl md:text-4xl font-bold 
        bg-gradient-to-br from-primary via-purple-500 to-secondary 
        bg-clip-text text-transparent 
        animate-gradient
        drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]
        hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]
        transition-all duration-500"
        repeat={Infinity}
      />
    </div>
  );
};

export default TypingAnimation;
