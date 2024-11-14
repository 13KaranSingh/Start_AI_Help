import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

interface NavBarProps {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ darkTheme, setDarkTheme }) => {
  // Toggle the theme state and apply the dark class to the body
  const toggleTheme = (): void => {
    setDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      // Add or remove the 'dark' class on the body based on newTheme
      if (newTheme) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      return newTheme;
    });
  };

  // Ensure the dark class is applied when darkTheme changes
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);

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
