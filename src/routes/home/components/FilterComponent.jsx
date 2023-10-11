import React from "react";
import { Filter, ArrowUp, ArrowDown } from "@geist-ui/icons";
import { CiUndo } from "react-icons/ci";

const FilterComponent = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-black md:mx-10 gap-14">
        <div className="flex gap-3 items-center">
          <p className="hidden md:flex md:gap-1 md:items-center">
            Filter By <Filter size={16} />
          </p>
          <div className="flex gap-3 ml-2">
            <p className="flex items-center gap-1 border-black border px-1 rounded-md ">
              Price <ArrowDown size={16} />
            </p>
            <p className="flex items-center gap-1 border-black border px-1 rounded-md">
              Price <ArrowUp size={16} />
            </p>
            <p className="flex items-center gap-1 border-black border px-1 rounded-md">
              Popularity
            </p>
          </div>
          <p className="text-sm flex items-center  md:hidden">
            <CiUndo size={16} />
            Reset
          </p>
        </div>
        <p className="hidden md:flex items-center gap-1 border-black border px-1 rounded-md">
          Reset Filter
        </p>
      </div>
    </>
  );
};

export default FilterComponent;
