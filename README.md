# Pawn Product Evaluation & Loan Management Web App

## Project Overview

This is a mini full-stack web application designed for pawn shop management. It allows a shopkeeper to:

- Add pawned products with details like product name, condition, estimated value, and warranty.
- Evaluate loan eligibility using smart pricing logic.
- View and manage loan records.
- Handle customer authentication and manage customer-related data.

---

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** CORS, dotenv for environment variables

---

## Features

- Product submission form with validations.
- Dashboard displaying product and loan information.
- Customer registration and login with JWT-based authentication.
- Protected backend routes to secure customer data.
- Responsive and animated UI for better user experience.

---

## Folder Structure
pawn-backend/
├── models/ # Mongoose schemas for Product and Customer
├── routes/ # Express routes (products, auth, customers)
├── middleware/ # JWT auth middleware
├── server.js # Backend entry point
├── package.json
├── .env # Environment variables (not included in repo)
pawn-frontend/
├── src/ # React source files
│ ├── components/ # React components (ProductForm, Dashboard, etc.)
│ ├── App.js
│ ├── index.js
├── package.json

### Prerequisites

- Node.js installed
- MongoDB installed and running locally or access to a MongoDB Atlas cluster
- Git installed

### Backend Setup

1. Navigate to backend folder:

   ```bash
   cd pawn-backend

 1. Navigate to backend folder:

   ```bash
   cd pawn-backend
Install dependencies:


npm install
Create a .env file with:

env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server:


npm start
Server will run on http://localhost:5000

Frontend Setup
Navigate to frontend folder:


cd pawn-frontend
Install dependencies:


npm install
Start the React development server:


npm start
Frontend runs on http://localhost:3000  

