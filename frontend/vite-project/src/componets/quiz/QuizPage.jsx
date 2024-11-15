import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar2 from "../Navbar2";
import Footer from "../homepage/Footer";

const questionSets = {
    "1": [
        { id: 1, question: "what is your name?", options: ["A", "B", "C", "D"], answer: "A" },
        { id: 2, question: "Unit 1 Question 2", options: ["A", "B", "C", "D"], answer: "B" },
    ],
    "2": [
        { id: 1, question: "Unit 2 Question 1", options: ["A", "B", "C", "D"], answer: "C" },
        { id: 2, question: "Unit 2 Question 2", options: ["A", "B", "C", "D"], answer: "D" },
    ],
    "3": [
      { id: 1, question: "Unit 2 Question 1", options: ["A", "B", "C", "D"], answer: "C" },
      { id: 2, question: "Unit 2 Question 2", options: ["A", "B", "C", "D"], answer: "D" },
  ],
  "4": [
    { id: 1, question: "Unit 2 Question 1", options: ["A", "B", "C", "D"], answer: "C" },
    { id: 2, question: "Unit 2 Question 2", options: ["A", "B", "C", "D"], answer: "D" },
],
"5": [
  { id: 1, question: "Unit 2 Question 1", options: ["A", "B", "C", "D"], answer: "C" },
  { id: 2, question: "Unit 2 Question 2", options: ["A", "B", "C", "D"], answer: "D" },
],
};

function QuizPage() {
    const { unitId } = useParams();
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(null);

    const questions = questionSets[unitId] || [];

    const handleAnswerChange = (questionId, answer) => {
        setUserAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
        }));
    };

    const handleSubmit = () => {
        let calculatedScore = 0;
        questions.forEach((question) => {
            if (userAnswers[question.id] === question.answer) {
                calculatedScore++;
            }
        });
        setScore(calculatedScore);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar2 />

            {/* Main Content Area with gradient background */}
            <div
                className="flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500  p-4 flex-1 mt-16"
            >
                <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg max-w-xl w-full mx-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-black">Unit {unitId} Assignment Quiz</h2>

                    {questions.length > 0 ? (
                        questions.map((question) => (
                            <div key={question.id} className="question-card mb-6">
                                <p className="text-lg font-semibold text-black">{question.question}</p>
                                <div className="options grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                                    {question.options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleAnswerChange(question.id, option)}
                                            className={`p-2 rounded-lg border ${
                                                userAnswers[question.id] === option
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-green-400 text-black"
                                            }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-red-500 font-semibold">No questions available for this unit.</p>
                    )}

                    <button
                        onClick={handleSubmit}
                        className="mt-6 p-3 w-full bg-green-500 text-white rounded-lg font-semibold"
                    >
                        Submit Quiz
                    </button>

                    {score !== null && (
                        <div className="mt-4 text-center">
                            <p className="text-xl font-bold text-black">
                                Your Score: {score} / {questions.length}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default QuizPage;