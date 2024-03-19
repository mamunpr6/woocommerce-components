import React, { memo } from "react";

/**
 * JSX textarea component independent and reusable.
 * The textarea props are value, id, name, placeholder, errorMessage, label, className, parentClass, labelClass, rows, cols, and any other valid attribute we want to use.
 *
 * @param {object} props - Component props.
 * @param {string} props.value - Value of the textarea.
 * @param {string} [props.id="textarea"] - ID attribute of the textarea.
 * @param {string} [props.name="textarea"] - Name attribute of the textarea.
 * @param {string} [props.placeholder="Enter Your Message"] - Placeholder text of the textarea.
 * @param {string} [props.errorMessage=""] - Error message to display.
 * @param {string} [props.label="Write your message..."] - Label text for the textarea.
 * @param {string} [props.className=""] - Additional classes to apply to the textarea.
 * @param {string} [props.parentClass=""] - Additional classes to apply to the parent container of the textarea.
 * @param {string} [props.labelClass=""] - Additional classes to apply to the label of the textarea.
 * @param {number} [props.rows=10] - Number of visible text lines.
 * @param {number} [props.cols=30] - Number of visible text columns.
 * @param {...any} [props.attributes] - Any other valid attributes to be applied to the textarea.
 *
 * @returns {JSX.Element} - Textarea component.
 *
 * @since 1.0.0
 */

const Textarea = memo((props) => {
  // destructuring props
  const {
    value,
    id = "textarea",
    name = "textarea",
    placeholder = "Enter Your Message",
    errorMessage = "",
    label = "Write your message...",
    className = "",
    parentClass = "",
    labelClass = "",
    rows = 10,
    cols = 30,
    ...attributes
  } = props;

  // className for textarea
  let textareaClass =
    "block w-full px-3 py-2.5 bg-white disabled:bg-[#F9FAFB] rounded-lg border shadow-sm placeholder:text-[#777777] focus:outline-none text-sm lg:text-base text-[#2D384B] font-normal placeholder:font-normal placeholder:text-sm";

  return (
    <div className={`relative ${parentClass}`}>
      {/* textarea label */}
      {label && (
        <label
          className={`block mb-2 text-sm lg:text-base font-medium text-[#2D384B] ${labelClass}`}
        >
          {label}
        </label>
      )}

      <textarea
        value={value}
        name={name}
        id={id}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        {...attributes}
        className={`${textareaClass} ${
          errorMessage
            ? " border-[#FDA29B] focus:border-[#FDA29B] focus:ring-4 focus:ring-[#FEE4E2] "
            : "border-[#E1E6EF] focus:border-[#B9CCEB] ring-[#E1E6EF] focus:ring-4 focus:ring-[#E4EEFF]"
        }  ${className}`}
      />

      {/* textarea error message */}
      {errorMessage && (
        <p className="mt-1 md:mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
});

export default Textarea;
