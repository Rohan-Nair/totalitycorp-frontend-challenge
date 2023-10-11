import React from "react";
import Search from "@geist-ui/icons/search";

const SearchBar = () => {
  return (
    <>
      <div className="flex w-full justify-center relative items-center">
        <Search className="absolute right-6 md:right-12" />
        <input
          type="text"
          placeholder="Search Totality"
          className="w-full px-3 md:mx-3 py-2 text-lg shadow-2xl bg-accent bg-opacity-10 shadow-accent border border-black rounded-lg placeholder:text-black"
        />
      </div>
    </>
  );
};

export default SearchBar;
