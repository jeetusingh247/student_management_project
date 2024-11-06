// ExploreButton.js
import React from "react";

const ExploreButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
            Explore
        </button>
    );
};

export default ExploreButton;
