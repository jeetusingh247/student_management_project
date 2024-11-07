import React from "react";

const ExploreButton = ({ onClick }) => {
    return (
        <div id="explore" className="flex flex-col items-center text-center px-6 py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
           Discover What's Waiting for You – Click toExplore
            </h2>
            
            <button
                onClick={onClick}
                className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out mb-6"
            >
                Explore
            </button>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
                Start by selecting your semester, followed by the subjects you're studying. Once you've chosen a subject, explore its 5 units and select the one you're interested in. For each unit, you'll have access to structured videos, downloadable notes, previous year question PDFs, and more resources to help you study effectively. Everything you need, all in one place, to guide you through your learning journey.
            </p>
        </div>
    );
};

export default ExploreButton;
