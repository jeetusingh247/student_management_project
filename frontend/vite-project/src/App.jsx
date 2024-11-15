// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import ExplorePage from "./componets/Explore";
import SubjectsPage from "./componets/Subject";
import UnitsPage from "./componets/UnitPage";
import ContentPage from "./componets/ContentPage";
import { Homepage } from "./componets/Homepage";

import './App.css';
import VideoPlaylist from "./componets/video/VideoPlaylist"; // Ensure path is correct

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/explore/semester4" element={<SubjectsPage />} />
                <Route path="/explore/semester4/subject1" element={<UnitsPage />} />
                <Route path="/explore/semester4/subject1/unit/:unitId" element={<ContentPage />} />
                {/* <Route path="/assessment" element={<AssessmentPage />} /> Add the route for AssessmentPage */}
                
                {/* Pass unitId from URL to VideoPlaylist component */}
                <Route 
                    path="/explore/semester4/subject1/unit/:unitId/video" 
                    element={<VideoPlaylistWithUnitId />} 
                />
            </Routes>
        </Router>
    );
}

const VideoPlaylistWithUnitId = () => {
    const { unitId } = useParams(); // Extract unitId from the URL
    return <VideoPlaylist selectedUnit={parseInt(unitId)} />;
}

export default App;
