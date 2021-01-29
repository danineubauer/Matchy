import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "./HamburgerMenu.css";

export const MobileMenuPopup = (changeHamburgerMenuToggle) => {
  return (
    <div className="mobile-menu-wrap">
      <Link
        to="/loginPage"
        className="hamburger-links"
        onClick={alert("link clicked")}
      >
        Log in
      </Link>
      <Link to="/profilePage" className="hamburger-links">
        Profile page
      </Link>
      <Link to="/searchpage" className="hamburger-links">
        Search matches
      </Link>
    </div>
  );
};
