import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../redux/todosSlice";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
