import React from "react";
import useToggle from "../../hooks/useToggle";
import MobileMenuPopup from "./MobileMenuPopup";
import "./HamburgerMenu.css";

export const HamburgerMenu = () => {
  const [hamburgerMenuToggle, setHamburgerMenuToggle] = useToggle(false);

  const changeHamburgerMenuToggle = () => {
    setHamburgerMenuToggle(!hamburgerMenuToggle);
  };

  return (
    <div>
      <button className="btn-hamburger" onClick={changeHamburgerMenuToggle}>
        {hamburgerMenuToggle ? (
          <div className="ham-cross">✕</div>
        ) : (
          <div className="menu-wrap">
            <div className="ham-line">🍔</div>
          </div>
        )}
      </button>

      {hamburgerMenuToggle ? (
        <MobileMenuPopup click={() => changeHamburgerMenuToggle()} />
      ) : null}
    </div>
  );
};
