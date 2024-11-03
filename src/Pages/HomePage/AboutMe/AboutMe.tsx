import "./AboutMe.css";
import React from "react";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="founder-box">
        <h2>Founders</h2>
        <div className="founder-square">
          <strong>Karan Singh</strong>
        </div>
        <div className="founder-square">
          <strong>Suchi Patel</strong>
        </div>
        <div className="founder-square">
          <strong>Alyssa Sanchez</strong>
        </div>
        <div className="founder-square">
          <strong>Jasmyn Navarro</strong>
        </div>
      </div>
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          This quiz was created to help users pick their career field. Add more
          info Later
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
