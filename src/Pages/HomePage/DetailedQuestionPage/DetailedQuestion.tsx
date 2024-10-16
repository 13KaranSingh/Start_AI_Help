import React, { useState } from "react";
import "./DetailedQuestion.css";

const questions = [
  "I enjoy working in a team environment.",
  "I am comfortable with public speaking.",
  "I like to solve complex problems.",
  "I am detail-oriented.",
  "I prefer hands-on activities.",
  "I enjoy learning new technologies.",
  "I am comfortable with repetitive tasks.",
  "I like to help others with their problems.",
  "I can adapt to new situations easily.",
  "I am able to work independently without supervision.",
];

const DetailedQuestions = () => {
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(0)
  );
  const completedQuestions = answers.filter((answer) => answer !== 0).length; // Count completed answers

  const handleAnswerChange = (index: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
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
      <form className="questions-form">
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
