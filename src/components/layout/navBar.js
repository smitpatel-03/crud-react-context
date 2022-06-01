import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/add">
        <button>Add</button>
      </Link>
      <Outlet />
    </div>
  );
};

export default NavBar;
