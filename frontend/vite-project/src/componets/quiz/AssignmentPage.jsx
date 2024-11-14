import React, { useState } from "react";
import Question from "./Question";

const questions = [
  {
    id: 1,
    questionText: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris", // Specify the correct answer
  },
  {
    id: 2,
    questionText: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars", // Specify the correct answer
  },
  // Add more questions as needed
];

function AssignmentPage({ userName, onQuizFinish }) {
  const [answers, setAnswers] = useState({});

  // Function to handle when an answer is selected
  const handleAnswerSelect = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption, // Store the selected answer for each question
    }));
  };

  // Function to handle quiz submission
  const handleSubmit = () => {
    // Calculate the score by comparing each selected answer with the correct answer
    const score = questions.reduce((total, question) => {
      if (answers[question.id] === question.correctAnswer) {
        return total + 1; // Add 1 point if the answer is correct
      }
      return total; // No points if the answer is incorrect
    }, 0);

    onQuizFinish(score); // Pass the score to the parent component
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Hello, {userName}! Let's start the quiz.</h2>
      {questions.map((question) => (
        <Question
          key={question.id}
          questionId={question.id}
          questionText={question.questionText}
          options={question.options}
          onAnswerSelect={handleAnswerSelect}
        />
      ))}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white px-6 py-2 mt-4 rounded hover:bg-blue-600"
      >
        Submit Quiz
      </button>
    </div>
  );
}

export default AssignmentPage;
