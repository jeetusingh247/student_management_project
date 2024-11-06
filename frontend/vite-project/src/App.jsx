// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./componets/Homepage";
import ExplorePage from "./componets/Explore";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/explore" element={<ExplorePage />} />
            </Routes>
        </Router>
    );
}

export default App;
