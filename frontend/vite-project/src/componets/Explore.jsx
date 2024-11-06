// ExplorePage.js
import React from "react";
import { useNavigate } from "react-router-dom";

function ExplorePage() {
    const navigate = useNavigate();

    const semesters = [
        { id: 4, name: "Semester 1", contentAvailable: false },
        { id: 4, name: "Semester 2", contentAvailable: false },
        { id: 4, name: "Semester 3", contentAvailable: false },
        { id: 4, name: "Semester 4", contentAvailable: true },
        { id: 4, name: "Semester 5", contentAvailable: false },
        { id: 4, name: "Semester 6", contentAvailable: false },
        { id: 4, name: "Semester 7", contentAvailable: false },
        { id: 4, name: "Semester 8", contentAvailable: false },
       
    ];

    const handleCardClick = (semester) => {
        if (semester.contentAvailable) {
            navigate(`/explore/semester${semester.id}`);
        } else {
            alert("Content Available Soon");
        }
    };

    return (
        <div className="explore-page">
            <h2>Select a Semester</h2>
            <div className="semester-cards">
                {semesters.map((semester) => (
                    <div
                        key={semester.id}
                        className="semester-card"
                        onClick={() => handleCardClick(semester)}
                    >
                        {semester.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExplorePage;
