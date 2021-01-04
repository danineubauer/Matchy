import React from "react";
import "./SearchPage.css";

export const SearchPage = () => {
  return (
    <div>
      <div className="searchpage-main-container">
        <div className="searchpage-popup-container">
          <h2 className="searchpage-header">Search people</h2>
          <div className="searchpage-content-container">
            <div className=".searchpage-photo-container">
              <h2>Jenifer</h2>
              <img src="../../assets/background.jpg"></img>
            </div>

            <div className="searchpage-information-container">
              <p>age:</p>
              <p>location:</p>
              <p>looking to meet:</p>
              <p>hobbies:</p>
            </div>
          </div>
          <div className="nav-buttons-container">
            <button className="nav-button">✅</button>
            <button className="nav-button">❌</button>
          </div>
        </div>
      </div>
    </div>
  );
};
