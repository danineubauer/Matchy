import React from "react";
import "./ProfilePage.css";

export const ProfilePage = () => {
  return (
    <div>
      <div className="profilepage-main-container">
        <div className="profilepage-popup-container">
          <h2 className="profilepage-headers profilepage-header">
            Profile Page
          </h2>

          {/* <h2 className="login-headers signup-header">Sign up</h2> */}
          <button className="profilepage-button">Log in</button>
          <button className="profilepage-button profilepage-button">
            Profile Page
          </button>
          <h4>Forgot username / password?</h4>
        </div>
      </div>
    </div>
  );
};
