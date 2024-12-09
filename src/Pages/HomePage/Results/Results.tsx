import React, { useEffect, useState } from "react";
import "./Results.css";
import { OpenAI } from "openai";

interface CareerSuggestion {
  careerPath: string;
  careerDescription: string;
  schoolingRequired: string;
  timeToQualify: string;
  salaryInfo: string;
  jobDemand: string;
  reasonForSuitability: string;
}

const ResultsPage = () => {
  const [resultData, setResultData] = useState<CareerSuggestion | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCareerSuggestion() {
      const apiKeyFromStorage =
        (localStorage.getItem("MYKEY") ?? "").slice(1, -1) ?? "";
      console.log("API Key from Storage:", apiKeyFromStorage);

      const openai = new OpenAI({
        apiKey: apiKeyFromStorage,
        dangerouslyAllowBrowser: true,
      });

      const userPrompt = `
You are a career selection assistant. Based on the user's preferences, suggest a suitable career path.

Include:
- Suggested career path
- Short description of the career
- Required education
- Estimated time to qualify
- Salary information
- Job demand
- Reason why this job suits the user

Format your response as a JSON object like this:
{
  "careerPath": "Career name",
  "careerDescription": "Brief description of the career.",
  "schoolingRequired": "Education needed",
  "timeToQualify": "Time to qualify",
  "salaryInfo": "Salary details",
  "jobDemand": "Demand info",
  "reasonForSuitability": "Why it suits the user"
}
`;

      try {
        const completion = await openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content:
                "As a career advisor, analyze the user's preferences and skills to suggest personalized career options.",
            },
            {
              role: "user",
              content: userPrompt,
            },
          ],
          model: "gpt-4-turbo",
        });

        const messageContent = completion.choices[0]?.message?.content;

        if (messageContent) {
          const parsedData: CareerSuggestion = JSON.parse(messageContent);
          setResultData(parsedData);
        } else {
          throw new Error("Unexpected response format from OpenAI.");
        }
      } catch (error) {
        console.error("OpenAI API Error:", error);
        setError("Failed to load results. Please check your internet connection or try again later.");
      } finally {
        setIsLoading(false); // Spinner disappears here
      }
    }

    fetchCareerSuggestion();
  }, []);

  return (
    <div className="results-container">
      {/* Loading spinner visible while loading */}
      {isLoading && <div className="loading-spinner"></div>}
      {isLoading ? (
        <div className="loading-section">
          <div className="loading-animation"></div>
          <h2>Results Loading...</h2>
        </div>
      ) : error ? (
        <div className="error-section">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      ) : resultData ? (
        <div className="results-section" aria-live="polite">
          <h2>Your Career Suggestion</h2>
          {[
            {
              title: "Suggested Career Path",
              content: resultData.careerPath,
            },
            { title: "Description", content: resultData.careerDescription },
            {
              title: "Required Education",
              content: resultData.schoolingRequired,
            },
            {
              title: "Estimated Time to Qualify",
              content: resultData.timeToQualify,
            },
            { title: "Salary Information", content: resultData.salaryInfo },
            { title: "Job Demand", content: resultData.jobDemand },
            {
              title: "Why This Job Suits You",
              content: resultData.reasonForSuitability,
            },
          ].map((item, index) => (
            <div className="result-box" key={index}>
              <div className="result-title">{item.title}</div>
              <div className="result-content">{item.content}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results available.</p>
      )}
    </div>
  );
};

export default ResultsPage;
