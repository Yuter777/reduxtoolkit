import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todosSlice";
import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={handleToggle} />
      <ListItemText primary={todo.text} />
      <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
