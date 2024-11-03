import React, { useEffect, useState } from 'react';
import './Results.css'; 
import { OpenAI } from 'openai';

const ResultsPage = () => {
  const [resultData, setResultData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function main() {
      const apiKeyFromStorage = (localStorage.getItem("MYKEY") ?? "").slice(1, -1) ?? "";
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
              content: "As a career advisor, analyze the user's preferences and skills to suggest personalized career options. Focus on their interests and strengths to provide relevant career paths.",
            },
            {
              role: "user",
              content: userPrompt,
            },
          ],
          model: "gpt-4-turbo",
        });

        // Check if the content is not null before parsing
        const messageContent = completion.choices[0].message.content;
        if (typeof messageContent === 'string') {
          const parsedData = JSON.parse(messageContent);
          console.log(parsedData);
          setResultData(parsedData);
        } else {
          console.error("Unexpected message content:", messageContent);
          setResultData(null);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("OpenAI API Error:", error);
        setIsLoading(false);
      }
    }

    main();
  }, []);

  return (
    <div className="results-container">
      {isLoading ? (
        <div>
          <div className="loading-animation"></div>
          <h2>Results Loading...</h2>
        </div>
      ) : (
        <div>
          <h2>Results are ready!</h2>
          {resultData ? (
            <div>
              <h3>Suggested Career Path: {resultData.careerPath}</h3>
              <p><strong>Description:</strong> {resultData.careerDescription}</p>
              <p><strong>Required Education:</strong> {resultData.schoolingRequired}</p>
              <p><strong>Estimated Time to Qualify:</strong> {resultData.timeToQualify}</p>
              <p><strong>Salary Information:</strong> {resultData.salaryInfo}</p>
              <p><strong>Job Demand:</strong> {resultData.jobDemand}</p>
              <p><strong>Why This Job Suits You:</strong> {resultData.reasonForSuitability}</p>
            </div>
          ) : (
            <p>No results available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
