import React from "react";

const TaglineBadge = ({ text, icon, extraClasses = "" }) => {
  return (
    <div
      className={`inline-flex items-center rounded-full  border-2 border-dashed border-primary/20 dark:border-secondary/30 ${extraClasses}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <p className="text-sm text-primary dark:text-secondary">{text}</p>
    </div>
  );
};

export default TaglineBadge;
