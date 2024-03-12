import React from "react";

const ToggleButton = ({
  label = "",
  labelClass = "",
  value,
  id,
  name,
  required,
  onChange,
  size,
  checked,
  disabled,
  type,
}) => {
  let background = "";
  let checkedBackground = "";

  switch (type) {
    case "primary":
      ringColor = "bg-blue-400 hover:bg-blue-600";
      break;
    case "secondary":
      typeClasses = "bg-gray-400 hover:bg-gray-600";
      break;
    case "success":
      typeClasses = "bg-green-400 hover:bg-green-600";
      break;
    case "danger":
      typeClasses = "bg-red-400 hover:bg-red-600";
      break;
    case "warning":
      typeClasses = "bg-yellow-400 hover:bg-yellow-600";
      break;
    case "info":
      typeClasses = "bg-sky-400 hover:bg-sky-600";
      break;
    case "light":
      typeClasses = "bg-white hover:bg-gray-100";
      break;
    case "dark":
      typeClasses = "bg-black-400 hover:bg-black-100";
      break;
    default:
      typeClasses = "bg-gray-400 hover:bg-gray-600";
  }
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F3F8FF] rounded-full peer peer-checked:after:translate-x-full  peer-checked:after:border-white after:content-[''] after:absolute after:top-[7%] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
        {label && (
          <span
            className={`ms-3 text-sm font-medium text-gray-900 ${labelClass}`}
          >
            Toggle
          </span>
        )}
      </label>
    </div>
  );
};

export default ToggleButton;
