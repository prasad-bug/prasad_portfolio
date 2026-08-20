import React from "react";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

interface ProjectData {
    title: string;
    blurb: string;
    tags: string[];
    github: string;
    image: string;
}

const projects: ProjectData[] = [
    {
        title: "EarthCore",
        blurb: "Full-stack cloud-native app orchestrated with Docker, Kubernetes, and Jenkins CI/CD pipelines.",
        tags: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Microservices"],
        github: "https://github.com/prasad-bug/earthcore",
        image: mock10,
    },
    {
        title: "ChatLink",
        blurb: "P2P encrypted messenger in Python with DHT peer discovery and Double Ratchet encryption.",
        tags: ["Python", "DHT", "Double Ratchet", "Cryptography", "P2P"],
        github: "https://github.com/prasad-bug/chatlink-p2p",
        image: mock07,
    },
    {
        title: "Discord-Scale Sharding Simulation",
        blurb: "Distributed systems project benchmarking sharding strategies at Discord-scale concurrency.",
        tags: ["Distributed Systems", "Sharding", "Python", "Benchmarking"],
        github: "https://github.com/prasad-bug/Discord_Sharding",
        image: mock09,
    },
    {
        title: "LogiFly Smart Drone Analytics",
        blurb: "Streamlit/Jupyter ROI analysis case study for autonomous drone logistics and telemetry.",
        tags: ["Streamlit", "Jupyter", "Python", "Data Science", "ROI Analysis"],
        github: "https://github.com/prasad-bug/LogiFly-Drone-Analytics",
        image: mock08,
    },
];

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((proj) => (
                    <div className="project" key={proj.title}>
                        <a href={proj.github} target="_blank" rel="noreferrer">
                            <img src={proj.image} className="zoom" alt={`${proj.title} thumbnail`} width="100%" />
                        </a>
                        <a href={proj.github} target="_blank" rel="noreferrer">
                            <h2>{proj.title}</h2>
                        </a>
                        <p>{proj.blurb}</p>
                        <div className="project-tags">
                            {proj.tags.map((tag) => (
                                <span className="project-tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;