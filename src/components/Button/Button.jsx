import React, { memo } from "react";
/**
 * JSX button component independent and reusable.
 * The button props are children, className, iconPosition and any valid attribute we want to use.
 *
 * @return {JSX.Element} - Button component.
 *
 * @since 1.0.0
 */

const Button = memo((props) => {
  // destructuring props
  const { children, className, iconPosition = "right", ...attributes } = props;

  // classNames
  let buttonClass =
    "px-3 py-2 flex items-center justify-center gap-2 text-base bg-blue-400 disabled:bg-gray-300 hover:bg-blue-600 duration-300 rounded-md text-white font-semibold focus:border-2 focus:border-blue-200 focus:duration-0 outline-none";

  return (
    <button
      className={`${buttonClass} ${iconPosition === "right" && "flex-row"} ${
        iconPosition === "left" && "flex-row-reverse"
      } ${className}`}
      {...attributes}
    >
      {children}
    </button>
  );
});

export default Button;
