import React, { useState } from "react";
import { UserAuthProps } from "../../../types/User";
import "./ValidateForm.scss";
import loginIcon from "../../../assets/images/login-icon-white.png";

const ValidateForm: React.FC = () => {
  const [user, setUser] = useState<UserAuthProps>({
    email: "",
    password: "",
  });

  return (
    <div className="validate-form-container">
      <div className="validate-form-content">
        <div className="validate-form-title-block">
          <p className="validate-form-title-text">DyDaI LoX</p>
          <p className="validate-form-title-text-description">Created by VT</p>
        </div>
        <div className="validate-form-input-description-block">
          <div className="validate-form-description-block">
            <p className="validate-form-description-text">
              На почту было выслано письмо
            </p>
            <p className="validate-form-description-text">
              с кодом активации аккаунта
            </p>
          </div>
          <div className="validate-form-block">
            <div className="validate-form-input-block">
              <input
                className="validate-form-input-block-element"
                type="text"
                placeholder="code"
              />
            </div>
            <button className="login-icon-block">
              <img className="login-icon" src={loginIcon} alt="Иконка входа" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidateForm;
