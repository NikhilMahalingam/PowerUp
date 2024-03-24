from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import requests
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

@app.route('/api/submit', methods=['POST'])
def submit_form():
    data = request.json
    # Construct the prompt based on the received data
    prompt = f"Generate a fitness plan for someone with the following details: Age: {data['age']}, Weight: {data['weight']}, Goals: {data['goals']}, Experience: {data['experience']}."
    
    # Add additional information if 'Rehabilitation' is selected
    if data['goals'] == 'Rehabilitation':
        prompt += f" The focus is on rehabilitation for the {data.get('bodyPart', 'not specified')}."

    response = requests.post(
        "https://api.openai.com/v1/engines/gpt-3.5-turbo/completions",
        headers={"Authorization": f"Bearer {OPENAI_API_KEY}"},
        json={
            "prompt": prompt,
            "temperature": 0.7,
            "max_tokens": 150
        }
    )
    result = response.json()
    print(result)
    return jsonify(message=result.get('choices', [{}])[0].get('text', 'No response'))

if __name__ == '__main__':
    app.run(debug=True)
