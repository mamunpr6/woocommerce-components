import React, { memo, useState } from "react";

/**
 * JSX input field component independent and reusable.
 * The input field props are inputType, value, id, name, placeholder, label, className, parentClass, labelClass, errorMessageClass, tooltipText, errorMessage, errorTooltipText, min, max, inputIcon, tooltipIcon, errorTooltipIcon, iconPosition, and any other valid attribute we want to use.
 *
 * @param {object} props - Component props.
 * @param {string} [props.inputType="email"] - Type of the input field ("text", "password", "number", "email").
 * @param {string} props.value - Value of the input field.
 * @param {string} [props.id="email"] - ID attribute of the input field.
 * @param {string} [props.name="email"] - Name attribute of the input field.
 * @param {string} [props.placeholder=""] - Placeholder text of the input field.
 * @param {string} [props.label="Enter your email"] - Label text for the input field.
 * @param {string} [props.className=""] - Additional classes to apply to the input field.
 * @param {string} [props.parentClass=""] - Additional classes to apply to the parent container of the input field.
 * @param {string} [props.labelClass=""] - Additional classes to apply to the label of the input field.
 * @param {string} [props.errorMessageClass=""] - Additional classes to apply to the error message.
 * @param {string} [props.tooltipText="Enter your valid email"] - Tooltip text for the input field.
 * @param {string} [props.errorMessage] - Error message to display.
 * @param {string} [props.errorTooltipText] - Tooltip text for error message.
 * @param {number} [props.min] - Minimum value for number input type.
 * @param {number} [props.max] - Maximum value for number input type.
 * @param {React.ReactNode} [props.inputIcon] - Icon to display inside the input field.
 * @param {React.ReactNode} [props.tooltipIcon] - Icon for the tooltip.
 * @param {React.ReactNode} [props.errorTooltipIcon] - Icon for the error tooltip.
 * @param {string} [props.iconPosition="left"] - Position of the input icon ("left" or "right").
 * @param {...any} [props.attributes] - Any other valid attributes to be applied to the input field.
 *
 * @returns {JSX.Element} - InputField component.
 *
 * @since 1.0.0
 */

const InputField = memo((props) => {
  // destructuring props
  const {
    inputType = "email",
    value,
    id = "email",
    name = "email",
    placeholder = "",
    label = "Enter your email",
    className = "",
    parentClass = "",
    labelClass = "",
    errorMessageClass = "",
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
    ...attributes
  } = props;

  // className for input field
  let inputFieldClass =
    "block w-full px-3 py-2.5 bg-white disabled:bg-[#F9FAFB] rounded-lg border shadow-sm placeholder:text-[#777777] focus:outline-none text-sm text-[#2D384B] font-normal placeholder:font-normal placeholder:text-sm";

  // input type props checking
  const validInputTypes = ["text", "password", "number", "email"];
  const validInput = validInputTypes.includes(inputType) ? inputType : "text";

  // tooltip events onMouseEnter
  const [showTooltip, setShowtooltip] = useState(false);

  // on mouse enter tooltip will enabled
  const handleMouseEnter = () => {
    setShowtooltip(true);
  };
  // on mouse leave tooltip will leave
  const handleMouseLeave = () => {
    setShowtooltip(false);
  };

  return (
    <div className={`${parentClass}`}>
      {/* input label */}
      {label && (
        <label
          className={`block mb-2 text-sm lg:text-base font-medium text-[#2D384B] ${labelClass}`}
        >
          {label}
        </label>
      )}

      <div className="relative block">
        {/* input icon */}
        {inputIcon && (
          <span
            className={`absolute flex justify-center items-center w-4 h-4 top-1/2 transform -translate-y-1/2 text-gray-400 ${
              iconPosition === "left" && "left-4"
            } ${iconPosition === "right" && "right-8"}`}
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
            className={`absolute -top-5 right-0 text-xs md:text-sm text-end duration-300 ${
              errorTooltipText ? "text-[#F04438]" : "text-[#475467]"
            }`}
          >
            {errorTooltipText ? errorTooltipText : tooltipText}
          </p>
        )}
        <input
          {...attributes}
          type={validInput}
          value={value}
          name={name}
          id={id}
          placeholder={placeholder}
          min={min}
          max={max}
          className={`${inputFieldClass} ${
            iconPosition === "left" && "ps-10"
          } ${iconPosition === "right" && "pe-6"} ${
            errorMessage
              ? " border-[#FDA29B] focus:border-[#FDA29B] focus:ring-4 focus:ring-[#FEE4E2] "
              : "border-[#E1E6EF] focus:border-[#B9CCEB] ring-[#E1E6EF] focus:ring-4 focus:ring-[#E4EEFF]"
          } ${className} `}
        />
      </div>

      {/* error message */}
      {errorMessage && (
        <p className={`mt-1 md:mt-2 text-sm text-red-500 ${errorMessageClass}`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
});

export default InputField;
