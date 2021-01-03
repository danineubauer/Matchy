import React from "react";
import "../shared/Theme.css";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div>
      <div className="homepage-main-container">
        <h1 className="homepage-header">- Matchy -</h1>
        <button className="homepage-main-button">Find your match now!</button>
      </div>
      <p className="homepage-hearts">💛💛</p>
    </div>
  );
};
