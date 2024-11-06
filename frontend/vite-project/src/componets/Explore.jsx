// ExplorePage.js
import React from "react";


function ExplorePage() {
    // Array to represent the semesters
    const semesters = [
        { id: 1, name: "Semester 1", contentAvailable: true },
        { id: 2, name: "Semester 2", contentAvailable: true },
        { id: 3, name: "Semester 3", contentAvailable: true },
        { id: 4, name: "Semester 4", contentAvailable: true },
        { id: 5, name: "Semester 5", contentAvailable: false },
        { id: 6, name: "Semester 6", contentAvailable: false },
        { id: 7, name: "Semester 7", contentAvailable: false },
        { id: 8, name: "Semester 8", contentAvailable: false },
    ];

    // Function to handle card click
    const handleCardClick = (semester) => {
        if (semester.contentAvailable) {
            alert(`Showing content for ${semester.name}`);
            // Here you can navigate to a detailed page or show more content
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
