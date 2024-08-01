import React from "react";
import TodoList from "../components/TodoList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const ListTodos = () => {
  return (
    <div>
      <h2>List of Todos</h2>
      <SearchBar />
      <Filter />
      <TodoList />
    </div>
  );
};

export default ListTodos;
