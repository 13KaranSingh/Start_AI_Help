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
  [" Technology and innovation", " Arts, media, or entertainment", " Healthcare or education", " Business, finance, or entrepreneurship"],
  [" Becoming a creative director or leading visionary projects", " Gaining expertise as a senior engineer or technical expert", " Being a trusted mentor or advocate in my community", " Running my own business or leading a company"],
  [" Open, creative, and collaborative", " Structured with clear goal and innovation", " Mission-focused, emphasizing empathy and social impact", " Competitive and performance-driven with a focus on growth"],
  [" By constantly brainstorming new ideas and designs", " By finding new ways to improve technical systems", " Through storytelling, writing, or teaching", " By developing innovative business strategies or marketing plans"],
  [" Visual arts, like design or photography", " Digital creation, like coding or interactive media", " Writing or speaking to convey ideas", " Event planning, networking, or marketing campaigns"],
  [" I rely on creativity to explore different solutions", " I stay focused and methodical until the problem is solved", " I seek advice from others and work collaboratively", " I take a strategic view and find the most efficient way to tackle it"],
  [" Freedom to be creative and express my ideas", " Mastery of skills and achieving technical issues", " Helping people and making a positive impact", " Gaining leadership roles and achieving measurable success"],
];

const DetailedQuestions = () => {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [showHint, setShowHint] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasShownConfetti, setHasShownConfetti] = useState(false); // New state to track confetti trigger
  const navigate = useNavigate();

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = value;
      return newAnswers;
    });
  };

  useEffect(() => {
    if (answers.every((answer) => answer !== "") && !hasShownConfetti) {
      // Show confetti only when all questions are answered and confetti hasn't shown before
      setShowConfetti(true);
      setHasShownConfetti(true); // Set this to true to prevent re-triggering
      const timer = setTimeout(() => setShowConfetti(false), 3000); // Confetti lasts for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [answers, hasShownConfetti]);

  const completedQuestions = answers.filter((answer) => answer !== "").length;
  const progressPercentage = (completedQuestions / questions.length) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("detailedAnswers", JSON.stringify(answers));
    navigate("/Results");
  };

  return (
    <div className="detailed-questions-container">
      {showConfetti && <Confetti className="confetti" />}
      <h1 className="page-title">Detailed Questions</h1>
      <p className="rating-description">Select one answer for each question.</p>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <p>{completedQuestions} out of {questions.length} questions completed</p>

      <form className="questions-form" onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="question-item">
            <div className="question-header">
              <p>{question.text}</p>
              <FaQuestionCircle
                onClick={() => setShowHint(showHint === index ? null : index)}
                className="hint-icon"
              />
            </div>
            {showHint === index && <p className="hint-text">{question.hint}</p>}
            <div className="options-list">
              {options[index].map((option) => (
                <label
                  key={option}
                  className={`option-label ${answers[index] === option ? "selected" : ""}`}
                >
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
