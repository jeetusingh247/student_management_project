// ExplorePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./homepage/Navbar";
import Footer from "./homepage/Footer";

function ExplorePage() {
    const navigate = useNavigate();

    const semesters = [
        { id: 1, name: "Semester 1", contentAvailable: false },
        { id: 2, name: "Semester 2", contentAvailable: false },
        { id: 3, name: "Semester 3", contentAvailable: false },
        { id: 4, name: "Semester 4", contentAvailable: true },
        { id: 5, name: "Semester 5", contentAvailable: false },
        { id: 6, name: "Semester 6", contentAvailable: false },
        { id: 7, name: "Semester 7", contentAvailable: false },
        { id: 8, name: "Semester 8", contentAvailable: false },
    ];

    const handleCardClick = (semester) => {
        if (semester.contentAvailable) {
            navigate(`/explore/semester${semester.id}`);
        } else {
            alert("Content Available Soon");
        }
    };

    return (
        <div>
            <Navbar />
            <div style={{ 
                padding: "40px", 
                textAlign: "center", 
                backgroundColor: "#f9f9f9", 
                minHeight: "60vh"
            }}>
                <h2 style={{ marginTop: "30px", marginBottom: "30px", fontSize: "2.5rem", color: "#333" }}>Select Your Semester</h2>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                    {semesters.map((semester) => (
                        <div
                            key={semester.id}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "12px",
                                padding: "20px",
                                width: "200px",
                                cursor: "pointer",
                                backgroundColor: semester.contentAvailable ? "#4caf50" : "#f44336",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                color: "#fff"
                            }}
                            onClick={() => handleCardClick(semester)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <h3 style={{ margin: "0 0 10px", fontSize: "1.5rem" }}>{semester.name}</h3>
                            <p style={{ margin: "0" }}>
                                {semester.contentAvailable ? "Content Available" : "Content Coming Soon"}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ExplorePage;
