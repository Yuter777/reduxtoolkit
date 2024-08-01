import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/todosSlice";
import { TextField } from "@mui/material";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <TextField
      label="Search Todos"
      variant="outlined"
      onChange={handleSearchChange}
      fullWidth
      margin="normal"
    />
  );
};

export default SearchBar;
