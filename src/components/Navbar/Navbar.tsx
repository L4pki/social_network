import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <ul className="navbar-navigate">
        <li>
          <NavLink
            to="/main"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Вход
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
