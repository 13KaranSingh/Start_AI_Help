import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="container">
      <header className="header">
        <h1 className="logo">Logo</h1>
      </header>
      <ul>
        <li>
          <Link to="/AboutMe">About</Link> {/* Link to AboutMe page */}
        </li>
        <li>
          <a href="#dashboard">Dashboard</a>
        </li>
        <li>
          <Link to="BasicQuestions">Basic Questions</Link>
        </li>
        <li>
          <Link to="DetailedQuestions">Detailed Questions</Link>
        </li>
      </ul>
      <section id="about" className="section">
        <h2>About</h2>
        <p>This section provides information about our website.</p>
      </section>
      <section id="dashboard" className="section">
        <h2>Dashboard</h2>
        <p>This section contains dashboard information.</p>
      </section>
      <section id="basic-questions" className="section">
        <h2>Basic Questions</h2>
        <p>This section lists basic questions.</p>
      </section>
      <section id="detailed-questions" className="section">
        <h2>Detailed Questions</h2>
        <p>This section lists detailed questions.</p>
      </section>
    </main>
  );
};

export default HomePage;
