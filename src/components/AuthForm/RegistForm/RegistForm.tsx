import React, { useState } from "react";
import { UserAuthProps } from "../../../types/User"
import logo from "../../../assets/img/logo.png"
import "./RegistForm.scss"

const RegistForm: React.FC = () => {

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

export default RegistForm;