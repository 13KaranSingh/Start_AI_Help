import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const Navbar: React.FC = () => {
    // Define the theme state as a boolean
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    // Define the toggle function
    const toggleTheme = (): void => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
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
                <li className='navbar-item'>
                    <Link to= "/Results">Results</Link>
                </li>
            </ul>
            <button onClick={toggleTheme} className="theme-toggle">
                {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
            </button>
        </nav>
    );
};

export default Navbar;
