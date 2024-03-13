import React from "react";

const Checkbox = ({
  label = "Accept out terms and conditions",
  labelClass = "",
  value,
  id,
  name,
  required,
  onChange,
  size,
  rounded,
  checked,
  disabled,
  type,
}) => {
  let sizeClass = "";
  let color = "";
  let iconColor = "";
  let checkedBackground = ""; //for rounded checkbox
  switch (size) {
    case "small":
      sizeClass = "w-4 h-4";
      break;
    case "medium":
      sizeClass = "w-5 h-5";
      break;
    case "large":
      sizeClass = "w-6 h-6";
      break;
    default:
      sizeClass = "w-4 h-4";
  }

  switch (type) {
    case "primary":
      color = "border-[#E1E6EF] focus:ring-[#E8F1FF] focus:border-[#216DF0]";
      iconColor = "peer-checked:text-[#216DF0]";
      checkedBackground = "checked:bg-[#216DF0]"; //background color for rounded checkbox
      break;
    case "secondary":
      color =
        "border-gray-200 checked:bg-white focus:ring-gray-200 focus:border-gray-400";
      iconColor = "peer-checked:text-gray-600";
      checkedBackground = "checked:bg-gray-600"; //background color for rounded checkbox
      break;
    case "success":
      color =
        "border-green-200 checked:bg-white focus:ring-green-200 focus:border-green-400";
      iconColor = "peer-checked:text-green-600";
      checkedBackground = "checked:bg-green-600"; //background color for rounded checkbox
      break;
    case "danger":
      color =
        "border-red-200 checked:bg-white focus:ring-red-200 focus:border-red-400";
      iconColor = "peer-checked:text-red-600";
      checkedBackground = "checked:bg-red-600"; //background color for rounded checkbox
      break;
    case "warning":
      color =
        "border-yellow-200 checked:bg-white focus:ring-yellow-200 focus:border-yellow-400";
      iconColor = "peer-checked:text-yellow-600";
      checkedBackground = "checked:bg-yellow-600"; //background color for rounded checkbox
      break;
    case "info":
      color =
        "border-sky-200 checked:bg-white focus:ring-sky-200 focus:border-sky-400";
      iconColor = "peer-checked:text-sky-600";
      checkedBackground = "checked:bg-sky-600"; //background color for rounded checkbox
      break;
    case "dark":
      color =
        "border-black checked:bg-white focus:ring-black focus:border-black";
      iconColor = "peer-checked:text-black";
      checkedBackground = "checked:bg-black"; //background color for rounded checkbox
      break;
    default:
      color =
        "border-[#E1E6EF] checked:bg-white focus:ring-[#E8F1FF] focus:border-[#216DF0]";
      iconColor = "peer-checked:text-[#216DF0]";
      checkedBackground = "checked:bg-[#216DF0]"; //background color for rounded checkbox
  }

  return (
    <div className="flex gap-2 ">
      <input
        className={`relative peer shrink-0 appearance-none border border-[#E1E6EF] disabled:border-[#EAECF0] rounded bg-white disabled:bg-[#F2F4F7] mt-1  checked:bg-white focus:outline-none focus:ring-offset-0 focus:ring-4 focus:ring-[#E8F1FF] focus:border-[#216DF0] ${sizeClass} ${
          rounded && `rounded-[50%] p-0.5 ${checkedBackground}`
        } ${color}`}
        type="checkbox"
        id={id}
        value={value}
        name={name}
        required={required}
        onChange={onChange}
        defaultChecked={checked}
        disabled={disabled}
        size={size}
      />
      {label && (
        <label
          htmlFor={id}
          className={`text-base text-[#2D384B] ${labelClass}`}
        >
          {label}
        </label>
      )}
      <svg
        className={`absolute mt-1 p-0.5 hidden peer-checked:block pointer-events-none ${
          rounded ? "peer-checked:text-white" : iconColor
        } disabled:peer-checked:text-[#EAECF0] ${sizeClass} `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default Checkbox;
