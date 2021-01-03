import React from "react";
import "./SearchPage.css";

export const SearchPage = () => {
  return (
    <div>
      <div className="login-main-container">
        <div className="login-popup-container">
          <h2 className="login-headers login-header">Log in / Sign up</h2>
          {/* <h2 className="login-headers signup-header">Sign up</h2> */}
          <input></input>
          <button className="login-button">Log in</button>
          <button className="login-button signup-button">Sign up</button>
          <h4>Forgot username / password?</h4>
        </div>
      </div>
    </div>
  );
};
