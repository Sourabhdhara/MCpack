# Minecraft Packs Site

A simple Flask-based web application to host and share Minecraft packs online.  
This project allows you to serve `.mcpack` files and JSON-driven data through a clean, lightweight interface.  
It can be run locally or deployed using GitHub Codespaces + Ngrok for public sharing.

---

## 🚀 Features
- Serve Minecraft packs (`.mcpack`) directly from a Flask app.
- JSON-driven structure for easy updates and pack listings.
- Public access via **Ngrok** or **Codespaces port forwarding**.
- Beginner-friendly setup with minimal dependencies.

---

## 📂 Project Structure
project/
│── app.py              # Flask backend
│── requirements.txt    # Python dependencies
│── todo.md             # Notes or tasks
│
├── data/               # JSON files for packs
├── static/             # CSS, JS, images
│    ├── style.css
│    ├── script.js
│    └── upload/        # pack thumbnails and UI images
└── templates/
     └── index.html     # main webpage
     
---

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Sourabhdhara/MC-pack.git
cd MC-pack
```
### 2. Install Dependencies
```bash
pip install flask
```
or
```
pip install -r requirements.txt
```
### 3. Run Locally
``` bash
python app.py
```
Visit: http://127.0.0.1:5000 (127.0.0.1 in Bing)
## 🌐 Deploy Online
### Option A: Ngrok
```bash
ngrok http 5000
```
Ngrok will provide a public link like: https://yourname.ngrok-free.dev
### Option B: GitHub Codespaces
- Open the repo in Codespaces.
- Run python app.py.
- Forward port 5000 and set it to Public.
- Share the generated github.dev link.
## 📦 Usage
- Place your .mcpack files in the repository folder.
- Update packs.json with metadata (name, version, description).
- Flask will serve these packs via routes (e.g., /packs).
## 🛠️ Future Improvements
- Add a styled HTML interface for browsing packs.
- Enable search/filter for packs.
- Provide permanent hosting via Railway.app or Render.
## 👤 Author
Sourabh Dhara
Passionate about building dynamic, beginner-friendly web apps and sharing Minecraft packs with the community.

---
