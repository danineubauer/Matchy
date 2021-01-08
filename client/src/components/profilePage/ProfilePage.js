// import React from "react";
import React, { useState } from "react";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const [value, setValue] = useState();

  let fileSelectedHandler = (event) => {
    setValue(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <div className="profilepage-main-container">
        <div className="profilepage-popup-container">
          <h2 className="profilepage-header">Hi [name]! Welcome to Matchy!</h2>
          <p>please edit your profile to start finding your match!</p>

          <img className="profile-photo-container" src={value} />
          <input
            type="file"
            id="select-photo"
            accept="image/*"
            name="select-photo"
            onChange={fileSelectedHandler}
            hidden
          />
          <label className="btn-select-photo" for="select-photo" role="button">
            select photo
          </label>
          <p>I am:</p>
          <div className="gender-container">
            <input type="checkbox" id="male" name="male" />
            <label for="male">Male</label>
            <input type="checkbox" id="female" name="female" />
            <label for="female">Female</label>
            <input type="checkbox" id="other" name="other" />
            <label for="other">other</label>
          </div>
          <p>Looking to meet:</p>
          <div className="gender-container">
            <input type="checkbox" id="male" name="male" />
            <label for="male">Male</label>
            <input type="checkbox" id="female" name="female" />
            <label for="female">Female</label>
            <input type="checkbox" id="other" name="other" />
            <label for="other">other</label>
          </div>
          <div className="birthday">
            <label for="birthdate">My birthday is on:</label>
            <input type="date"></input>
          </div>
          <div className="favorite-color">
            <input label="favorite color" type="color"></input>
          </div>
          <div>
            <label for="hobbies">What's your favorite hobby?</label>
            <input type="text" id="hobbies"></input>
          </div>
          <div>
            <label for="hobbies">What's your favorite food?</label>
            <input type="text" id="hobbies"></input>
          </div>
          <button className="profilepage-button">Finalize profile</button>
        </div>
      </div>
    </div>
  );
};
