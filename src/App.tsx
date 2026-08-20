import React, { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.scss';

// Code-split each route into its own JS chunk.
// The chunk is fetched only when the user navigates to that route.
const HomePage = lazy(() => import("./components/HomePage"));
const Resume   = lazy(() => import("./components/Resume"));

/** Minimal full-screen loading state shown while a chunk is downloading. */
function ChunkLoader() {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0d1116',
            }}
            aria-busy="true"
            aria-label="Loading page"
        />
    );
}

function App() {
    return (
        <HashRouter>
            <Suspense fallback={<ChunkLoader />}>
                <Routes>
                    <Route path="/"       element={<HomePage />} />
                    <Route path="/resume" element={<Resume />}   />
                </Routes>
            </Suspense>
        </HashRouter>
    );
}

export default App;
