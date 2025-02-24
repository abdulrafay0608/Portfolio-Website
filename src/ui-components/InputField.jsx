import React from "react";

const InputField = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  required = false,
  className = "",
  error,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block font-medium text-primary/80 leading-relaxed text-base mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`text-sm block p-2.5 w-full rounded border border-primary/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
        required={required}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
