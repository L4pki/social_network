import React, { useState } from "react";
import "./AuthPage.scss";
import RegistrationForm from "../../components/AuthForm/RegistrationForm/RegistrationForm";

const AuthPage: React.FunctionComponent = () => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(false);

  return (
    <div className="auth-page">
      <div className="auth-page-container">
        {isLoginMode === false && (
          <>
            <RegistrationForm />
            <p className="goto-login" onClick={()=> setIsLoginMode(true)}>Уже есть аккаунт?</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
