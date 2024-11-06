// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExplorePage from "./componets/Explore";
import SubjectsPage from "./componets/Subject";
import UnitsPage from "./componets/UnitPage";
import ContentPage from "./componets/ContentPage";
import {Homepage} from "./componets/Homepage";
import './App.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/explore/semester4" element={<SubjectsPage />} />
                <Route path="/explore/semester4/subject1" element={<UnitsPage />} />
                <Route path="/explore/semester4/subject1/unit/:unitId" element={<ContentPage />} />
            </Routes>
        </Router>
    );
}

export default App;
