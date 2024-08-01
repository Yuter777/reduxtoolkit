import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../redux/todosSlice";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const { items, searchQuery, filterStatus } = useSelector(
    (state) => state.todos
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const filteredItems = items.filter((todo) => {
    const matchesSearchQuery = todo.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilterStatus =
      filterStatus === "all" ||
      (filterStatus === "completed" && todo.completed) ||
      (filterStatus === "incomplete" && !todo.completed);

    return matchesSearchQuery && matchesFilterStatus;
  });

  return (
    <List>
      {filteredItems.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
