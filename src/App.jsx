import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import AddTodo from "./pages/AddTodo";
import ListTodos from "./pages/ListTodos";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/add-todo" component={AddTodo} element={<AddTodo />} />
          <Route
            path="/list-todos"
            component={ListTodos}
            element={<ListTodos />}
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
