import React from "react";

const CustomButton = ({
  variant = "filled",
  label,
  href,
  target = "_blank",
  extraClasses = "",
  ...props
}) => {
  const baseClasses =
    "group relative overflow-hidden rounded-full transition-transform duration-300 shadow-lg hover:scale-105 max-w-max";
  const gradientOverlay =
    "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300";
  const filledClasses = "bg-[var(--color-primary)] text-slate-950";
  const outlinedClasses =
    "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10";
  const classes = `${baseClasses} ${
    variant === "filled" ? filledClasses : outlinedClasses
  } ${extraClasses}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        <span className="relative z-10">{label}</span>
        <span className={gradientOverlay}></span>
      </a>
    );
  } else {
    return (
      <button type="button" className={classes} {...props}>
        <span className="relative z-10">{label}</span>
        <span className={gradientOverlay}></span>
      </button>
    );
  }
};

export default CustomButton;
