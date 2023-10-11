import React from "react";
import SearchBar from "./SearchBar";
import FilterComponent from "./FilterComponent";
import Products from "./Products";

const HomeDisplay = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="px-5 pt-2 rounded-lg drop-shadow-xl mt-3 md:mx-10 w-full lg:max-w-7xl">
        <SearchBar />
        <FilterComponent />
        <Products />
      </div>
    </div>
  );
};

export default HomeDisplay;
