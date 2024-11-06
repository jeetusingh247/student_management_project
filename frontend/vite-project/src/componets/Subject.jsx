// ExplorePage.js
import React from "react";


function Subject() {
    // Array to represent the semesters
    const semesters = [
        { id: 1, name: "subject1", contentAvailable: true },
        { id: 2, name: " subject2", contentAvailable: true },
        { id: 3, name: "subject3", contentAvailable: true },
        { id: 4, name: "Subject4", contentAvailable: true },
        { id: 5, name: "Subject 5", contentAvailable: false },
        { id: 6, name: "Semester 6", contentAvailable: false },
       
    ];

    // Function to handle card click
    const handleCardClick = (subject) => {
        if (subject.contentAvailable) {
            alert(`Showing content for ${subject.name}`);
            // Here you can navigate to a detailed page or show more content
        } else {
            alert("Content Available Soon");
        }
    };

    return (
        <div className="explore-page">
            <h2>Select a Subject</h2>
            <div className="subject-cards">
                {Subject.map((subject) => (
                    <div
                        key={subject.id}
                        className="semester-card"
                        onClick={() => handleCardClick(subject)}
                    >
                        {subject.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Subject;
