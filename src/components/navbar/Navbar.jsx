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
          <NavLink to="/favorites" activeStyle={{ color: "#FC3D21", fontWeight: "600" }}>
            Favorites
          </NavLink>
        </span>
        <li></li>
        <span>
          <NavLink to="/about" activeStyle={{ color: "#FC3D21", fontWeight: "600" }}>
            About
          </NavLink>
        </span>
      </div>

    </div>
  );
};

export default Navbar;
