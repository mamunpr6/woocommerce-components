import { memo, useState } from "react";

const CheckBoxGroup = memo((props) => {
  // destructuring props
  const {
    label = "Accept the terms",
    className = "",
    parentClass = "",
    labelClass = "",
    value,
    id = "checkbox3",
    name = "checkbox3",
    required = true,
    size = "large",
    rounded = "rounded",
    checked = false,
    buttonType = "primary",
    heading = "Basic Plan",
    subHeading = "$10/month",
    text = "Includes up to 10 users, 20GB indiviual data and access to all features.",
    checkboxIcon = (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </>
    ),
    checkboxGroupIcon = (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
          />
        </svg>
      </>
    ),
    ...attributes
  } = props;

  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
  };

  let color = ""; //checkbox color
  let iconColor = ""; //checkbox icon color
  let checkedBackground = ""; //background color for rounded checkbox

  // switch case to define button type
  switch (buttonType) {
    case "primary":
      color =
        "border-blue-200 focus:border-blue-100 peer-focus:border-blue-200 focus:ring-blue-100 peer-checked:ring-2 peer-checked:ring-blue-100";
      iconColor = "peer-checked:text-[#216DF0]";
      checkedBackground = "checked:bg-[#216DF0]"; //background color for rounded checkbox
      break;
    case "secondary":
      color =
        "border-gray-200 focus:border-gray-100 peer-focus:border-gray-200 focus:ring-gray-100 peer-checked:ring-2 peer-checked:ring-gray-100";
      iconColor = "peer-checked:text-gray-600";
      checkedBackground = "checked:bg-gray-600"; //background color for rounded checkbox
      break;
    case "success":
      color =
        "border-green-200 focus:border-green-100 peer-focus:border-green-200 focus:ring-green-100 peer-checked:ring-2 peer-checked:ring-green-100";
      iconColor = "peer-checked:text-green-600";
      checkedBackground = "checked:bg-green-600"; //background color for rounded checkbox
      break;
    case "danger":
      color =
        "border-red-200 focus:border-red-100 peer-focus:border-red-200 focus:ring-red-100 peer-checked:ring-2 peer-checked:ring-red-100";
      iconColor = "peer-checked:text-red-600";
      checkedBackground = "checked:bg-red-600"; //background color for rounded checkbox
      break;
    case "warning":
      color =
        "border-yellow-200 focus:border-yellow-100 peer-focus:border-yellow-200 focus:ring-yellow-100 peer-checked:ring-2 peer-checked:ring-yellow-100";
      iconColor = "peer-checked:text-yellow-600";
      checkedBackground = "checked:bg-yellow-600"; //background color for rounded checkbox
      break;
    case "info":
      color =
        "border-sky-200 focus:border-sky-100 peer-focus:border-sky-200 focus:ring-sky-100 peer-checked:ring-2 peer-checked:ring-sky-100";
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
        "border-blue-200 focus:border-blue-100 peer-focus:border-blue-200 focus:ring-blue-100 peer-checked:ring-2 peer-checked:ring-blue-100";
      iconColor = "peer-checked:text-[#216DF0]";
      checkedBackground = "checked:bg-[#216DF0]"; //background color for rounded checkbox
  }

  return (
    <div className={`relative w-full flex items-center gap-2 ${parentClass}`}>
      <input
        className={`absolute right-3 top-4 peer shrink-0 appearance-none border border-[#E1E6EF] disabled:border-[#EAECF0] rounded bg-white disabled:bg-[#F2F4F7] mt-0  focus:outline-none focus:ring-offset-0 focus:ring-4  w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 ${
          rounded && `rounded-[50%] p-0.5 ${checkedBackground}`
        } ${color} ${className}`}
        type="checkbox"
        id={id}
        value={value}
        defaultChecked={checked}
        name={name}
        required={required}
        size={size}
        onChange={handleChange}
        {...attributes}
      />
      <span
        className={`absolute right-3 top-4 mt-0 p-0.5 hidden peer-checked:block pointer-events-none ${
          rounded ? "peer-checked:text-white" : iconColor
        } disabled:peer-checked:text-[#EAECF0] w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 `}
      >
        {checkboxIcon}
      </span>
      <label
        htmlFor={id}
        // border-red-200 focus:ring-red-200 focus:border-red-400
        className={`flex w-full items-start gap-2 md:gap-4 p-4 rounded-xl     cursor-pointer transition  bg-white peer-checked:bg-[#F1F6FF] peer-disabled:bg-[#EAECF0]  border ${color}`}
      >
        <span className="text-[#216DF0] p-1 bg-[#DDEBFF] rounded-full border-4 border-[#F1F7FF]">
          {checkboxGroupIcon}
        </span>
        <div>
          <h2 className="text-base text-black">
            {heading}
            <span
              className={`ms-1 text-sm text-[#838B99] ${
                isChecked && "!text-[#216DF0]"
              }`}
            >
              {subHeading}
            </span>
          </h2>
          <p
            className={`text-sm text-[#838B99] ${
              isChecked && "!text-[#216DF0]"
            }`}
          >
            {text}
          </p>
        </div>
      </label>
    </div>
  );
});

export default CheckBoxGroup;
