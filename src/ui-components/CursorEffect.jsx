import React, { useEffect } from "react";
import { fairyDustCursor } from "cursor-effects";

const CustomCursor = () => {
  useEffect(() => {
    const effect = new fairyDustCursor({
      particleSize: 3,
      particleSpeed: 0.4,
      color: "#a855f7",
      outerAlpha: 0.1,
      innerScale: 0.7,
      outerScale: 2,
    });
    return () => {
      if (effect.destroy) {
        effect.destroy();
      }
    };
  }, []);
  return null;
};

export default CustomCursor;
