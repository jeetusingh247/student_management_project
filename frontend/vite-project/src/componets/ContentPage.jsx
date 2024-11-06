// ContentPage.js
import React from "react";
import { useParams } from "react-router-dom";

function ContentPage() {
    const { unitId } = useParams();

    const contentOptions = [
        { id: 1, name: "PYQ" },
        { id: 2, name: "Video" },
        { id: 3, name: "Syllabus" },
        { id: 4, name: "Assignment" },
    ];

    return (
        <div className="content-page">
            <h2>Unit {unitId} - Content</h2>
            <div className="content-cards">
                {contentOptions.map((content) => (
                    <div key={content.id} className="content-card">
                        {content.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContentPage;
