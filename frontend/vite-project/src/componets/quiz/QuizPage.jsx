import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
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
    // ... other question sets
};

function QuizPage() {
    const { unitId } = useParams();
    const location = useLocation();
    const [userName, setUserName] = useState(location.state?.name || ""); // Retrieve the name from location state
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [semester, setSemester] = useState("semester4");
    const [subject, setSubject] = useState("subject1");

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

        // Send the data to the backend
        const quizResult = {
            name: userName,
            marks: calculatedScore,
            semester,
            subject,
            unit: unitId,
            subjectId: subject,
        };

        // POST request to save the data
        fetch("http://localhost:5000/api/quiz/saveQuizResult", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(quizResult),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Data saved successfully:", data);
        })
        .catch((error) => {
            console.error("Error saving data:", error);
        });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar2 />
            <div className="flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 flex-1 mt-16">
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
                        className="w-full p-2 bg-blue-500 text-white rounded-lg mt-4"
                    >
                        Submit Quiz
                    </button>

                    {score !== null && (
                        <div className="mt-4 text-lg font-bold">
                            <p>Your score: {score} out of {questions.length}</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default QuizPage;
