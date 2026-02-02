from flask import Flask, render_template, jsonify
import os
import json

app = Flask(__name__)

# Path to data folder
DATA_FOLDER = 'data'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/packs')
def get_packs():
    packs = []
    if os.path.exists(DATA_FOLDER):
        for filename in os.listdir(DATA_FOLDER):
            if filename.endswith('.json'):
                filepath = os.path.join(DATA_FOLDER, filename)
                try:
                    with open(filepath, 'r') as f:
                        pack_data = json.load(f)
                        packs.append(pack_data)
                except (json.JSONDecodeError, IOError) as e:
                    print(f"Error loading {filename}: {e}")
    return jsonify(packs)

if __name__ == '__main__':
    app.run(debug=True)
