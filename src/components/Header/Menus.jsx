import React from "react";
import { NavLink } from "react-router-dom";

const Menus = () => {
  return (
    <ul className="nav-menu">
      <div className="Left">
        <li>
          <NavLink className="navbar-item" exact to="/">
            <img src="/img/logo.svg" />
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item" exact to="/">
            Collection
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item" exact to="/">
            Contact
          </NavLink>
        </li>
      </div>
      <div className="Right">
        <li>
          <NavLink className="navbar-item width flex " exact to="/cart">
            <img src="/img/cart.svg" />
            <p className="Cart-Tag">Cart</p>
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default Menus;
