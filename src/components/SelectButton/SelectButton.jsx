import React, { memo, useEffect, useState } from "react";

const SelectButton = memo((props) => {
  const { datas } = props;
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  console.log(selected);

  return (
    <div
      className={` relative w-72 font-medium border border-[#E1E6EF] ${
        open ? "rounded-t-md" : "rounded-md"
      }`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={` w-full p-2 text-base flex items-center justify-between ${
          !selected && "text-[#777777]"
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
        className={`absolute w-full border border-[#E1E6EF]  rounded-b-md z-20 max-h-60 overflow-y-auto bg-white ${
          open ? "block" : "hidden"
        } `}
      >
        {datas?.map((data) => (
          <li
            key={data?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
              ${
                data?.name?.toLowerCase() === selected?.toLowerCase() &&
                "bg-[#F5F9FE] text-[#2D384B]"
              }`}
            onClick={() => {
              if (data?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(data?.name);
                setOpen(false);
              }
            }}
          >
            {data?.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default SelectButton;
