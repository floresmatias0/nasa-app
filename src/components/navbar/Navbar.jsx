import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <NavLink to="/favorites">Favorites</NavLink>
    </div>
  );
};

export default Navbar;