import React from 'react';
import './Header.css';

export const Header = () => { 
  return (
    <header className="header">
      <div className="profile-image"></div>
      <div className="buttons">
        <button className="login-button">Log in</button>
      </div>
    </header>
  );
};