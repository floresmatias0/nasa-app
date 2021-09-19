import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <NavLink to="/favorites">Home</NavLink>
      <NavLink to="/">Favorites</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Navbar;