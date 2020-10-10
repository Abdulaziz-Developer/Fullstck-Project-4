import React from "react";
import { NavLink } from "react-router-dom";

const FMenus = () => {
  return (
    <ul className="fnav-menu">
      <div className="First">
        <li>
          <NavLink exact to="/" className="navbar-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" className="navbar-item">
            Customer Care
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" className="navbar-item">
            Instgram
          </NavLink>
        </li>
      </div>
      <div className="Last">
        <li>© Pretend Store</li>
      </div>
    </ul>
  );
};
export default FMenus;
