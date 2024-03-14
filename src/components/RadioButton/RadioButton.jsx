import React, { memo } from "react";

const RadioButton = memo((props) => {
  const {
    label = "Accept terms",
    className = "",
    parentClass = "",
    labelClass = "",
    value,
    id = "radio",
    name = "radio",
    required = true,
    onChange,
    onClick,
    onBlur,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onKeyDown,
    onKeyUp,
    onSubmit,
    size = "large",
    checked = false,
    disabled = false,
    radioType = "danger",
  } = props;
  let sizeClass = "";
  let color = "";
  let iconColor = "";
  switch (size) {
    case "small":
      sizeClass = "w-4 h-4";
      break;
    case "medium":
      sizeClass = "w-4 md:w-5 h-4 md:h-5";
      break;
    case "large":
      sizeClass = "w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6";
      break;
    default:
      sizeClass = "w-4 h-4";
  }

  switch (radioType) {
    case "primary":
      color = "border-[#E1E6EF] focus:ring-[#E8F1FF] focus:border-[#216DF0]";
      iconColor = "peer-checked:text-[#216DF0]";
      break;
    case "secondary":
      color =
        "border-gray-200 checked:bg-white focus:ring-gray-200 focus:border-gray-400";
      iconColor = "peer-checked:text-gray-600";
      break;
    case "success":
      color =
        "border-green-200 checked:bg-white focus:ring-green-200 focus:border-green-400";
      iconColor = "peer-checked:text-green-600";
      break;
    case "danger":
      color =
        "border-red-200 checked:bg-white focus:ring-red-200 focus:border-red-400";
      iconColor = "peer-checked:text-red-600";
      break;
    case "warning":
      color =
        "border-yellow-200 checked:bg-white focus:ring-yellow-200 focus:border-yellow-400";
      iconColor = "peer-checked:text-yellow-600";
      break;
    case "info":
      color =
        "border-sky-200 checked:bg-white focus:ring-sky-200 focus:border-sky-400";
      iconColor = "peer-checked:text-sky-600";
      break;
    case "dark":
      color =
        "border-black checked:bg-white focus:ring-black focus:border-black";
      iconColor = "peer-checked:text-black";
      break;
    default:
      color =
        "border-[#E1E6EF] checked:bg-white focus:ring-[#E8F1FF] focus:border-[#216DF0]";
      iconColor = "peer-checked:text-[#216DF0]";
  }
  return (
    <div className={`flex items-center gap-2 ${parentClass}`}>
      <input
        className={`relative peer rounded-[50%] shrink-0 appearance-none border disabled:border-[#EAECF0] bg-white disabled:bg-[#F2F4F7] mt-1  checked:bg-white focus:outline-none focus:ring-offset-0 focus:ring-4 ${sizeClass} ${color} ${className}`}
        type="radio"
        id={id}
        value={value}
        name={name}
        required={required}
        defaultChecked={checked}
        disabled={disabled}
        size={size}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onSubmit={onSubmit}
      />
      {label && (
        <label
          htmlFor={id}
          className={`text-sm md:text-base mt-0.5 text-[#2D384B] ${labelClass}`}
        >
          {label}
        </label>
      )}
      <span
        className={`absolute mt-1 p-1 hidden peer-checked:block pointer-events-none disabled:peer-checked:text-[#EAECF0] ${iconColor} ${sizeClass} `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
    </div>
  );
});

export default RadioButton;
