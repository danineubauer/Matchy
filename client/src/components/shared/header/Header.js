import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { LoginPage } from "../../loginPage/LoginPage";
// import { HomePage } from "../../homePage/HomePage";
// import { ProfilePage } from "../../profilePage/ProfilePage";
// import { SearchPage } from "../../searchPage/SearchPage";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="profile-image">💛💛</div>
      </Link>
      <div className="buttons">
        <Link to="searchPage" className="header-buttons search-matches-button">
          Search matches
        </Link>
        <Link to="profilePage" className="header-buttons profile-page-button">
          Profile page
        </Link>
        <Link to="loginPage" className="header-buttons login-button">Log in</Link>
      </div>
    </header>
  );
};
