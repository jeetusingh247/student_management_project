# STRUCT {STUDIES}

A team project by Saumya Sharma, Shiv Sablok, Prince Kumar Singh, Jeetu Singh

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Backend](#backend)
  - [Technologies Used](#technologies-used)
  - [Setup](#setup)
  - [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
  - [Technologies Used](#technologies-used-1)
  - [Setup](#setup-1)
  - [Components](#components)
- [Use Cases](#use-cases)
- [Code Explanations](#code-explanations)
  - [Backend](#backend-1)
  - [Frontend](#frontend-1)
- [Conclusion](#conclusion)

## Introduction
STRUCT {STUDIES} is a comprehensive student management system designed to facilitate various academic activities such as quizzes, video lectures, and chatbot interactions. This project is a collaborative effort by Saumya Sharma, Shiv Sablok, Prince Kumar Singh, and Jeetu Singh. The system aims to provide a seamless and interactive learning experience for students.

## Project Structure

## Backend

### Technologies Used
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing quiz results and other data.
- **dotenv**: A module to load environment variables from a `.env` file.
- **Fuse.js**: A lightweight fuzzy-search library.
- **Natural**: A general natural language facility for Node.js.

### Setup
1. Navigate to the `chatbot-backend` directory.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file and add your MongoDB connection string:
    ```
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    ```
4. Start the server:
    ```sh
    npm start
    ```

### API Endpoints
- `POST /api/chatbot`: Sends a message to the chatbot and receives a reply.
- `POST /api/quiz`: Saves quiz results to the database.

### Detailed Explanation
- **Database Connection**: The MongoDB connection is established in `config/db.js`.
- **Chatbot Controller**: Handles chatbot interactions in `controller/chatbot.controller.js`. It processes user messages and generates responses using Natural and Fuse.js.
- **Quiz Controller**: Handles quiz result submissions in `controller/quizController.js`. It saves quiz results to the MongoDB database.
- **Routes**: API routes are defined in `routes/chatbot.routes.js` and `routes/quizRoutes.js`.
- **Server Setup**: The Express server is set up in `server.js`.

## Frontend

### Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Axios**: A promise-based HTTP client for making API requests.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

### Setup
1. Navigate to the `vite-project` directory.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```

### Components
- **Chatbot.jsx**: Handles user interactions with the chatbot. It sends user messages to the backend and displays the chatbot's responses.
- **Explore.jsx**: Displays the explore page where users can browse different subjects and units.
- **Subject.jsx**: Displays a list of subjects available for study.
- **UnitPage.jsx**: Displays units within a subject, including video lectures and quizzes.
- **ContentPage.jsx**: Displays content for a specific unit, such as text, images, and videos.
- **Homepage.jsx**: Displays the homepage with an overview of the platform.
- **video/VideoPlaylist.jsx**: Displays a playlist of video lectures for a unit.
- **quiz/QuizPage.jsx**: Displays quiz questions and handles quiz submissions.
- **ScrollToTop.jsx**: Scrolls the page to the top on route change.

### Detailed Explanation
- **App Component**: The main component that sets up routing in `src/App.jsx`.
- **Chatbot Component**: Manages chatbot interactions in `src/components/Chatbot.jsx`. It uses Axios to send user messages to the backend and display the responses.
- **Quiz Page Component**: Manages quiz interactions in `src/components/quiz/QuizPage.jsx`. It fetches quiz questions from the backend and submits user answers.
- **Video Playlist Component**: Displays video lectures in `src/components/video/VideoPlaylist.jsx`. It organizes videos by units and subjects.

## Use Cases
1. **Chatbot Interaction**: Users can interact with a chatbot to get answers to their questions. The chatbot uses natural language processing to understand user queries and provide relevant responses.
2. **Quiz Management**: Users can take quizzes and their results are saved to the database. The quizzes are organized by subjects and units.
3. **Video Lectures**: Users can view video lectures organized by units and subjects. The video lectures provide a comprehensive learning experience.

## Conclusion
STRUCT {STUDIES} is a comprehensive student management system that integrates various academic functionalities. This README provides an overview of the project structure, technologies used, setup instructions, and detailed explanations of the codebase. The system aims to provide a seamless and interactive learning experience for students.
