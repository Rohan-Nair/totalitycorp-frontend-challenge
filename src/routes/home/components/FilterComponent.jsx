import React, { useContext } from "react";
import { Filter, ArrowUp, ArrowDown } from "@geist-ui/icons";
import { CiUndo } from "react-icons/ci";
import { AppContext } from "../../../context/AppContextProvider";

const FilterComponent = () => {
  const { getAllProds, allProds, setAllProds } = useContext(AppContext);

  const priceHigherFirst = () => {
    const sortedProds = [...allProds].sort((a, b) => b.price - a.price);
    setAllProds(sortedProds);
  };

  const priceLowerFirst = () => {
    const sortedProds = [...allProds].sort((a, b) => a.price - b.price);
    setAllProds(sortedProds);
  };

  const popularFirst = () => {
    const sortedProds = [...allProds].sort((a, b) => b.rating - a.rating);
    setAllProds(sortedProds);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-black md:mx-10 gap-14">
        <div className="flex gap-3 items-center">
          <p className="hidden md:flex md:gap-1 md:items-center">
            Filters <Filter size={16} />
          </p>
          <div className="flex gap-3 ml-2">
            <p
              onClick={priceHigherFirst}
              className="flex items-center gap-1 border-black border px-1 rounded-md cursor-pointer "
            >
              Price <ArrowDown size={16} />
            </p>
            <p
              onClick={priceLowerFirst}
              className="flex items-center gap-1 border-black border px-1 rounded-md cursor-pointer"
            >
              Price <ArrowUp size={16} />
            </p>
            <p
              onClick={popularFirst}
              className="flex items-center gap-1 border-black border px-1 rounded-md cursor-pointer"
            >
              Popularity
            </p>
          </div>
          <p
            onClick={popularFirst}
            className="text-sm flex items-center  md:hidden"
          >
            <CiUndo size={16} />
            Reset
          </p>
        </div>
        <p
          onClick={popularFirst}
          className="hidden md:flex items-center gap-1 border-black border px-1 rounded-md"
        >
          Reset Filters
        </p>
      </div>
    </>
  );
};

export default FilterComponent;
