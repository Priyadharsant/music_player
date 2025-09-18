from flask import Flask, request, jsonify, send_from_directory
from mutagen import File
from mutagen.id3 import ID3, APIC
import os
import base64

app = Flask(__name__)

MEDIA_DIR = "larkplayer/drive"  # folder where songs are stored

@app.route("/")
def home():
    return {"status": "Music backend is running 🎵"}

@app.route("/process_media", methods=["GET"])
def process_media():
    filename = request.args.get("file")
    if not filename:
        return jsonify({"error": "File not specified"}), 400
    
    file_path = os.path.join(MEDIA_DIR, filename)
    if not os.path.exists(file_path):
        return jsonify({"error": "File not found"}), 404

    try:
        audio = File(file_path, easy=True)
        tags = {}

        # Basic tags
        if audio:
            tags["title"] = audio.get("title", [os.path.splitext(filename)[0]])[0]
            tags["artist"] = audio.get("artist", ["Unknown Artist"])[0]
            tags["album"] = audio.get("album", ["Unknown Album"])[0]
        else:
            tags = {
                "title": os.path.splitext(filename)[0],
                "artist": "Unknown Artist",
                "album": "Unknown Album"
            }

        # Extract album art
        try:
            id3 = ID3(file_path)
            for tag in id3.values():
                if isinstance(tag, APIC):  # Album art
                    pic_data = base64.b64encode(tag.data).decode("utf-8")
                    tags["picture"] = f"data:{tag.mime};base64,{pic_data}"
                    break
            else:
                tags["picture"] = None
        except Exception:
            tags["picture"] = None

        return jsonify(tags)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/stream/<path:filename>")
def stream_file(filename):
    """Stream the MP3 file"""
    return send_from_directory(MEDIA_DIR, filename, as_attachment=False)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
