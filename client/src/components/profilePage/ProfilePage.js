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
            <p>click to upload photo</p>
            <input
              type="file"
              className="profilepage-fileselecthandler"
              onChange={fileSelectedHandler}
            ></input>
          </div>

          {/* <h2 className="login-headers signup-header">Sign up</h2> */}
          {/* <button className="profilepage-button">Log in</button>
          <button className="profilepage-button profilepage-button">
            Profile Page
          </button>
          <h4>Forgot username / password?</h4> */}
        </div>
      </div>
    </div>
  );
};
