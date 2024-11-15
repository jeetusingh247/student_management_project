// ContentPage.js
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./homepage/Footer";

function ContentPage() {
    const { unitId } = useParams();
    const navigate = useNavigate();

  const contentOptions = [
    { id: 1, name: "PYQ" },
    { id: 2, name: "Video" },
    { id: 3, name: "Syllabus" },
    { id: 4, name: "Assessment" },
  ];

    const handleContentClick = (content) => {
        if (content.name === "Video") {
            navigate(`/explore/semester4/subject1/unit/${unitId}/video`);
        }
        // Add more routing for other content types like PYQ, Syllabus, etc.
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar2 />
            <div className="logo-header flex flex-col md:flex-row items-center justify-center mt-16 mb-8">
                <img
                    src="/Assets/logo.png"
                    alt="Website Logo"
                    className="logo mb-4 md:mb-0 md:mr-4 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
                />
                <h4 className="text-lg md:text-2xl font-semibold text-center md:text-left md:ml-8">
                    Select the content type you want to explore for Unit {unitId}…
                </h4>
            </div>
            <h2 className="text-center text-3xl font-bold my-4">Unit {unitId} - Content</h2>
            <div className="content-cards grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                {contentOptions.map((content) => (
                    <div
                        key={content.id}
                        className={`content-card p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white`}
                        onClick={() => handleContentClick(content)}
                    >
                        <h3 className="text-xl font-semibold mb-2">{content.name}</h3>
                    </div>
                ))}
            </div>
            <Footer />
            <style jsx>{`
                .logo-header {
                    padding: 20px;
                    text-align: center;
                }
                @media (max-width: 768px) {
                    .content-card {
                        flex: 1 1 calc(50% - 20px);
                    }
                }
                @media (max-width: 480px) {
                    .content-card {
                        flex: 1 1 100%;
                    }
                }
            `}</style>
        </div>
    );
}

export default ContentPage;
