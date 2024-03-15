import React, { memo, useEffect, useState } from "react";

const SelectButton = memo((props) => {
  const { datas } = props;
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleSelectOption = (data) => {
    setSelected(data?.name);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleDropdown();
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className={` relative`}>
      <div
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        className={` w-full p-2 text-base flex items-center justify-between  border border-[#E1E6EF] focus:border-[#B9CCEB] ring-[#E1E6EF] focus:ring-4 focus:ring-[#E4EEFF] outline-none ${
          open ? "rounded-t-md" : "rounded-md"
        } ${!selected && "text-[#777777]"}`}
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
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <ul
        role="listbox"
        aria-labelledby="options-list"
        className={`absolute w-full border border-[#E1E6EF]  rounded-b-md z-20 max-h-60 overflow-y-auto bg-white ${
          open ? "block" : "hidden"
        } `}
      >
        {datas?.map((data) => (
          <li
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
              ${
                data?.name?.toLowerCase() === selected?.toLowerCase() &&
                "bg-[#F5F9FE] text-[#2D384B]"
              }`}
            key={data?.name}
            role="option"
            aria-selected={data?.name === selected}
            onClick={() => handleSelectOption(data)}
          >
            {data?.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default SelectButton;
