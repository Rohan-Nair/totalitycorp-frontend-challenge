import React, { useContext, useState } from "react";
import Search from "@geist-ui/icons/search";
import { AppContext } from "../../../context/AppContextProvider";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { setSearch } = useContext(AppContext);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(searchText);
        }}
        className="flex w-full justify-center relative items-center"
      >
        <Search
          onClick={() => setSearch(searchText)}
          className="absolute right-6 md:right-12"
        />
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search Totality"
          className="w-full px-3 md:mx-3 py-2 text-lg shadow-2xl bg-accent bg-opacity-10 shadow-accent border border-black rounded-lg placeholder:text-black"
        />
      </form>
    </>
  );
};

export default SearchBar;
