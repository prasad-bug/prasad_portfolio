import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Resume from "./components/Resume";
import './index.scss';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
