from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return "Welcome to the Support Chatbot API!"

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "")
    if not question:
        return jsonify({"error": "No question provided"}), 400
    # Example response
    return jsonify({"answer": f"This is a response to your question: {question}"})

if __name__ == "__main__":
    app.run(debug=True)
