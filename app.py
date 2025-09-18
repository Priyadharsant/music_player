from flask import Flask, jsonify, send_from_directory
import os

app = Flask(__name__)

# Folder where your songs are stored (repo root in your case)
MEDIA_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route("/")
def index():
    # List all mp3 files in repo root
    songs = [f for f in os.listdir(MEDIA_DIR) if f.endswith(".mp3")]
    # Return JSON with full URLs for easier frontend use
    base_url = "https://music-player-tgd0.onrender.com/songs/"
    song_urls = [base_url + s for s in songs]
    return jsonify({"songs": song_urls})

@app.route("/songs/<path:filename>")
def get_song(filename):
    return send_from_directory(MEDIA_DIR, filename, as_attachment=False)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
