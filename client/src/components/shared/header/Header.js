import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { LoginPage } from "../../loginPage/LoginPage";
// import { HomePage } from "../../homePage/HomePage";
// import { ProfilePage } from "../../profilePage/ProfilePage";
// import { SearchPage } from "../../searchPage/SearchPage";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="profile-image">💛💛</div>
      <div className="buttons">
        <button className="header-buttons search-matches-button">
          Search matches
        </button>
        <button className="header-buttons profile-page-button">
          Profile page
        </button>
        <button className="header-buttons login-button">Log in</button>
      </div>
    </header>
  );
};
