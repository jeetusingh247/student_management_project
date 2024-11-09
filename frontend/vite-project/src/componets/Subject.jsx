// src/componets/Subject.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2"; // Import Navbar2
import Footer from "./homepage/Footer"; // Import Footer

function SubjectPage() {
  const navigate = useNavigate();

  const subjects = [
    { id: 1, name: "Subject1", contentAvailable: false },
    { id: 2, name: "Subject2", contentAvailable: true },
    { id: 3, name: "Subject3", contentAvailable: true },
    { id: 4, name: "Subject4", contentAvailable: true },
    { id: 5, name: "Subject5", contentAvailable: true },
    { id: 6, name: "Subject6", contentAvailable: true },
    { id: 7, name: "Subject7", contentAvailable: true },
    { id: 8, name: "Subject8", contentAvailable: true },
  ];

  const handleCardClick = (subject) => {
    if(!subject.contentAvailable){
    navigate(`/explore/semester4/subject${subject.id}`);}
    else{
        alert("Content not available for this subject.") // Alert for unavailable content
    }
  };

return (
    <>
        <div>
            <Navbar2 /> {/* Include Navbar2 */}
        </div>
        <div className="subjects-page mt-8"> {/* Added margin-top for spacing */}
            <h2 className="text-3xl font-bold text-center text-black-600 mb-8 mt-12">Semester 4 - Subjects</h2> {/* Added margin-top for more spacing */}
            <div className="subject-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {subjects.map((subject) => (
                    <div
                        key={subject.id}
                        className={`subject-card p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
                        onClick={() => handleCardClick(subject)}
                    >
                        <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                    </div>
                ))}
            </div>
        </div>
        <style jsx>{`
            .subjects-page {
                padding: 20px;
                text-align: center;
            }
            .subject-cards {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
            }
            .subject-card {
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 8px;
                cursor: pointer;
                transition: transform 0.2s, box-shadow 0.2s;
                background-color: #f9f9f9;
                width: calc(25% - 40px); /* Ensure all cards have the same width */
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                background-color: #4caf50; /* Professional white background */
                color: #fffff; /* Professional text color */
            }
            .subject-card:hover {
                transform: scale(1.05);
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                background-color: #e6f7ff; /* Light blue hover background */
            }
            .subject-card h3 {
                color: #fffff; /* Professional blue text color */
            }
            @media (max-width: 768px) {
                .subject-card {
                    width: calc(50% - 40px); /* Ensure all cards have the same width on smaller screens */
                }
            }
            @media (max-width: 480px) {
                .subject-card {
                    width: 100%; /* Ensure all cards have the same width on the smallest screens */
                }
            }
        `}</style>
        <Footer /> {/* Include Footer */}
    </>
);
}

export default SubjectPage;