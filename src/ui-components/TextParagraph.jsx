import React from "react";

const TextParagraph = ({
  children,
  aos = "fade-up",
  duration = "1500",
  className = "",
}) => {
  return (
    <p
      data-aos={aos}
      data-aos-duration={duration}
      className={`text-primary/80 leading-relaxed text-sm ${className}`}
    >
      {children}
    </p>
  );
};

export default TextParagraph;
