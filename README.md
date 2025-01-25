# Recipe Web App

A dynamic web application for managing and sharing recipes. This app allows users to create, read, update, and delete recipes while offering a clean and responsive user interface. It also provides seamless recipe filtering and searching capabilities.

## ✨ Features
- **📋 Recipe Management**: Create, update, delete, and view recipes.
- **🔍 Search and Filter**: Easily find recipes by name or category.
- - **🖼️ Image Upload**: Upload recipe images directly from your local machine to enhance your recipes.
  - 
<!--
## Screenshots 🎥
- **Homepage**: Displays a list of recipes with search and filter functionality.
- **Recipe Details**: Shows detailed steps, ingredients, and an uploaded image.
- **Create Recipe**: A form for users to add their favorite recipes.

_(Include screenshots or a demo link here)_
-->

## 🤖 Tech Stack
- **Frontend**: React, HTML/CSS
- **Backend**: Pyhton, Flask
- **Database**: MongoDB
- **API**: Spoonacular API

## 🛠️ Installation

Follow these steps to set up and run the Recipe Web App:

### **Backend Setup**
1. **Install Python3**:
   - Ensure Python3 is installed on your system. You can download it from [python.org](https://www.python.org/).
2. **Install Flask**:
   - Open your terminal and run:
     ```bash
     pip3 install Flask
     ```
3. **Install Required Packages**:
   - Install additional dependencies:
     ```bash
     pip install requests
     pip install boto3 awscli
     ```
4. **Run the Backend**:
   - Navigate to the backend directory and run:
     ```bash
     python3 app.py
     ```

### **Frontend Setup**
1. **Install Node.js**:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).
2. **Install Dependencies**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install the required npm packages:
     ```bash
     npm install
     npm i react-router-dom --save styled-components
     npm i reactjs-popup
     npm axios install
     ```
3. **Start the Frontend**:
   - Run the React application:
     ```bash
     npm start
     ```

### **Database Setup**
1. **Install MongoDB Dependencies**:
   - Install the necessary packages:
     ```bash
     pip install pymongo
     pip install Flask-PyMongo
     ```
2. **Set Up MongoDB**:
   - Create a `.env` file in the root directory and add the following credentials:
     ```env
     MONGO_URI='YOUR_MONGO_URI_KEY'
     SPOONACULAR_API_KEY='YOUR_SPOONACULAR_API_KEY'
     AWS_BUCKET_NAME='your-bucket-name'
     AWS_ACCESS_KEY='your-access-key'
     AWS_SECRET_ACCESS_KEY='your-secret-key'
     ```

## 🎯 Use Cases
- 🍴 Easily manage your personal recipe collection.
- 🗂️ Search and filter recipes by category or keyword.
- 📖 Learn new recipes from featured page in the app.

## 🥗 Example Usage
Create a recipe for your favorite dish:
- **Title**: Spaghetti Carbonara
- **Ingredients**: Pasta, eggs, pancetta, parmesan cheese, black pepper.
- **Steps**:
  1. 🍝 Cook the pasta.
  2. 🧀 Prepare the sauce by mixing eggs and parmesan.
  3. 🥓 Fry the pancetta until crispy.
  4. 🍲 Combine pasta with sauce and pancetta.
  5. 🧂 Serve with freshly cracked black pepper.

## 🚀 Future Improvements
- 🔒 Add user registration and authentication for a secure login and signup system
- 🌐 Add social media integration for sharing recipes externally.
- ⭐ Enable rating and commenting on shared recipes.

## Conclusion 👋
This project was developed collaboratively as part of a Scrum team in an Agile environment. With its rich feature set and user-focused design, the Recipe Web App offers a modern solution for food enthusiasts to manage recipes digitally.
