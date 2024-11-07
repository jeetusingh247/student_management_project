import React from "react";
import { useNavigate } from "react-router-dom";

 // Import Navbar

import HeroSection from "./homepage/HeroSection";
import Navbar from "./homepage/Navbar";
import ExploreButton from "./homepage/ExploreButton";

export const Homepage = () => {
    

    return (
        <div className="relative">
            <Navbar /> {/* Include Navbar */}
            {/* HeroSection with padding-top to avoid overlap */}
            <div className="pt-20 lg:pt-32"> {/* Adjust the padding-top to match the navbar height */}
                <HeroSection />
            </div>
            {/* Add ExploreButton with enough margin to ensure it's not too close to HeroSection */}
            
        </div>
    );
};
