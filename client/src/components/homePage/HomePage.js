import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

export const HomePage = () => {
  return (
    <div>
      <div className="homepage-main-container">
        <h1 className="homepage-header">- Matchy -</h1>
        <Link to="/loginPage">
          <button className="homepage-main-button">Find your match now!</button>
        </Link>
      </div>
      <p className="homepage-hearts">💛💛</p>
    </div>
  );
};
