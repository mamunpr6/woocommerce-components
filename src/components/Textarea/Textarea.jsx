import React, { memo } from "react";

const Textarea = memo((props) => {
  const {
    value,
    id = "textarea",
    name = "textarea",
    placeholder = "Enter Your Message",
    required = true,
    errorMessage = "",
    onChange,
    onClick,
    onBlur,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onKeyDown,
    onKeyUp,
    onSubmit,
    label = "Write your message...",
    className = "",
    parentClass = "",
    labelClass = "",
    disabled = false,
    min,
    max,
    rows = 10,
    cols = 30,
  } = props;
  let textareaClass =
    "block w-full px-3 py-2.5 bg-white disabled:bg-[#F9FAFB] rounded-lg border shadow-sm placeholder:text-[#777777] focus:outline-none text-sm lg:text-base text-[#2D384B] font-normal placeholder:font-normal placeholder:text-sm";
  return (
    <div className={`relative ${parentClass}`}>
      {label && (
        <label
          className={`block mb-2 text-sm lg:text-base font-medium text-[#2D384B] ${labelClass}`}
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
          onClick={onClick}
          onBlur={onBlur}
          onFocus={onFocus}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onSubmit={onSubmit}
          disabled={disabled}
          min={min}
          max={max}
          rows={rows}
          cols={cols}
          className={`${textareaClass} ${
            errorMessage
              ? " border-[#FDA29B] focus:border-[#FDA29B] focus:ring-4 focus:ring-[#FEE4E2] "
              : "border-[#E1E6EF] focus:border-[#B9CCEB] ring-[#E1E6EF] focus:ring-4 focus:ring-[#E4EEFF]"
          }  ${className}`}
        />
      </div>

      {errorMessage && (
        <p className="mt-1 md:mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
});

export default Textarea;
