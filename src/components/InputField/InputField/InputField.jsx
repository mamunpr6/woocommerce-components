import React, { useState } from "react";
import tooltipIcon from "../../../assets/Icon.png";
import errorIcon from "../../../assets/error-icon.png";
import icon from "../../../assets/mail.png";

const InputField = ({
  type = "text",
  value,
  id,
  name,
  placeholder = "",
  required,
  errorMessage,
  onChange,
  label,
  className,
  parentClass = "",
  labelClass = "",
  checked = false,
  disabled = false,
  tooltip = "",
  errorTooltip = "",
  min,
  max,
  inputIcon,
  iconPosition,
}) => {
  const [showTooltip, setShowtooltip] = useState(false);
  const handleMouseEnter = () => {
    setShowtooltip(true);
  };
  const handleMouseLeave = () => {
    setShowtooltip(false);
  };
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
        {/* input icon */}
        {inputIcon && (
          <img
            className={`absolute w-4 h-4 top-1/2 transform -translate-y-1/2 ${
              iconPosition === "left" && "left-4"
            } ${iconPosition === "right" && "right-8"}`}
            src={inputIcon}
            alt="input-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
        {/* tooltip icon and error icon */}
        {errorMessage ? (
          <img
            className="absolute w-4 h-4 top-1/2 transform -translate-y-1/2 right-3"
            src={errorIcon}
            alt="error-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ) : (
          <img
            className="absolute w-4 h-4 top-1/2 transform -translate-y-1/2 right-3"
            src={tooltipIcon}
            alt="tooltip icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
        {/* tooltip message */}
        {showTooltip && (
          <p
            className={`absolute -top-5 right-0 text-xs text-end duration-300 ${
              errorMessage ? "text-[#F04438]" : "text-[#475467]"
            }`}
          >
            {errorMessage ? errorTooltip : tooltip}
          </p>
        )}
        <input
          type={type}
          value={value}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          defaultChecked={checked}
          disabled={disabled}
          min={min}
          max={max}
          className={`block w-96 px-3 py-2.5 bg-white disabled:bg-[#F9FAFB] rounded-lg border shadow-sm placeholder:text-[#777777] focus:outline-none text-sm text-[#2D384B] font-normal placeholder:font-normal placeholder:text-sm ${
            iconPosition === "left" && "ps-10"
          } ${iconPosition === "right" && "pe-6"} ${
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

export default InputField;
