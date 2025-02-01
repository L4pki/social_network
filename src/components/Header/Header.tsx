import React from "react";
import "./Header.scss";
import logo from "../../assets/img/logo.png";
import Navbar from "../Navbar/Navbar.tsx";

const Header: React.FunctionComponent = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-title-block">
          <img className="header-title-logo" src={logo} alt="логотип" />
          <p className="header-title-text">DyDaI LoX</p>
        </div>
        <div className="header-navbar-block">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
