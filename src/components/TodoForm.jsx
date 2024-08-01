import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";
import { TextField, Button } from "@mui/material";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text, completed: false }));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Todo"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;
