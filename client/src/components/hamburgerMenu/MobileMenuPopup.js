import React from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const MobileMenuPopup = (props) => {
  return (
    <div className="mobile-menu-wrap">
      <Link to="/loginPage" className="hamburger-links" onClick={props.click}>
        Log in
      </Link>
      <Link to="/profilePage" className="hamburger-links" onClick={props.click}>
        Profile page
      </Link>
      <Link to="/searchpage" className="hamburger-links" onClick={props.click}>
        Search matches
      </Link>
    </div>
  );
};

export default MobileMenuPopup;
