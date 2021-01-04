import React from "react";
import profilePicture from "../../assets/gal_gadot.jpg";
import "./SearchPage.css";

export const SearchPage = () => {
  return (
    <div>
      <div className="searchpage-main-container">
        <div className="searchpage-popup-container">
          <h2 className="searchpage-header">Find your Matchy</h2>
          <div className="searchpage-content-container">
            <div className="searchpage-photo-container">
              <img
                className="searchpage-photo"
                src={profilePicture}
                alt="Profile picture"
                width="200px"
                height="200px"
              />
            </div>

            <div className="searchpage-information-container">
              <h2 className="searchpage-profile-name">Gal Gadot</h2>
              <p>age:</p>
              <p>location:</p>
              <p>interested in:</p>
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
