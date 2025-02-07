import React, { useState } from "react";
import { UserAuthProps } from "../../../types/User";
import "./RegistrationForm.scss";
import loginIcon from "../../../assets/images/login-icon-white.png";

const RegistrationForm: React.FC = () => {
  const [user, setUser] = useState<UserAuthProps>({
    email: "",
    password: "",
  });

  return (
    <div className="registration-form-container">
      <div className="registration-form-content">
        <div className="registration-form-title-block">
          <p className="registration-form-title-text">DyDaI LoX</p>
          <p className="registration-form-title-text-description">
            Created by VT
          </p>
        </div>
        <div className="registration-form-block">
          <div className="registration-form-input-block">
            <input
              className="registration-form-input-block-element"
              type="text"
              placeholder="email"
            />
            <input
              className="registration-form-input-block-element"
              type="text"
              placeholder="password"
            />
            <input
              className="registration-form-input-block-element"
              type="text"
              placeholder="login"
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

export default RegistrationForm;
