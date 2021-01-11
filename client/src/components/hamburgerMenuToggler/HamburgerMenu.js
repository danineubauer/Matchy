import React from "react";
import { Link } from "react-router-dom";
import "./HamburgerToggler.css";

export const HamburgerToggler = () => {
  return (
    <button className="btn-hamburger">
      <div className="menu-wrap">
        <input className="hamburger-toggler" type="checkbox"></input>
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu-popup">
          <Link to="/loginPage" className="hamburger-links">
            Log in
          </Link>
          <Link to="/profilePage" className="hamburger-links">
            Profile page
          </Link>
          <Link to="/searchpage" className="hamburger-links">
            Search matches
          </Link>
        </div>
      </div>
    </button>
  );
};
