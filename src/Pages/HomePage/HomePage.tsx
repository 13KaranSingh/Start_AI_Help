import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is preferred
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial mode based on system preference
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes in the system theme preference
    mediaQuery.addEventListener("change", (e) => {
      setIsDarkMode(e.matches);
    });

    const bubblesContainer = document.querySelector('.bubbles');
    if (bubblesContainer) {  
      // Create a total of 11 bubbles (7 large, 4 medium)
      for (let i = 0; i < 11; i++) {
        const bubble = document.createElement('div');
        // Assign 7 bubbles as 'large' and 4 as 'medium'
        const sizeClass = i < 7 ? 'large' : 'medium'; 
        const positionX = Math.floor(Math.random() * window.innerWidth);
        const positionY = Math.floor(Math.random() * window.innerHeight);
        bubble.classList.add('bubble', sizeClass);
        bubble.style.left = `${positionX}px`;
        bubble.style.top = `${positionY}px`;
        bubblesContainer.appendChild(bubble);
      }
    }
  }, []);

  return (
    <main className={`vertical-split ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Background Bubbles */}
      <div className={`bubbles ${isDarkMode ? "dark-mode" : ""}`}></div>

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
            <Link
              to="/DetailedQuestions"
              className="card-button"
              aria-label="Navigate to Detailed Questions"
            >
              Go to Detailed Questions
            </Link>
          </div>

          <div className="card">
            <h2>Basic Questions</h2>
            <p>
              Answer quick and simple questions to receive general career
              suggestions based on your preferences.
            </p>
            <Link
              to="/BasicQuestions"
              className="card-button"
              aria-label="Navigate to Basic Questions"
            >
              Go to Basic Questions
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
