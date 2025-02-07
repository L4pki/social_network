import React, { useState } from "react";
import { UserAuthProps } from "../../../types/User";
import "./LoginForm.scss";
import loginIcon from "../../../assets/images/login-icon-white.png";

const LoginForm: React.FC = () => {
  const [user, setUser] = useState<UserAuthProps>({
    email: "",
    password: "",
  });

  return (
    <div className="login-form-container">
      <div className="login-form-content">
        <div className="login-form-title-block">
          <p className="login-form-title-text">DyDaI LoX</p>
          <p className="login-form-title-text-description">Created by VT</p>
        </div>
        <div className="login-form-block">
          <div className="login-form-input-block">
            <input
              className="login-form-input-block-element"
              type="text"
              placeholder="email"
            />
            <input
              className="login-form-input-block-element"
              type="text"
              placeholder="password"
            />
          </div>
          <button className="login-icon-block">
            <img className="login-icon" src={loginIcon} alt="Иконка входа" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
