import React from "react";
import { Link } from "react-router-dom";
import { HamburgerToggler } from "./hamburgerToggler/HamburgerToggler";
import "./hamburgerMenu.css";
import "./hamburgerToggler/HamburgerToggler.css";

export const HamburgerMenu = () => {
  return (
    <div className="hamburger-menu">
      <HamburgerToggler />
      <div className="menu-popup">
        <Link to="/searchpage" className="hamburger-links">
          Search matches
        </Link>
        <Link to="/profilePage" className="hamburger-links">
          Profile page
        </Link>
        <Link to="/loginPage" className="hamburger-links">
          Log in
        </Link>
      </div>
    </div>
  );
};
