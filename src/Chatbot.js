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
      <div className="response">
        <h3>Response:</h3>
        <p>{chatResponse}</p>
      </div>
    </div>
  );
  