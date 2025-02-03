import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import Navbar from "../Navbar/Navbar";

const Header: React.FunctionComponent = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-title-block">
          <img className="header-title-logo" src={logo} alt="Логотип" />
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
