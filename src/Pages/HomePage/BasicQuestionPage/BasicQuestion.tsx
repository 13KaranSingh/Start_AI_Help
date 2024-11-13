import React, { useState } from "react";
import "./BasicQuestion.css";
import { useNavigate } from "react-router-dom";

const questions = [
  "I like working with others.",
  "I enjoy helping people.",
  "I prefer routine tasks.",
  "I like learning new things.",
  "I work well alone.",
];

const BasicQuestion = () => {
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

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <p>{currentQuestion + 1} out of {questions.length} questions completed</p>

      <div className="question-item">
        <p className="question-text">{questions[currentQuestion]}</p>
        <div className="rating-options">
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num} className={`option-label ${answers[currentQuestion] === num ? "selected" : ""}`}>
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={num}
                checked={answers[currentQuestion] === num}
                onChange={() => handleAnswerChange(currentQuestion, num)}
              />
              {num}
            </label>
          ))}
        </div>
      </div>

      <div className="navigation-buttons">
        <button type="button" onClick={handleBack} disabled={currentQuestion === 0}>
          Back
        </button>
        {currentQuestion < questions.length - 1 ? (
          <button type="button" onClick={handleNext} disabled={!answers[currentQuestion]}>
            Next
          </button>
        ) : (
          <button type="button" onClick={handleSubmit} className="submit-button" disabled={!answers[currentQuestion]}>
            Submit Answers
          </button>
        )}
      </div>
    </div>
  );
};

export default BasicQuestion;
