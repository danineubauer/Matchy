import React from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const MobileMenuPopup = (props) => {
  const menuLinks = [
    {
      name: "Log in",
      directory: "/loginPage",
    },
    {
      name: "Profile page",
      directory: "/profilePage",
    },
    {
      name: "Search matches",
      directory: "/searchpage",
    },
  ];

  return (
    <div className="mobile-menu-wrap">
      {menuLinks.map((menuLink) => {
        return (
          <Link
            to={menuLink.directory}
            className="hamburger-links"
            onClick={props.click}
          >
            {menuLink.name}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileMenuPopup;
