# STRUCT {STUDIES}

A collaborative project by Saumya Sharma, Shiv Sablok, Prince Kumar Singh, and Jeetu Singh.

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Backend](#backend)
  - [Technologies Used](#technologies-used)
  - [Setup](#setup)
  - [API Endpoints](#api-endpoints)
  - [Detailed Explanation](#detailed-explanation)
- [Frontend](#frontend)
  - [Technologies Used](#technologies-used-1)
  - [Setup](#setup-1)
  - [Components](#components)
  - [Detailed Explanation](#detailed-explanation-1)
- [Use Cases](#use-cases)
- [Conclusion](#conclusion)

## Introduction
STRUCT {STUDIES} is a robust student management system designed to streamline academic activities such as quizzes, video lectures, and chatbot interactions. Developed collaboratively by Saumya Sharma, Shiv Sablok, Prince Kumar Singh, and Jeetu Singh, this project aims to enhance the learning experience through an interactive and user-friendly platform.

## Project Structure
The project is divided into two main components:
1. **Backend**: Handles server-side logic, database interactions, and API endpoints.
2. **Frontend**: Manages the user interface and client-side interactions.

## Backend

### Technologies Used
- **Node.js**: A runtime environment for executing JavaScript on the server.
- **Express.js**: A web application framework for building APIs.
- **MongoDB**: A NoSQL database for storing application data.
- **dotenv**: For managing environment variables securely.
- **Fuse.js**: A library for fuzzy searching.
- **Natural**: A natural language processing library for chatbot functionality.

### Setup
1. Navigate to the `chatbot-backend` directory.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Configure environment variables in a `.env` file:
    ```plaintext
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    ```
4. Start the server:
    ```sh
    npm start
    ```

### API Endpoints
- `POST /api/chatbot`: Processes user messages and returns chatbot responses.
- `POST /api/quiz`: Saves quiz results to the database.

### Detailed Explanation
- **Database Connection**: Configured in `config/db.js` to establish a connection with MongoDB.
- **Chatbot Controller**: Located in `controller/chatbot.controller.js`, it processes user inputs and generates responses using NLP tools like Natural and Fuse.js.
- **Quiz Controller**: Found in `controller/quizController.js`, it handles quiz submissions and stores results in MongoDB.
- **Routes**: API routes are defined in `routes/chatbot.routes.js` and `routes/quizRoutes.js`.
- **Server Setup**: The Express server is initialized in `server.js`.

## Frontend

### Technologies Used
- **React**: A library for building dynamic user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Axios**: For making HTTP requests to the backend.
- **Tailwind CSS**: A utility-first CSS framework for styling.

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
- **Chatbot.jsx**: Manages chatbot interactions and displays responses.
- **Explore.jsx**: Provides an interface for browsing subjects and units.
- **Subject.jsx**: Lists available subjects for study.
- **UnitPage.jsx**: Displays units within a subject, including video lectures and quizzes.
- **ContentPage.jsx**: Shows detailed content for a specific unit.
- **Homepage.jsx**: Serves as the landing page with an overview of the platform.
- **video/VideoPlaylist.jsx**: Displays a playlist of video lectures.
- **quiz/QuizPage.jsx**: Handles quiz interactions and submissions.
- **ScrollToTop.jsx**: Ensures smooth navigation by scrolling to the top on route changes.

### Detailed Explanation
- **App Component**: Configures routing in `src/App.jsx` to manage navigation across the platform.
- **Chatbot Component**: Implements chatbot functionality in `src/components/Chatbot.jsx` using Axios for API communication.
- **Quiz Page Component**: Located in `src/components/quiz/QuizPage.jsx`, it fetches quiz data and handles user submissions.
- **Video Playlist Component**: Found in `src/components/video/VideoPlaylist.jsx`, it organizes and displays video lectures.

## Use Cases
1. **Chatbot Interaction**: Users can ask questions and receive responses from the chatbot, which leverages NLP for understanding queries.
2. **Quiz Management**: Users can participate in quizzes, with results stored in the database for future reference.
3. **Video Lectures**: Users can access video lectures categorized by subjects and units, enhancing their learning experience.

## Conclusion
STRUCT {STUDIES} is a feature-rich student management system that integrates multiple academic functionalities into a cohesive platform. This README provides a detailed overview of the project's structure, technologies, setup instructions, and use cases, highlighting its potential to transform the learning experience.
