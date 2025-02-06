import React, { useState } from "react";
import { UserAuthProps } from "../../../types/User"
import logo from '../../../assets/images/logo.png'
import "./RegistrationForm.scss"

const RegistrationForm: React.FC = () => {
    const [user, setUser] = useState<UserAuthProps>({
        email: "",
        password: ""
    });

    return (
      <div className="registration-form-container">
        <div className="registration-form-title-block">
          <img className="registration-form-title-logo" src={logo} alt="логотип" />
          <p className="registration-form-title-text">DyDaI LoX</p>
        </div>
      </div>
    );
};

export default RegistrationForm;
