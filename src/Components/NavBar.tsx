import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const Navbar: React.FC = () => {
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
        </nav>
    );
};

export default Navbar;
