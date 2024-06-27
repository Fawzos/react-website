import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "../StyledComponents/Search";
import { StyledInputBase } from "../StyledComponents/StyledInputBase";
import { SearchIconWrapper } from "../StyledComponents/SearchIconWrapper";

const SearchBar = () => (
  <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search"
      inputProps={{ "aria-label": "Search" }}
    />
  </Search>
);

export default SearchBar;
