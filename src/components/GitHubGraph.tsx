import React from "react";
import '../assets/styles/GitHubGraph.scss';

const GITHUB_USERNAME = "prasad-bug";

// Dark-themed contribution calendar (ghchart.rshah.org supports custom themes)
const DARK_CHART_URL =
    `https://ghchart.rshah.org/7c3aed/${GITHUB_USERNAME}`;

// Light-themed via github-readme-stats (white bg, purple commits)
const LIGHT_CHART_URL =
    `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}` +
    `&show_icons=true&theme=default&hide_border=true` +
    `&icon_color=7c3aed&title_color=7c3aed&text_color=0d1116&bg_color=ffffff`;

// Stats card for dark mode
const DARK_STATS_URL =
    `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}` +
    `&show_icons=true&theme=transparent&hide_border=true` +
    `&icon_color=a78bfa&title_color=a78bfa&text_color=ffffff`;

function GitHubGraph() {
    return (
        <div className="gh-section" id="github-activity">
            <div className="gh-inner">
                {/* ── Header ── */}
                <div className="gh-header">
                    <svg className="gh-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
                        0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
                        -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
                        .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
                        -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
                        c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                        0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
                        0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <h2 className="gh-title">GitHub Activity</h2>
                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noreferrer"
                        className="gh-profile-link"
                        aria-label="View GitHub profile"
                    >
                        @{GITHUB_USERNAME} ↗
                    </a>
                </div>

                {/* ── Cards ── */}
                <div className="gh-cards">
                    {/* Contribution calendar */}
                    <div className="gh-card gh-card--graph">
                        <p className="gh-card-label">Contribution Calendar</p>

                        {/* Dark mode graph */}
                        <img
                            className="gh-chart gh-chart--dark"
                            src={DARK_CHART_URL}
                            alt={`${GITHUB_USERNAME} GitHub contribution graph`}
                            loading="lazy"
                        />

                        {/* Light mode graph — same service but different palette */}
                        <img
                            className="gh-chart gh-chart--light"
                            src={`https://ghchart.rshah.org/5000ca/${GITHUB_USERNAME}`}
                            alt={`${GITHUB_USERNAME} GitHub contribution graph`}
                            loading="lazy"
                        />
                    </div>

                    {/* Stats card */}
                    <div className="gh-card gh-card--stats">
                        <p className="gh-card-label">Stats</p>
                        <img
                            className="gh-stats gh-stats--dark"
                            src={DARK_STATS_URL}
                            alt={`${GITHUB_USERNAME} GitHub stats`}
                            loading="lazy"
                        />
                        <img
                            className="gh-stats gh-stats--light"
                            src={LIGHT_CHART_URL}
                            alt={`${GITHUB_USERNAME} GitHub stats`}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GitHubGraph;
