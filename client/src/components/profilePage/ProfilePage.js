import React from "react";
import "./ProfilePage.css";

export const ProfilePage = () => {
  let fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
  };

  return (
    <div>
      <div className="profilepage-main-container">
        <div className="profilepage-popup-container">
          <h2 className="profilepage-header">Hi [name]! Welcome to Matchy!</h2>
          <p>please edit your profile to start finding your match!</p>

          <div className="profilepage-profilephoto-container">
            <input
              type="file"
              id="select-photo"
              accept="image/*"
              name="select-photo"
              onChange={fileSelectedHandler}
              hidden
            />
            <label
              className="btn-select-photo"
              for="select-photo"
              role="button"
            >
              select photo
            </label>
            <div className="photo-preview-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
