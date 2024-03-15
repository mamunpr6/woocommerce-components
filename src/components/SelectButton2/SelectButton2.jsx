import React, { useState } from "react";

const SelectButton2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-72">
      <div
        onClick={() => setOpen(!open)}
        className="w-full p-2 border border-[#D0D5DD] rounded-lg flex items-center justify-between"
      >
        Select Option
        <span className={`w-5 h-5 ${open && "rotate-180"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <ul
        className={`absolute z-10 bg-red-200 w-full ${
          open ? "block" : "hidden"
        }`}
      >
        <li className="p-2 text-sm hover:bg-blue-400 hover:text-white">
          Item Select
        </li>
        <li className="p-2 text-sm hover:bg-blue-400 hover:text-white">
          Item Select
        </li>
        <li className="p-2 text-sm hover:bg-blue-400 hover:text-white">
          Item Select
        </li>
        <li className="p-2 text-sm hover:bg-blue-400 hover:text-white">
          Item Select
        </li>
        <li className="p-2 text-sm hover:bg-blue-400 hover:text-white">
          Item Select
        </li>
        <li className="p-2 text-sm hover:bg-blue-400 hover:text-white">
          Item Select
        </li>
      </ul>
    </div>
  );
};

export default SelectButton2;

{
  /* <div
onClick={() => setOpen(!open)}
className={`focus:bg-red-200 w-full p-2 flex items-center justify-between rounded ${
  !selected && "text-gray-700"
}`}
>
{selected
  ? selected?.length > 25
    ? selected?.substring(0, 25) + "..."
    : selected
  : "Select Country"}
<span className={`w-5 h-5 ${open && "rotate-180"}`}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-5 h-5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
</span>
</div> */
}
