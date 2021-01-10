import React from "react";
import { SelectPhoto } from "./SelectPhoto.js";
import "./ProfilePage.css";

export const ProfilePage = () => {
  return (
    <div>
      <div className="profilepage-main-container">
        <div className="profilepage-popup-container">
          <h2 className="profilepage-header">Hi [name]! Welcome to Matchy!</h2>
          <p>please edit your profile to start finding your match!</p>
          <SelectPhoto />
          <div>
            <label for="city"></label>
            <input type="text" id="city" placeholder="City"></input>
          </div>
          <div>
            <label for="hobbies"></label>
            <input
              type="text"
              id="hobbies"
              placeholder="Favorite hobby"
            ></input>
          </div>
          <div>
            <label for="hobbies"></label>
            <input type="text" id="hobbies" placeholder="favorite food"></input>
          </div>
          <label>I am:</label>
          <div className="gender-container">
            <input type="checkbox" id="male" name="male" />
            <label for="male">Male</label>
            <input type="checkbox" id="female" name="female" />
            <label for="female">Female</label>
            <input type="checkbox" id="other" name="other" />
            <label for="other">other</label>
          </div>
          <label>Looking to meet:</label>
          <div className="gender-container">
            <input type="checkbox" id="male" name="male" />
            <label for="male">Male</label>
            <input type="checkbox" id="female" name="female" />
            <label for="female">Female</label>
            <input type="checkbox" id="other" name="other" />
            <label for="other">other</label>
          </div>
          <div className="birthday">
            <label for="birthdate">Bday:</label>
            <input type="date"></input>
          </div>

          <button className="profilepage-button">Finalize profile</button>
        </div>
      </div>
    </div>
  );
};
