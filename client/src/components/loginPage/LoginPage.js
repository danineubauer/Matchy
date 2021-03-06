import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import "./LoginPage.css";
import { SignupForm } from "./SignupForm";

const FORMS = {
  LOGIN: "login",
  SIGNUP: "signup",
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
          <div className="login-headers">
            <h2
              className="login-header"
              onClick={() => toggleDisplayForm(FORMS.LOGIN)}
            >
              Log in
            </h2>
            <h2> / </h2>
            <h2
              className="signup-header"
              onClick={() => toggleDisplayForm(FORMS.SIGNUP)}
            >
              Sign up
            </h2>
          </div>

          {displayForm === FORMS.LOGIN && <LoginForm />}
          {displayForm === FORMS.SIGNUP && <SignupForm />}

          <p>Forgot username / password?</p>
        </div>
      </div>
    </div>
  );
};
