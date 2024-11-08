import React from "react";

const ExploreButton = ({ onClick }) => {
    return (
        <div id="explore" className="flex flex-col items-center text-center px-6 py-10">
            <br />
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
           Discover What's Waiting for You – Click to Explore
           <br /><br />
            </h2>
            
            <button
                onClick={onClick}
                className="px-10 py-6 bg-green-600 text-white text-3xl rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out mb-6  
                  transform hover:scale-105"
            >
                Explore
            </button>
            <br />
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
                Start by selecting your semester, followed by the subjects you're studying. Once you've chosen a subject, explore its 5 units and select the one you're interested in. For each unit, you'll have access to structured videos, downloadable notes, previous year question PDFs, and more resources to help you study effectively. Everything you need, all in one place, to guide you through your learning journey.
            </p>
        </div>
    );
};

export default ExploreButton;
