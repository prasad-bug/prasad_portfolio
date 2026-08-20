import React from "react";
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/prasad-bug/earthcore" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="EarthCore thumbnail" width="100%"/></a>
                <a href="https://github.com/prasad-bug/earthcore" target="_blank" rel="noreferrer"><h2>EarthCore</h2></a>
                <p>Full-stack and cloud-native application platform built with containerized microservices, Kubernetes orchestration, and automated CI/CD deployment pipelines.</p>
            </div>
            <div className="project">
                <a href="https://github.com/prasad-bug/Discord_Sharding" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="Discord Sharding thumbnail" width="100%"/></a>
                <a href="https://github.com/prasad-bug/Discord_Sharding" target="_blank" rel="noreferrer"><h2>Discord System Sharding</h2></a>
                <p>High-concurrency system architecture implementing database sharding and distributed data partitioning inspired by Discord's messaging infrastructure.</p>
            </div>
            <div className="project">
                <a href="https://github.com/prasad-bug/LogiFly-Drone-Analytics" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="LogiFly Drone Analytics thumbnail" width="100%"/></a>
                <a href="https://github.com/prasad-bug/LogiFly-Drone-Analytics" target="_blank" rel="noreferrer"><h2>LogiFly Drone Analytics</h2></a>
                <p>Telemetry analytics platform for autonomous drone logistics, flight tracking, and delivery route performance analysis using Python and Data Science.</p>
            </div>
            <div className="project">
                <a href="https://github.com/prasad-bug/chatlink-p2p" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="ChatLink P2P thumbnail" width="100%"/></a>
                <a href="https://github.com/prasad-bug/chatlink-p2p" target="_blank" rel="noreferrer"><h2>ChatLink P2P</h2></a>
                <p>Decentralized peer-to-peer encrypted messaging system built with Python, direct socket communication, and cryptographic key exchange.</p>
            </div>
            <div className="project">
                <a href="https://github.com/prasad-bug/aws_project" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="AWS Cloud Infrastructure thumbnail" width="100%"/></a>
                <a href="https://github.com/prasad-bug/aws_project" target="_blank" rel="noreferrer"><h2>AWS Cloud Infrastructure</h2></a>
                <p>Cloud infrastructure automation and deployment project leveraging AWS services (EC2, S3, IAM) with automated cloud hosting setup.</p>
            </div>
            <div className="project">
                <a href="https://github.com/prasad-bug/Css-Animation-Properties-Visual-playground" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="CSS Animation Visual Playground thumbnail" width="100%"/></a>
                <a href="https://github.com/prasad-bug/Css-Animation-Properties-Visual-playground" target="_blank" rel="noreferrer"><h2>CSS Animation Visual Playground</h2></a>
                <p>Interactive web application for real-time visualization, testing, and fine-tuning of CSS keyframe animations and transition properties.</p>
            </div>
            <div className="project">
                <a href="https://github.com/prasad-bug/internet-speed-tester" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="Internet Speed Diagnostic Tool thumbnail" width="100%"/></a>
                <a href="https://github.com/prasad-bug/internet-speed-tester" target="_blank" rel="noreferrer"><h2>Internet Speed Diagnostic Tool</h2></a>
                <p>Network performance diagnostic utility written in Python for real-time measurement of download speed, upload bandwidth, and latency metrics.</p>
            </div>
            <div className="project">
                <a href="https://github.com/prasad-bug/carsWeb" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="CarsWeb Platform thumbnail" width="100%"/></a>
                <a href="https://github.com/prasad-bug/carsWeb" target="_blank" rel="noreferrer"><h2>CarsWeb Platform</h2></a>
                <p>Responsive web application for exploring automotive catalogs with dynamic interactive filtering and modern UI components.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;