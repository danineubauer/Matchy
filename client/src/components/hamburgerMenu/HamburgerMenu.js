import React from 'react';
import { Link } from 'react-router-dom';

export const HamburgerMenu = () => { 
  return (
    <div className="hamburger-menu">
      <button>[=]</button>
      <div>
        <Link to="searchPage">
          Search matches
        </Link>
        <Link to="profilePage">
          Profile page
        </Link>
        <Link to="loginPage">
            Log in
        </Link>
      </div>
    </div>
  );
};
