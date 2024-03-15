import React, { memo } from "react";

const Button = memo((props) => {
  const {
    children,
    className,
    disabled,
    iconPosition = "right",
    onClick,
    onChange,
    onBlur,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onKeyDown,
    onKeyUp,
    onSubmit,
  } = props;
  let buttonClass =
    "px-3 py-2 flex items-center justify-center gap-2 text-base bg-blue-400 disabled:bg-gray-300 hover:bg-blue-600 duration-300 rounded-md text-white font-semibold focus:border-2 focus:border-blue-200 focus:duration-0 outline-none";
  return (
    <button
      className={`${buttonClass} ${iconPosition === "right" && "flex-row"} ${
        iconPosition === "left" && "flex-row-reverse"
      }  ${className}`}
      disabled={disabled}
      onClick={onClick}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  );
});

export default Button;
