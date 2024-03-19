import { memo, useState } from "react";

const Checkbox = memo((props) => {
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
      color = "border-[#E1E6EF] focus:ring-[#E8F1FF] focus:border-[#216DF0]";
      iconColor = "peer-checked:text-[#216DF0]";
      checkedBackground = "checked:bg-[#216DF0]"; //background color for rounded checkbox
      break;
    case "secondary":
      color = "border-gray-200 focus:ring-gray-200 focus:border-gray-400";
      iconColor = "peer-checked:text-gray-600";
      checkedBackground = "checked:bg-gray-600"; //background color for rounded checkbox
      break;
    case "success":
      color = "border-green-200  focus:ring-green-200 focus:border-green-400";
      iconColor = "peer-checked:text-green-600";
      checkedBackground = "checked:bg-green-600"; //background color for rounded checkbox
      break;
    case "danger":
      color = "border-red-200 focus:ring-red-200 focus:border-red-400";
      iconColor = "peer-checked:text-red-600";
      checkedBackground = "checked:bg-red-600"; //background color for rounded checkbox
      break;
    case "warning":
      color = "border-yellow-200 focus:ring-yellow-200 focus:border-yellow-400";
      iconColor = "peer-checked:text-yellow-600";
      checkedBackground = "checked:bg-yellow-600"; //background color for rounded checkbox
      break;
    case "info":
      color = "border-sky-200 focus:ring-sky-200 focus:border-sky-400";
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
    <div className={`relative w-full flex items-center gap-2 ${parentClass}`}>
      <input
        className={`absolute right-3 top-4 peer shrink-0 appearance-none border border-[#E1E6EF] disabled:border-[#EAECF0] rounded bg-white disabled:bg-[#F2F4F7] mt-0  focus:outline-none focus:ring-offset-0 focus:ring-4 focus:ring-[#E8F1FF] focus:border-[#216DF0] w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 ${
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
        className={`flex w-full items-start gap-2 md:gap-4 p-4 rounded-xl     cursor-pointer transition  bg-white peer-checked:bg-[#F1F6FF] peer-disabled:bg-[#EAECF0]  border border-[#E1E6EF]  peer-focus:border-[#82ADF6] peer-checked:ring-2 peer-checked:ring-blue-100`}
      >
        <span className="text-[#216DF0] p-1 bg-[#DDEBFF] rounded-full border-4 border-[#F1F7FF]">
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
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
        </span>
        <div>
          <h2 className="text-base text-black">
            Basic Plan
            <span
              className={`ms-1 text-sm text-[#838B99] ${
                isChecked && "!text-[#216DF0]"
              }`}
            >
              $10/month
            </span>
          </h2>
          <p
            className={`text-sm text-[#838B99] ${
              isChecked && "!text-[#216DF0]"
            }`}
          >
            Includes up to 10 users, 20GB indiviual data and access to all
            features.
          </p>
        </div>
      </label>
    </div>
  );
});

export default Checkbox;
