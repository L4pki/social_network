import React from "react";
import "./AuthPage.scss";
import RegistForm from "../../components/AuthForm/RegistForm/RegistForm";

const AuthPage: React.FunctionComponent = () => {
  return (
    <div className="auth-page">
      <div className="auth-page-container">
        <RegistForm />
      </div>
    </div>
  );
};

export default AuthPage;
