import React from "react";

const SectionHeading = ({
  title,
  aos = "fade-right",
  underlineColor = "bg-purple-500",
  className = "",
}) => {
  return (
    <h2
      data-aos={aos}
      className={`relative inline-block text-3xl md:text-4xl font-bold mb-8 ${className}`}
    >
      {title}
      <span className={`absolute left-0 -bottom-1 w-1/2 h-1 ${underlineColor}`}></span>
    </h2>
  );
};

export default SectionHeading;
