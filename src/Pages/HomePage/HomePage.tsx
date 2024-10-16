import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="container">
      <header className="header">
        <h1 className="logo">Logo</h1>
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#basic-questions">Basic Questions</a>
          </li>
          <li>
            <a href="#detailed-questions">Detailed Questions</a>
          </li>
        </ul>
      </nav>
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
