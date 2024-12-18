import React, { useState, useEffect } from "react";
import "./DetailedQuestion.css";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import Confetti from "react-confetti";

const questions = [
  { text: "How would you rate your leadership or management skills?", hint: "Think about how you handle guiding or supporting a team." },
  { text: "What's your strongest problem-solving ability?", hint: "Consider the types of problems you solve best." },
  { text: "Which industry or field are you most passionate about working in?", hint: "Which area excites you most when thinking about a career?" },
  { text: "What kind of career growth do you aspire to?", hint: "Think about the roles or levels you want to reach in your career." },
  { text: "What kind of company culture do you prefer?", hint: "Would you prefer a structured environment or a creative one?" },
  { text: "How do you incorporate creativity into your work?", hint: "Think about any creative approaches you use regularly." },
  { text: "Which creative medium do you enjoy working with the most?", hint: "Is there a type of art or media you find most engaging?" },
  { text: "What's your approach to working through challenges?", hint: "How do you typically handle difficult tasks or situations?" },
  { text: "What motivates you most in your career?", hint: "Consider what drives you to keep improving at work." },
];

const options = [
  [" Strong - I enjoy guiding and motivating teams", " Moderate - I like managing projects but prefer not to lead", " Developing - I'd like to improve my leadership skills", " Minimal - I prefer being a team member rather than a leader"],
  [" Thinking outside the box and finding innovative solutions", " Breaking down complex technical issues", " Identifying needs and helping others", " Streamlining processes to make things more efficient"],
  [" Technology and innovation", " Creative Arts and Media", " Healthcare and Life Sciences", " Education and Teaching", " Business and Entrepreneurship"],
  [" Becoming a creative director or leading visionary projects", " Gaining expertise as a senior engineer or technical expert", " Being a trusted mentor or advocate in my community", " Running my own business or leading a company"],
  [" Open, creative, and collaborative", " Structured with clear goal and innovation", " Mission-focused, emphasizing empathy and social impact", " Competitive and performance-driven with a focus on growth"],
  [" By constantly brainstorming new ideas and designs", " By finding new ways to improve technical systems", " Through storytelling, writing, or teaching", " By developing innovative business strategies or marketing plans"],
  [" Visual arts, like design or photography", " Digital creation, like coding or interactive media", " Writing or speaking to convey ideas", " Event planning, networking, or marketing campaigns"],
  [" I rely on creativity to explore different solutions", " I stay focused and methodical until the problem is solved", " I seek advice from others and work collaboratively", " I take a strategic view and find the most efficient way to tackle it"],
  [" Freedom to be creative and express my ideas", " Mastery of skills and achieving technical issues", " Helping people and making a positive impact", " Gaining leadership roles and achieving measurable success"],
];

const DetailedQuestions = () => {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasShownConfetti, setHasShownConfetti] = useState(false);
  const navigate = useNavigate();

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  useEffect(() => {
    if (answers.every((answer) => answer !== "") && !hasShownConfetti) {
      setShowConfetti(true);
      setHasShownConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [answers, hasShownConfetti]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setShowHint(false);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setShowHint(false);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("detailedAnswers", JSON.stringify(answers));
    navigate("/Results");
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="detailed-questions-container">
      <div className="bubbles">
        {Array.from({ length: 23 }, (_, index) => (
          <div key={index} className="bubble"></div>
        ))}
      </div>


      {showConfetti && <Confetti className="confetti" />}
      <h1 className="page-title">Detailed Questions</h1>
      <p className="rating-description">Select one answer for each question.</p>

      {/* Progress bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <p>{currentQuestion + 1} out of {questions.length} questions completed</p>

      <form className="questions-form" onSubmit={(e) => e.preventDefault()}>
        <div className="question-item">
          <div className="question-header">
            <p>{questions[currentQuestion].text}</p>
            <FaQuestionCircle
              onClick={() => setShowHint(!showHint)}
              className="hint-icon"
            />
          </div>
          {showHint && <p className="hint-text">{questions[currentQuestion].hint}</p>}
          <div className="options-list">
            {options[currentQuestion].map((option) => (
              <label
                key={option}
                className={`option-label ${answers[currentQuestion] === option ? "selected" : ""}`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleAnswerChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="navigation-buttons">
          <button type="button" onClick={handleBack} disabled={currentQuestion === 0}>
            Back
          </button>
          {currentQuestion < questions.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={!answers[currentQuestion]}  // Disabled if no answer selected
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="submit-button"
              disabled={!answers[currentQuestion]}  // Disabled if no answer selected
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default DetailedQuestions;