import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HamburgerMenu.css";

export const HamburgerMenu = () => {
  const location = useLocation();
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => { 
    setChecked(false);
  }, [location]);

  return (
    <button className="btn-hamburger" onClick={() => setChecked(!checked)}>
      <div className="menu-wrap">
        <input className="hamburger-toggler" type="checkbox" checked={checked}></input>
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
