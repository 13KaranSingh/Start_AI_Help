import React, { useState } from "react";
import "./BasicQuestion.css";
import { useNavigate } from "react-router-dom";

const questions = [
  "I enjoy solving complex problems.",
  "I like a fast-paced work environment.",
  "I am comfortable taking risks.",
  "I seek stability in my career.",
  "I am motivated by innovation.",
  "I prefer a structured work environment.",
  "I value work-life balance highly.",
];

const BasicQuestion: React.FC = () => {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleAnswerChange = (index: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

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
    <div className="basic-questions-container">
      <h1 className="page-title">Basic Questions</h1>
      <p className="rating-description">
        Please rate each statement on a scale of 1 to 5, where:
        <strong> 1 = Least Likely</strong> and <strong>5 = Most Likely</strong>
      </p>

      {/* Progress bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <p>{currentQuestion + 1} out of {questions.length} questions completed</p>

      {/* Question and slider */}
      <div className="question-item">
        <p className="question-text">{questions[currentQuestion]}</p>
        <input
          type="range"
          min="1"
          max="5"
          value={answers[currentQuestion]}
          onChange={(e) => handleAnswerChange(currentQuestion, parseInt(e.target.value))}
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
        <button type="button" onClick={handleBack} disabled={currentQuestion === 0}>
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
