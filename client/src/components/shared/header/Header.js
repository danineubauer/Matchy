import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="profile-image">💛💛</div>
      <div className="buttons">
        <button className="login-button">Log in</button>
        <button className="profile-page-button">Profile page</button>
        <button className="search-matches-button">Search matches</button>
      </div>
    </header>
  );
};
