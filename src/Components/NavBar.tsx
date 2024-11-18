import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

interface NavBarProps {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ darkTheme, setDarkTheme }) => {
  const toggleTheme = (): void => {
    setDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      if (newTheme) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      return newTheme;
    });
  };

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <section className="navbar-section">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item left-side">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item left-side">
            <Link to="/DetailedQuestions">Detailed Questions</Link>
          </li>
          <li className="navbar-item left-side">
            <Link to="/BasicQuestions">Basic Questions</Link>
          </li>
          <li className="navbar-item right-side">
            <Link to="/AboutMe">About Us</Link>
          </li>
          <li className="navbar-item right-side">
            <Link to="/Results">Results</Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle">
        {darkTheme ? "🌞 Light Mode" : "🌜 Dark Mode"}
      </button>
    </section>
  );
};

export default NavBar;
