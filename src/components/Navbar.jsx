import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Todo App
        </Typography>
        <Button color="inherit" component={Link} to="/add-todo">
          Add Todo
        </Button>
        <Button color="inherit" component={Link} to="/list-todos">
          List Todos
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
