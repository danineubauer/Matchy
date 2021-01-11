import React from "react";
import { Link } from "react-router-dom";
import { HamburgerToggler } from "./hamburgerToggler/HamburgerToggler";
import "./hamburgerMenu.css";

export const HamburgerMenu = () => {
  return (
    <div className="hamburger-menu">
      <button className="btn-hamburger">
        <HamburgerToggler />
      </button>
      <div>
        <Link to="searchPage" className="hamburger-links">
          Search matches
        </Link>
        <Link to="profilePage" className="hamburger-links">
          Profile page
        </Link>
        <Link to="loginPage" className="hamburger-links">
          Log in
        </Link>
      </div>
    </div>
  );
};
