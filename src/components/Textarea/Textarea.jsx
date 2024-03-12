import React from "react";

const Textarea = ({
  value,
  id,
  name,
  placeholder = "Enter Your Message",
  required,
  errorMessage,
  onChange,
  label,
  className = "",
  parentClass = "",
  labelClass = "",
  disabled = false,
  min,
  max,
  rows = 10,
  cols = 30,
}) => {
  return (
    <div className={`relative ${parentClass}`}>
      {label && (
        <label
          className={`block mb-2 text-sm font-medium text-[#2D384B] ${labelClass}`}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <textarea
          value={value}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          disabled={disabled}
          min={min}
          max={max}
          rows={rows}
          cols={cols}
          className={`block w-96 px-3 py-2.5 bg-white disabled:bg-[#F9FAFB] rounded-lg border shadow-sm placeholder:text-[#777777] focus:outline-none text-sm text-[#2D384B] font-normal placeholder:font-normal placeholder:text-sm ${
            errorMessage
              ? " border-[#FDA29B] focus:border-[#FDA29B] focus:ring-4 focus:ring-[#FEE4E2] "
              : "border-[#E1E6EF] focus:border-[#B9CCEB] ring-[#E1E6EF] focus:ring-4 focus:ring-[#E4EEFF]"
          }  ${className}`}
        />
      </div>

      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default Textarea;
