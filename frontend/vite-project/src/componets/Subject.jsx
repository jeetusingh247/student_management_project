// SubjectsPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

function SubjectsPage() {
    const navigate = useNavigate();

    const subjects = [
        { id: 1, name: "Subject 1", contentAvailable: true },
        { id: 2, name: "Subject 2", contentAvailable: false },
        { id: 3, name: "Subject 3", contentAvailable: false },
        { id: 4, name: "Subject 4", contentAvailable: false },
        { id: 5, name: "Subject 5", contentAvailable: false },
    ];

    const handleCardClick = (subject) => {
        if (subject.contentAvailable) {
            navigate(`/explore/semester4/subject${subject.id}`);
        } else {
            alert("Content Available Soon");
        }
    };

    return (
        <div className="subjects-page">
            <h2>Semester 4 - Subjects</h2>
            <div className="subject-cards">
                {subjects.map((subject) => (
                    <div
                        key={subject.id}
                        className="subject-card"
                        onClick={() => handleCardClick(subject)}
                    >
                        {subject.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SubjectsPage;
