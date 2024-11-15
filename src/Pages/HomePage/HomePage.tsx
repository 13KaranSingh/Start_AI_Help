import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="vertical-split">
      {/* Left Section (Hero) */}
      <div className="split-left">
        <header className="hero">
          <h1 className="logo">PathFinderPro</h1>
          <p className="tagline">Discover Your Ideal Career Path!</p>
        </header>
      </div>

      {/* Right Section (Cards) */}
      <div className="split-right">
        <section className="cards-section">
          <div className="card">
            <h2>Detailed Questions</h2>
            <p>
              Dive deeper into your preferences, skills, and experiences to
              receive tailored career advice and insights.
            </p>
            <Link to="/DetailedQuestions" className="card-button">
              Go to Detailed Questions
            </Link>
          </div>

          <div className="card">
            <h2>Basic Questions</h2>
            <p>
              Answer quick and simple questions to receive general career
              suggestions based on your preferences.
            </p>
            <Link to="/BasicQuestions" className="card-button">
              Go to Basic Questions
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
