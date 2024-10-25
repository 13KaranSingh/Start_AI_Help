import React, { useState } from "react";
import "./DetailedQuestion.css";
import { useNavigate } from "react-router-dom";

const questions = [
  "How would you rate your leadership or management skills?",
  "What's your strongest problem-solving ability?",
  "Which industry or field are you most passionate about working in?",
  "What kind of career growth do you aspire to?",
  "What kind of company culture do you prefer?",
  "How do you incoperate creativity into your work?",
  "Which ceative medium do you enjoy working with the most?",
  "What's your approach to working through challenges?",
  "What motivates you most in your career?",
];

const DetailedQuestions = () => {
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(0)
  );
  const completedQuestions = answers.filter((answer) => answer !== 0).length; // Count completed answers
  const navigate = useNavigate();

  const handleAnswerChange = (index: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Submitting detailed answers:", answers); // Log answers
    localStorage.setItem("detailedAnswers", JSON.stringify(answers)); // Store answers in localStorage
    navigate("/Results"); // Redirect to the Results page
  };

  const progressPercentage = (completedQuestions / questions.length) * 100;

  return (
    <div className="detailed-questions-container">
      <h1 className="page-title">Detailed Questions</h1>

      <p className="rating-description">
        Please rate each statement on a scale of 1 to 5, where:
        <br />
        <strong>1 = Least Likely</strong> and <strong>5 = Most Likely</strong>
      </p>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p>
        {completedQuestions} out of {questions.length} questions completed
      </p>
      <form className="questions-form" onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="question-item">
            <p>{question}</p>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={num}
                    checked={answers[index] === num}
                    onChange={() => handleAnswerChange(index, num)}
                  />
                  {num}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="submit-button">
          Submit Answers
        </button>
      </form>
    </div>
  );
};

export default DetailedQuestions;