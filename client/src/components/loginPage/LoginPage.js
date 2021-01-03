import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import "./LoginPage.css";
import { SignupForm } from "./SignupForm";

const FORMS = {
  LOGIN: 'login',
  SIGNUP: 'signup',
};

export const LoginPage = () => {
  const [displayForm, setDisplayForm] = useState(FORMS.LOGIN);

  const toggleDisplayForm = (newState) => { 
    setDisplayForm(newState);
  };

  return (
    <div>
      <div className="login-main-container">
        <div className="login-popup-container">
          <h2
            className="login-headers login-header"
            onClick={() => toggleDisplayForm(FORMS.LOGIN)}
          >
            Log in
          </h2>

          <h2
            className="login-headers signup-header"
            onClick={() => toggleDisplayForm(FORMS.SIGNUP)}
          >
            Sign up
          </h2>

          {displayForm === FORMS.LOGIN && <LoginForm />}
          {displayForm === FORMS.SIGNUP && <SignupForm />}

          <h4>Forgot username / password?</h4>
        </div>
      </div>
    </div>
  );
};
