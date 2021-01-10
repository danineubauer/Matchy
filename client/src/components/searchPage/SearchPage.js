import React from "react";
import profilePicture from "../../assets/gal_gadot.jpg";
import { callApi } from "../../mock/fakeServer";
import "./SearchPage.css";

export const SearchPage = () => {
  const onClickSearch = async () => { 
    try {
      const result = await callApi();
      alert(result);
    } catch (e) { 
      alert('error!');
    }
  };

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
                alt="Profile"
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
            <button className="nav-button">❌</button>
            <button className="nav-button" onClick={onClickSearch}>✅</button>
          </div>
        </div>
      </div>
    </div>
  );
};
