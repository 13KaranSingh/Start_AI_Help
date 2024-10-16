import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="container">
      {/* Hero Section */}
      <header className="hero">
        <h1 className="logo">The Career Helper AI</h1>
        <p className="tagline">Discover Your Ideal Career Path!</p>
        <Link to="/BasicQuestions" className="cta-button">
          Start Your Quiz
        </Link>
      </header>

      {/* Introduction Section */}
      <section className="introduction">
        <h2>What is The Career Helper AI?</h2>
        <p>
          Our quiz analyzes your skills, preferences, and interests to suggest the best career paths for you. Whether you're a student, a professional seeking a career change, or just curious, we can help you find your perfect fit.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1</h3>
            <p>Answer a few simple questions about your preferences and skills.</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <p>Our AI analyzes your responses to match you with suitable careers.</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <p>Get a personalized report with career suggestions and resources.</p>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <nav className="home-nav">
        <ul>
          <li>
            <Link to="/AboutMe">About Us</Link>
          </li>
          <li>
            <Link to="/BasicQuestions">Basic Questions</Link>
          </li>
          <li>
            <Link to="/DetailedQuestions">Detailed Questions</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default HomePage;
