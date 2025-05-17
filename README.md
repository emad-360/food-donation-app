# 🍱 Food Donation App

A smart, real-time digital platform that enables food businesses to log surplus food and instantly connect with nearby NGOs or shelters for efficient, safe, and timely donation.

---

## Project Structure
```
<pre lang="markdown"> ``` food-donation-app/ ├── client/ # React frontend │ ├── public/ │ └── src/ │ ├── components/ # React components (if any) │ └── App.js # Main frontend logic │ ├── server/ # Node.js backend with Express │ ├── models/ # Mongoose schemas │ │ └── Donation.js │ ├── .env # MongoDB connection string │ └── server.js # Backend entry point │ ├── .gitignore ├── README.md # Project documentation ├── package.json # Main config (or separate in each dir) ``` </pre>
```
## Features

- Food businesses can log surplus food donations.
- NGOs and shelters can view nearby donation opportunities.
- Real-time updates using backend APIs.
- Simple user-friendly interface.
- MongoDB Atlas for database storage.
- Backend built with Node.js and Express.
- Frontend built with React.js.

---

## Tech Stack

- **Frontend:** React, Axios, Material-UI (or Ant Design)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Firebase Auth (planned)
- **Realtime Updates:** Socket.IO or Firebase Realtime Database (planned)
- **Hosting:** Netlify (frontend), Heroku/AWS/DigitalOcean (backend)

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (or local MongoDB)
- Git installed

### Setup

1. **Clone the repo**

```bash
git clone https://github.com/your-username/food-donation-app.git
cd food-donation-app
```

2. **Setup backend**

```bash
cd server
npm install
```

3. **Setup backend**
   
```bash
cd ../client
npm install
```

4. **Create .env file in the server folder**

```bash
MONGO_URI=your_mongodb_connection_string_here
```

5. **Run backend server**

```bash
cd ../server
npm start
```

6. **Run frontend**

```bash
cd ../client
npm start
```

7. **Open http://localhost:3000 in your browser.**
