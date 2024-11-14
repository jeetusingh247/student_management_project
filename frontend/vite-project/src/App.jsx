// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import ExplorePage from "./componets/Explore";
import SubjectsPage from "./componets/Subject";
import UnitsPage from "./componets/UnitPage";
import ContentPage from "./componets/ContentPage";
import { Homepage } from "./componets/Homepage";
import VideoPlaylist from "./componets/video/VideoPlaylist";
; // Import the QuizPage component

import './App.css';
import QuizPage from "./componets/quiz/QuizPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/explore/semester4" element={<SubjectsPage />} />
                <Route path="/explore/semester4/subject1" element={<UnitsPage />} />
                <Route path="/explore/semester4/subject1/unit/:unitId" element={<ContentPage />} />

                {/* Video route */}
                <Route 
                    path="/explore/semester4/subject1/unit/:unitId/video" 
                    element={<VideoPlaylistWithUnitId />} 
                />

                {/* New Quiz route for assignments */}
                <Route 
                    path="/explore/semester4/subject1/unit/:unitId/assignment" 
                    element={<QuizPageWithUnitId />} 
                />
            </Routes>
        </Router>
    );
}

// Wrapper for VideoPlaylist to pass unitId from URL
const VideoPlaylistWithUnitId = () => {
    const { unitId } = useParams();
    return <VideoPlaylist selectedUnit={parseInt(unitId)} />;
}

// Wrapper for QuizPage to pass unitId from URL
const QuizPageWithUnitId = () => {
    const { unitId } = useParams();
    return <QuizPage unitId={parseInt(unitId)} />;
}

export default App;
