import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="logo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <NavLink className="item" exact to="/">
            View Properties
          </NavLink>
        </li>
        <li className="navbar-links-item">
          <NavLink className="item" to="/add-property">
            Add a Property
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
