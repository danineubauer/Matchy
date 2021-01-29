import React from "react";
import { Link, useLocation } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import "./HamburgerMenu.css";
import { MobileMenuPopup } from "./MobileMenuPopup";

export const HamburgerMenu = () => {
  const location = useLocation();
  const [checked, setChecked] = React.useState(false);

  const [hamburgerMenuToggle, setHamburgerMenuToggle] = useToggle(false);

  React.useEffect(() => {
    setChecked(false);
  }, [location]);

  const changeHamburgerMenuToggle = () => {
    setHamburgerMenuToggle(!hamburgerMenuToggle);
  };

  return (
    <div>
      <button
        className="btn-hamburger"
        onClick={() => changeHamburgerMenuToggle()}
      >
        {hamburgerMenuToggle ? (
          <div className="ham-cross">✕</div>
        ) : (
          <div className="menu-wrap">
            <div className="ham-line">🍔</div>
          </div>
        )}
      </button>

      {hamburgerMenuToggle ? (
        <MobileMenuPopup
          changeHamburgerMenuToggle={changeHamburgerMenuToggle}
        />
      ) : null}
    </div>
  );
};
