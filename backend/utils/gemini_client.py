import os
import requests

# Get your Gemini API key from Google AI Studio: https://aistudio.google.com/app/apikey
API_KEY = os.getenv("GEMINI_API_KEY")

# Use one of the official models:
MODEL = "gemini-1.5-flash-latest"
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"

def generate_quote(username: str):
    """
    Returns a motivational quote for the given username using Gemini API.
    """
    if not API_KEY:
        return "⚠️ Missing GEMINI_API_KEY environment variable."

    payload = {
        "contents": [
            {
                "role": "user",
                "parts": [
                    {"text": f"Give a short motivational quote for {username} to stay consistent with their daily habits."}
                ],
            }
        ]
    }

    try:
        response = requests.post(
            f"{GEMINI_URL}?key={API_KEY}",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        response.raise_for_status()
        data = response.json()
        return data["candidates"][0]["content"]["parts"][0]["text"]
    except Exception as e:
        print("Gemini API Error:", e)
        return "Stay strong, one habit at a time!"
