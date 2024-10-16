import React from "react";
import 

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>
          <a href="#logo">Logo</a>
        </h1>
        <h1>
          <a href="#about">About</a>
        </h1>
        <h1>
          <a href="#dashboard">Dashboard</a>
        </h1>
        <h1>
          <a href="#basic-questions">Basic Questions</a>
        </h1>
        <h1>
          <a href="#detailed-questions">Detailed Questions</a>
        </h1>
      </div>

      {/* Sections to scroll to */}
      <div id="logo">
        <h2>Logo Section</h2>
        <p>This is where your logo content would go.</p>
      </div>
      <div id="about">
        <h2>About Section</h2>
        <p>Information about the website goes here.</p>
      </div>
      <div id="dashboard">
        <h2>Dashboard Section</h2>
        <p>Dashboard content goes here.</p>
      </div>
      <div id="basic-questions">
        <h2>Basic Questions Section</h2>
        <p>Details about basic questions go here.</p>
      </div>
      <div id="detailed-questions">
        <h2>Detailed Questions Section</h2>
        <p>Details about detailed questions go here.</p>
      </div>
    </div>
  );
};

export default HomePage;
