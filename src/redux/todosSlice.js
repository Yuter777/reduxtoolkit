import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get("http://localhost:3000/todos");
  return response.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const response = await axios.post("http://localhost:3000/todos", todo);
  return response.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(`http://localhost:3000/todos/${id}`);
  return id;
});

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (todo) => {
  const response = await axios.put(`http://localhost:3000/todos/${todo.id}`, {
    ...todo,
    completed: !todo.completed,
  });
  return response.data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.status = "success";
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((todo) => todo.id !== payload);
      })
      .addCase(toggleTodo.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex((todo) => todo.id === payload.id);
        state.items[index] = payload;
      });
  },
});

export default todosSlice.reducer;
