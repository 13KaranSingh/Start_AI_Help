/* Updated BasicQuestion.tsx */

import React, { useState, useEffect } from "react";
import "./BasicQuestion.css"; // Import Basic Question styles
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const questions = [
  { text: "I enjoy solving complex problems." },
  { text: "I like a fast-paced work environment." },
  { text: "I am comfortable taking risks." },
  { text: "I seek stability in my career." },
  { text: "I am motivated by innovation." },
  { text: "I prefer a structured work environment." },
  { text: "I value work-life balance highly." },
];

const BasicQuestion: React.FC = () => {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasShownConfetti, setHasShownConfetti] = useState(false);
  const navigate = useNavigate();

  const handleAnswerChange = (index: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  useEffect(() => {
    if (answers.every((answer) => answer !== 0) && !hasShownConfetti) {
      setShowConfetti(true);
      setHasShownConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [answers, hasShownConfetti]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (answers.includes(0)) {
      alert("Please answer all questions before submitting.");
      return;
    }
    localStorage.setItem("basicAnswers", JSON.stringify(answers));
    navigate("/Results");
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="basic-questions-container solid-background">
      <div className="bubbles">
        {Array.from({ length: 23 }, (_, index) => (
          <div key={index} className="bubble"></div>
        ))}
      </div>

      {showConfetti && <Confetti className="confetti" />}
      <h1 className="page-title">Basic Questions</h1>
      <p className="rating-description">
        Please rate each statement on a scale of 1 to 5, where:
        <strong> 1 = Least Likely</strong> and <strong>5 = Most Likely</strong>
      </p>

      {/* Progress bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p>
        {currentQuestion + 1} out of {questions.length} questions completed
      </p>

      {/* Question and slider */}
      <div className="question-item">
        <p className="question-text">{questions[currentQuestion].text}</p>
        <input
          type="range"
          min="1"
          max="5"
          value={answers[currentQuestion]}
          onChange={(e) =>
            handleAnswerChange(currentQuestion, parseInt(e.target.value))
          }
          className="slider"
        />
        <div className="slider-labels">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentQuestion === 0}
        >
          Back
        </button>
        {currentQuestion < questions.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            disabled={answers[currentQuestion] === 0}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="submit-button"
            disabled={answers[currentQuestion] === 0}
          >
            Submit Answers
          </button>
        )}
      </div>
    </div>
  );
};

export default BasicQuestion;