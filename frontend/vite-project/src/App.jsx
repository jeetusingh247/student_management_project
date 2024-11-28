import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import SubjectPage from "./componets/Subject";

import UnitsPage from "./componets/UnitPage"
import ContentPage from "./componets/ContentPage";
import {Homepage} from "./componets/Homepage"
import VideoPlaylist from "./componets/video/VideoPlaylist";
import ScrollToTop from "./componets/ScrollToTop";
import QuizPage from "./componets/quiz/QuizPage";
import Chatbot from "./componets/Chatbot";
import Pdf from "./componets/Pdf";
import ExplorePage from "./componets/Explore";
import './App.css'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/explore" element={<ExplorePage/>} />
                <Route path="/explore/semester4" element={<SubjectPage/>} />
                <Route path="/explore/semester4/subject1" element={<UnitsPage />} />
                <Route path="/explore/semester4/subject1/unit/:unitId" element={<ContentPage />} />
                <Route path="/explore/semester4/subject1/unit/:unitId/video" element={<VideoPlaylistWithUnitId />} />
                <Route path="/explore/semester4/subject1/unit/:unitId/assignment" element={<QuizPageWithUnitId />} />
                <Route path="/explore/semester4/subject1/unit/:unitId/pdf" element={<PdfPageWithUnitId />} />
                <Route path="/explore/semester4/subject1/pyqs" element={<PyqPage />} />
            </Routes>
            <Chatbot />
        </Router>
    );
}

// Wrapper for VideoPlaylist
const VideoPlaylistWithUnitId = () => {
    const { unitId } = useParams();
    return <VideoPlaylist selectedUnit={parseInt(unitId)} />;
};

// Wrapper for QuizPage
const QuizPageWithUnitId = () => {
    const { unitId } = useParams();
    return <QuizPage unitId={parseInt(unitId)} />;
};

// Wrapper for Pdf Component
const PdfPageWithUnitId = () => {
    const { unitId } = useParams();

    // Determine the PDF URL based on the `unitId`
    const pdfUrl =  `/Assets/pdfs/unit-${unitId}.pdf`;
    return <Pdf pdfUrl={pdfUrl} />;
};
const PyqPage = () => {
    const pdfUrl =  `/Assets/pdfs/pyqs.pdf`;
    return <Pdf pdfUrl={pdfUrl} />;
};



export default App;
