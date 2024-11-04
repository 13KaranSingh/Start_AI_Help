import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

interface NavBarProps {
  darkTheme: boolean;
  setDarkTheme: (theme: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkTheme, setDarkTheme }) => {
  const toggleTheme = (): void => {
    setDarkTheme(!darkTheme);
  };
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/DetailedQuestions">Detailed Questions</Link>
        </li>
        <li className="navbar-item">
          <Link to="/BasicQuestions">Basic Questions</Link>
        </li>
        <li className="navbar-item">
          <Link to="/AboutMe">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Results">Results</Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle">
        {darkTheme ? "🌞 Light Mode" : "🌜 Dark Mode"}
      </button>
    </nav>
  );
};

export default NavBar;
