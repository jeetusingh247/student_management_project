// ContentPage.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContentPage() {
    const { unitId } = useParams();
    const navigate = useNavigate();

    const contentOptions = [
        { id: 1, name: "PYQ" },
        { id: 2, name: "Video" },
        { id: 3, name: "Syllabus" },
        { id: 4, name: "Assignment" },
    ];

    const handleContentClick = (content) => {
        if (content.name === "Video") {
            navigate(`/explore/semester4/subject1/unit/${unitId}/video`);
        }
        // Add more routing for other content types like PYQ, Syllabus, etc.
    };

    return (
        <div className="content-page">
            <h2>Unit {unitId} - Content</h2>
            <div className="content-cards">
                {contentOptions.map((content) => (
                    <div
                        key={content.id}
                        className="content-card"
                        onClick={() => handleContentClick(content)}
                    >
                        {content.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContentPage;
