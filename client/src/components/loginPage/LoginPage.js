import React, { useState } from "react";
import "../shared/Theme.css";
import "./LoginPage.css";

export const LoginPage = () => {
  const [displayLoginPage, setDisplayLoginPage] = useState();
  const [displaySignupPage, setDisplaySignupPage] = useState();

  return (
    <div>
      <div className="login-main-container">
        <div className="login-popup-container">
          <h2
            className="login-headers login-header"
            onClick={() => setDisplayLoginPage(!displayLoginPage)}
          >
            Log in
          </h2>

          <h2
            className="login-headers signup-header"
            onClick={() => setDisplaySignupPage(!displaySignupPage)}
          >
            Sign up
          </h2>

          {displayLoginPage ? (
            <form>
              <label>
                Email:
                <input type="text" name="email" />
              </label>
              <label>
                Password:
                <input className="login-button" type="submit" value="submit" />
              </label>
            </form>
          ) : (
            <p></p>
          )}

          {displaySignupPage ? (
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Last Name:
                <input type="text" name="last-name" />
              </label>
              <label>
                Email:
                <input type="text" name="email" />
              </label>
              <label>
                Password:
                <input type="text" name="password" />
              </label>
              <label>
                Repeat Password:
                <input type="text" name="repeat-password" />
              </label>
              <input className="login-button" type="submit" value="submit" />
            </form>
          ) : (
            <p></p>
          )}
          <h4>Forgot username / password?</h4>
        </div>
      </div>
    </div>
  );
};
