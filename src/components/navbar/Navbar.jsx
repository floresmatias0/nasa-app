import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let logo =
    "https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg";
  return (
    <div className="navbar">
      <div>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div>
        <span>
          <NavLink to="/favorites" activeStyle={{ color: "#0B3D91" }}>
            Favorites
          </NavLink>
        </span>
        <li></li>
        <span>
          <NavLink to="/about" activeStyle={{ color: "#0B3D91" }}>
            About
          </NavLink>
        </span>
      </div>

    </div>
  );
};

export default Navbar;
