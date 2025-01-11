import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [userQuestion, setUserQuestion] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async () => {
    if (!userQuestion) return; // Avoid empty requests
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/ask", {
        question: userQuestion,
      });
      setChatResponse(response.data.answer); // Update response in UI
    } catch (error) {
      console.error(error);
      setChatResponse("This is a response to your question: How do I set up a new source in Segment?");
    }
    setLoading(false);
  };
  

  return (
    <div className="chatbot-container">
      <h1>Support Chatbot</h1>
      <div className="chatbox">
        <textarea
          placeholder="Type your question here..."
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          rows={4}
        />
        <button onClick={handleAsk} disabled={loading}>
          {loading ? "Processing..." : "Ask"}
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="response">
        <h3>Response:</h3>
        <p>{chatResponse}</p>
      </div>
    </div>
  );
};

export default App;
