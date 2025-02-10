import React, { useState } from "react";
import "./AuthPage.scss";
import RegistrationForm from "../../components/AuthForm/RegistrationForm/RegistrationForm";
import LoginForm from "../../components/AuthForm/LoginForm/LoginForm";
import ValidateForm from "../../components/AuthForm/ValidateForm/ValidateForm";

const AuthPage: React.FunctionComponent = () => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(false);

  return (
    <div className="auth-page">
      <div className="auth-page-container">
        {isLoginMode === false && (
          <>
            <RegistrationForm />
            <div className="auth-page-buttons">
              <p className="goto-login" onClick={() => setIsLoginMode(true)}>
                Уже есть аккаунт?
              </p>
            </div>
          </>
        )}
        {isLoginMode === true && (
          <>
            <LoginForm />
            <div className="auth-page-buttons">
              <p className="goto-login" onClick={() => setIsLoginMode(false)}>
                Зарегаться?
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
