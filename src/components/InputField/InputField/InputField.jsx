import React, { memo, useState } from "react";

const InputField = memo((props) => {
  const {
    inputType = "email",
    value,
    id = "email",
    name = "email",
    placeholder = "",
    required = true,
    onChange,
    label = "Enter your email",
    className = "",
    parentClass = "",
    labelClass = "",
    errorMessageClass = "",
    checked = false,
    disabled = false,
    tooltipText = "Enter your valid email",
    errorMessage,
    errorTooltipText,
    min,
    max,
    inputIcon = (
      <>
        <svg viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"
          />
        </svg>
      </>
    ),
    tooltipIcon,
    errorTooltipIcon,
    iconPosition = "left",
  } = { props };

  // input type props checking
  const validInputTypes = ["text", "password", "number", "email"];
  const validInput = validInputTypes.includes(inputType) ? inputType : "text";

  // tooltip events onMouseEnter
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
          <span
            className={`absolute flex justify-center items-center w-4 h-4 top-1/2 transform -translate-y-1/2 text-gray-400 ${
              iconPosition === "left" && "left-4"
            } ${iconPosition === "right" && "right-8"}`}
            alt="input-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {inputIcon}
          </span>
        )}
        {/* tooltip icon and error icon */}
        {errorMessage && errorTooltipIcon ? (
          <span
            className="absolute flex justify-center items-center w-4 h-4 top-1/2 transform -translate-y-1/2 right-3 text-red-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {errorTooltipIcon}
          </span>
        ) : (
          <span
            className="absolute  flex justify-center items-center w-4 h-4 top-1/2 transform -translate-y-1/2 right-3 text-gray-400"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {tooltipIcon}
          </span>
        )}
        {/* tooltip message and error tooltip message */}
        {showTooltip && (
          <p
            className={`absolute -top-5 right-0 text-xs text-end duration-300 ${
              errorTooltipText ? "text-[#F04438]" : "text-[#475467]"
            }`}
          >
            {errorTooltipText ? errorTooltipText : tooltipText}
          </p>
        )}
        <input
          type={validInput}
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
        <p className={`mt-2 text-sm text-red-500 ${errorMessageClass}`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
});

export default InputField;
