import React, { memo } from "react";

const ToggleButton = memo(
  ({
    label = "Toggle",
    labelClass = "",
    value,
    id = "toggle",
    name = "toggle",
    required,
    onChange,
    size = "small",
    checked,
    disabled = false,
    buttonType = "primary",
  }) => {
    let checkedBackground;
    let sizeClass;

    switch (size) {
      case "small":
        sizeClass =
          "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4";
        break;
      case "medium":
        sizeClass =
          "w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5";
        break;
      case "large":
        sizeClass =
          "w-9 h-5 after:top-[4px] after:start-[4px] after:h-6 after:w-6";
      default:
        sizeClass =
          "w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5";
    }

    switch (buttonType) {
      case "primary":
        checkedBackground = "peer-checked:bg-blue-600";
        break;
      case "secondary":
        checkedBackground = "peer-checked:bg-gray-600";
        break;
      case "success":
        checkedBackground = "peer-checked:bg-green-600";
        break;
      case "danger":
        checkedBackground = "peer-checked:bg-red-600";
        break;
      case "warning":
        checkedBackground = "peer-checked:bg-yellow-600";
        break;
      case "info":
        checkedBackground = "peer-checked:bg-sky-600";
        break;
      case "light":
        checkedBackground = "peer-checked:bg-white";
        break;
      case "dark":
        checkedBackground = "peer-checked:bg-black";
        break;
      default:
        checkedBackground = "peer-checked:bg-blue-600";
    }
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          id={id}
          name={name}
          required={required}
          onChange={onChange}
          value={value}
          disabled={disabled}
          className="sr-only peer"
          checked={checked}
          size={size}
        />
        <div
          className={`relative bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F3F8FF] rounded-full peer peer-checked:after:translate-x-full  peer-checked:after:border-white after:content-[''] after:absolute  after:bg-white after:border-gray-300 after:border after:rounded-full  after:transition-all ${checkedBackground} ${sizeClass}`}
        ></div>
        {label && (
          <span
            className={`ms-3 text-sm font-medium text-gray-900 ${labelClass}`}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

export default ToggleButton;
