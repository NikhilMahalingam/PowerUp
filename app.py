from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import requests

load_dotenv()  # Load environment variables from .env file.

app = Flask(__name__)

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

@app.route('/api/submit', methods=['POST'])
def submit_form():
    data = request.json
    # You can process the data further here and then send it to OpenAI
    response = requests.post(
        "https://api.openai.com/v1/engines/text-davinci-002/completions",
        headers={"Authorization": f"Bearer {API_KEY}"},
        json={
            "prompt": f"Generate a fitness plan for someone with the following details: Age: {data['age']}, Weight: {data['weight']}, Goals: {data['goals']}, Experience: {data['experience']}.",
            "temperature": 0.7,
            "max_tokens": 150
        }
    )
    result = response.json()
    return jsonify(message=result.get('choices', [{}])[0].get('text', 'No response'))

if __name__ == '__main__':
    app.run(debug=True)
