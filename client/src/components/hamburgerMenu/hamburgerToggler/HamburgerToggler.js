import React from "react";
import "./HamburgerToggler.css";

export const HamburgerToggler = () => {
  return (
    <button className="btn-hamburger">
      <div className="menu-wrap">
        <input className="hamburger-toggler" type="checkbox"></input>
        <div className="hamburger">
          <div></div>
        </div>
      </div>
    </button>
  );
};
