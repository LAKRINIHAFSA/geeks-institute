from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/ask", methods=["POST"])
def ask():
    message = request.form.get("message")
    if "hello" in message.lower():
        response = "Hello! How can I help you?"
    else:
        response = "I am a recruitment chatbot."

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
