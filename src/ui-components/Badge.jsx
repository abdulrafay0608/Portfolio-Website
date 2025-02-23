import React from "react";

const Badge = ({ icon, text, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center gap-x-4 rounded-full relative
                      before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2
                      before:border-primary/50 dark:before:border-secondary/50 before:animate-pulse
                      transition-transform ${className}`}
    >
      {icon && (
        <span className="inline-block rounded-full px-2 py-0.5 text-base">
          {icon}
        </span>
      )}
      <h2 className="text-primary dark:text-secondary/90 text-xs px-2">{text}</h2>
    </div>
  );
};

export default Badge;
