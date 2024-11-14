// ContentPage.js
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./homepage/Footer";

const ContentPage = () => {
    const navigate = useNavigate();
    const { unitId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");

    const contentOptions = [
        { id: 1, name: "PYQ" },
        { id: 2, name: "Video" },
        { id: 3, name: "Syllabus" },
        { id: 4, name: "Assignment" },
    ];

    const handleContentClick = (content) => {
        if (content.name === "Assignment") {
            setIsModalOpen(true); // Open modal on "Assignment" click
        } else if (content.name === "Video") {
            navigate(`/explore/semester4/subject1/unit/${unitId}/video`);
        }
    };

    const startQuiz = () => {
        setIsModalOpen(false);
        navigate(`/explore/semester4/subject1/unit/${unitId}/assignment`, { state: { name } });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar2 />
            <div className="flex flex-col items-center mt-16 mb-8">
                <h2 className="text-center text-3xl font-bold my-4">Unit {unitId} - Content</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                    {contentOptions.map((content) => (
                        <div
                            key={content.id}
                            className="p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white"
                            onClick={() => handleContentClick(content)}
                        >
                            <h3 className="text-xl font-semibold mb-2">{content.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white rounded-lg p-6 w-80">
                        <h2 className="text-2xl font-bold mb-4 text-center">Enter Your Name</h2>
                        <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={startQuiz}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                disabled={!name.trim()}
                            >
                                Start Quiz
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default ContentPage;
