import React, { memo } from "react";

const Button = memo(
  ({ children, className, disabled, icon, iconPosition, onClick }) => {
    return (
      <button
        className={`px-4 py-2 bg-blue-400 disabled:bg-gray-300 hover:bg-blue-600 duration-300 rounded-md text-white font-semibold focus:border-2 focus:border-blue-200 focus:duration-0 outline-none ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

export default Button;
