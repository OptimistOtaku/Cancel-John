# Cancel-John: Your Personal Scam Shield

Welcome to **Cancel-John**, the ultimate guardian for your phone calls and transactions. Empowered by cutting-edge AI and intuitive analytics, Cancel-John is your go-to solution for detecting and neutralizing scams in real-time.

---

## 🚀 What is Cancel-John?

Cancel-John is a state-of-the-art fraud prevention system designed to protect you from scams. With a sleek dashboard, an intelligent backend powered by **FastAPI** and **DistilBERT**, and real-time monitoring capabilities, Cancel-John ensures you're always one step ahead of fraudsters.

---

## ✨ Key Features

### **🛡️ Scam Detection**
- **AI-Powered Analysis**: Detect scam attempts with lightning-fast precision using the DistilBERT model.
- **Audio Uploads**: Analyze suspicious audio files and receive detailed transcripts, risk scores, and red flag keywords.

### **📊 Fraud Analytics**
- **Risk Meter**: Visualize scam risk levels with color-coded severity (Safe, Suspicious, High Risk).
- **Trend Reports**: View monthly scam trends and prevention stats through interactive area charts.

### **🚨 Real-Time Alerts**
- Receive instant notifications for high-risk calls.
- Customize risk thresholds and enable auto-block for critical threats.

### **🔍 Case Management**
- Keep track of fraud investigations with detailed case logs, including customer info, risk levels, and financial impact.

### **💡 Modern Design**
- A stunning dashboard built with **React** and enhanced by **Material UI** and **Framer Motion** for smooth animations and a seamless user experience.

---

## 🛠️ How It Works

1. **Backend**: A FastAPI server communicates with the DistilBERT model to process incoming data and generate predictions.
2. **Frontend**: The React-based dashboard displays insights, allowing users to interact with data and make informed decisions.
3. **API Integration**: Secure and scalable APIs handle everything from scam detection to case management.

---

## 🧑‍💻 Getting Started

### Prerequisites
- **Node.js** >= 18.x
- **Python** >= 3.9
- **FastAPI** and **Torch** for backend setup

### Installation
```bash
# Clone the repo
git clone https://github.com/OptimistOtaku/Cancel-John.git

# Navigate to the project directory
cd Cancel-John

# Install frontend dependencies
npm install

# Install backend dependencies
pip install -r requirements.txt
```

### Running the Application

#### Frontend
```bash
npm start
```
Access the dashboard at [http://localhost:3000](http://localhost:3000).

#### Backend
```bash
uvicorn main:app --reload
```
API will be available at [http://localhost:8000](http://localhost:8000).

---

## 📖 Learn More

- **API Documentation**: The FastAPI backend provides auto-generated API docs at `/docs`.
- **Model**: Leveraging the **DistilBERT** model for natural language processing tasks.

---

## 🔐 Security & Privacy

Your safety is our priority. All data is securely processed, and sensitive information is never stored without encryption.

---

## 🌟 Join the Fight Against Scams!

Take control of your security with Cancel-John. Whether you’re an individual or an organization, rest assured knowing you have a powerful ally against fraud.

---

## 📝 License

MIT License. See `LICENSE` for more details.
