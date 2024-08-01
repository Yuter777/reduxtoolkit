import React from "react";
import { useDispatch } from "react-redux";
import { setFilterStatus } from "../redux/todosSlice";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      dispatch(setFilterStatus(newFilter));
    }
  };

  return (
    <ToggleButtonGroup
      value={null}
      exclusive
      onChange={handleFilterChange}
      aria-label="todo filter"
      fullWidth
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="completed">Completed</ToggleButton>
      <ToggleButton value="incomplete">Incomplete</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filter;
