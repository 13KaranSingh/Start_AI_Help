import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutMe from "./Pages/HomePage/AboutMe/AboutMe";
import DetailedQuestions from "./Pages/HomePage/DetailedQuestionPage/DetailedQuestion";
import BasicQuestions from "./Pages/HomePage/BasicQuestionPage/BasicQuestion";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Results from "./Pages/HomePage/Results/Results";
import './index.css'; // Importing the global styles

// Local storage and API Key
let keyData: string = ""; // Declare keyData as a string
const saveKeyData = "MYKEY"; // Key for local storage
const prevKey = localStorage.getItem(saveKeyData); // Fetch previous key from local storage

// Check if a previous key exists and parse it if it does
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  // State for the API key input
  const [key, setKey] = useState<string>(keyData); // Type state as string

  // Function to handle form submission
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key)); // Store key in local storage
    window.location.reload(); // Reload to refresh local storage
  }

  // Function to handle input changes
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value); // Update state with input value
  }

  // Dark/light mode toggle
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  
  // Effect to toggle dark mode class on the body element
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkTheme);
  }, [darkTheme]);

  return (
    <Router>
      <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/DetailedQuestions" element={<DetailedQuestions />} />
            <Route path="/BasicQuestions" element={<BasicQuestions />} />
            <Route path="/Results" element={<Results />} />
          </Routes>
        </header>
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control
            type="password"
            placeholder="API_KEY"
            onChange={changeKey} // Event handler for input change
          />
          <br />
          <Button className="Submit-Button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
