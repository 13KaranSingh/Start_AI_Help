import "./AboutMe.css";
import React from "react";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="bubbles">
        {/* Bubbles will be added here by the CSS */}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div className="founder-box">
        <h2>Founders</h2>
        <div className="founder-square karan">
          <strong>Karan Singh</strong>{" "}
          <span className="designation">Team Manager</span>
          <div>
            <a
              href="https://www.linkedin.com/in/karanvir-singh-453616257/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              LinkedIn
            </a>
            <span className="separator">|</span>
            <a href="mailto:kasingh@udel.edu" className="email-link">
              Email
            </a>
            <span className="separator">|</span>
            <a
              href="https://github.com/13KaranSingh"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="founder-square suchi">
          <strong>Suchi Patel</strong>{" "}
          <span className="designation">Team Member</span>
          <div>
            <a
              href="https://www.linkedin.com/in/suchi-patel-/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              LinkedIn
            </a>
            <span className="separator">|</span>
            <a href="mailto:svp@udel.edu" className="email-link">
              Email
            </a>
            <span className="separator">|</span>
            <a
              href="https://github.com/suchipatel13"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="founder-square alyssa">
          <strong>Alyssa Sanchez</strong>{" "}
          <span className="designation">Team Member</span>
          <div>
            <a
              href="https://www.linkedin.com/in/alyssasanchez20/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              LinkedIn
            </a>
            <span className="separator">|</span>
            <a href="mailto:lyssas@udel.edu" className="email-link">
              Email
            </a>
            <span className="separator">|</span>
            <a
              href="https://github.com/alyssasanchez1"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="founder-square jasmyn">
          <strong>Jasmyn Navarro</strong>{" "}
          <span className="designation">Team Member</span>
          <div>
            <a
              href="https://www.linkedin.com/in/jasmyn-navarro/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              LinkedIn
            </a>
            <span className="separator">|</span>
            <a href="mailto:jasnav@udel.edu" className="email-link">
              Email
            </a>
            <span className="separator">|</span>
            <a
              href="https://github.com/JayNavarro"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          <strong>PathFinderPro</strong>
        </p>
        <p>
          At PathFinderPro, we’re dedicated to helping individuals discover
          their best career paths through a blend of AI-driven insights and
          personalized quizzes. Our mission is to guide users of all
          backgrounds—whether new to the workforce, seeking growth, or exploring
          a career change—by offering tailored career matches and actionable
          advice. With PathFinderPro, you’re not just taking a quiz; you’re
          stepping into a journey of professional self-discovery and future
          planning, designed to align your strengths, interests, and goals with
          a fulfilling career path.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
