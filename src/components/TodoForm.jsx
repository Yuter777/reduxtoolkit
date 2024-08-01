import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({ text, completed: false }));
      setText("");
      navigate("/list-todos"); // Redirect to ListTodos after adding
    }
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
