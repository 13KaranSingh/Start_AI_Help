import React, { useState } from "react";
import "./DetailedQuestion.css";
import { useNavigate } from "react-router-dom";

const questions = [
  "How would you rate your leadership or management skills?",
  "What's your strongest problem-solving ability?",
  "Which industry or field are you most passionate about working in?",
  "What kind of career growth do you aspire to?",
  "What kind of company culture do you prefer?",
  "How do you incorporate creativity into your work?",
  "Which creative medium do you enjoy working with the most?",
  "What's your approach to working through challenges?",
  "What motivates you most in your career?",
];

const options = [
  [
    " Strong - I enjoy guiding and motivating teams",
    " Moderate - I like managing projects but prefer not to lead",
    " Developing - I'd like to improve my leadership skills",
    " Minimal - I prefer being a team member rather than a leader",
  ],
  [
    " Thinking outside the box and finding innovative solutions",
    " Breaking down complex technical issues",
    " Identifying needs and helping others",
    " Streamlining processes to make things more efficient",
  ],
  [
    " Technology and innovation",
    " Arts, media, or entertainment",
    " Healthcare or education",
    " Business, finance, or entrepreneurship",
  ],
  [
    " Becoming a creative director or leading visionary projects",
    " Gaining expertise as a senior engineer or technical expert",
    " Being a trusted mentor or advocate in my community",
    " Running my own business or leading a company",
  ],
  [
    " Open, creative, and collaborative",
    " Structured with clear goal and innovation",
    " Mission-focused, emphasizing empathy and social impact",
    " Competitive and performance-driven with a focus on growth",
  ],
  [
    " By constantly brainstorming new ideas and designs",
    " By finding new ways to improve technical systems",
    " Through storytelling, writing, or teaching",
    " By developing innovative business strategies or marketing plans",
  ],
  [
    " Visual arts, like design or photography",
    " Digital creation, like coding or interactive media",
    " Writing or speaking to convey ideas",
    " Event planning, networking, or marketing campaigns",
  ],
  [
    " I rely on creativity to explore different solutions",
    " I stay focused and methodical until the problem is solved",
    " I seek advice from others and work collaboratively",
    " I take a strategic view and find the most efficient way to tackle it",
  ],
  [
    " Freedom to be creative and express my ideas",
    " Mastery of skills and achieving technical issues",
    " Helping people and making a positive impact",
    " Gaining leadership roles and achieving measurable success",
  ],
];

const DetailedQuestions = () => {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const navigate = useNavigate();

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = value;
      return newAnswers;
    });
  };

  const completedQuestions = answers.filter((answer) => answer !== "").length;
  const progressPercentage = (completedQuestions / questions.length) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting detailed answers:", answers);
    localStorage.setItem("detailedAnswers", JSON.stringify(answers));
    navigate("/Results");
  };

  return (
    <div className="detailed-questions-container">
      <h1 className="page-title">Detailed Questions</h1>

      <p className="rating-description">
        Select one answer for each question.
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
            <div className="options-vertical">
              {options[index].map((option) => (
                <label key={option} className="option-label">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                  />
                  {option}
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
