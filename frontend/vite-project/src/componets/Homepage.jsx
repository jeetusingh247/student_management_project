// HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate("/explore"); // Navigate to the Explore page
    };

    return (
        <div className="home-page">
            <h1>Welcome to the Home Page</h1>
            <button onClick={handleExploreClick}>Explore</button>
        </div>
    );
}

export default HomePage;
