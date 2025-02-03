import React from "react";
import "./AuthPage.scss";
import RegistrationForm from "../../components/AuthForm/RegistrationForm/RegistrationForm";

const AuthPage: React.FunctionComponent = () => {
  return (
    <div className="auth-page">
      <div className="auth-page-container">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default AuthPage;
