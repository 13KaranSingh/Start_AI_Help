import React, { useState } from "react";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { Link, HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutMe from "./Pages/HomePage/AboutMe/AboutMe";
import DetailedQuestions from "./Pages/HomePage/DetailedQuestionPage/DetailedQuestion";
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

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Navigation Links */}
          <nav>
            <Link to="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
            <Link to="/AboutMe" style={{ margin: "0 10px", color: "white" }}>About Me</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* HomePage route */}
            <Route path="/AboutMe" element={<AboutMe />} /> {/* AboutMe route */}
            <Route path="/DetailedQuestions" element={<DetailedQuestions/>} /> {/* DetailedQuestions route */}
          </Routes>
        </header>
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Insert API Key Here"
            onChange={changeKey} // Event handler for input change
          />
          <br />
          <Button className="Submit-Button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </Router>
  );
}

export default App; // Export the App component
