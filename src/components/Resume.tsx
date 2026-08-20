import React from "react";
import { Link } from "react-router-dom";
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import '../assets/styles/Resume.scss';

const PROJECTS = [
  {
    name: "EarthCore — Full-Stack Cloud-Native Application",
    link: "https://github.com/prasad-bug/earthcore",
    description:
      "Built a full-stack web application with separate frontend and backend services, containerized with Docker and orchestrated using Kubernetes (k8s manifests). Set up an automated CI/CD pipeline with Jenkins and local multi-container orchestration via Docker Compose.",
  },
  {
    name: "ChatLink — Decentralized P2P Secure Messenger",
    link: "https://github.com/prasad-bug/chatlink-p2p",
    description:
      "Developed a peer-to-peer encrypted messaging platform in Python featuring Kademlia-style DHT peer discovery, X3DH key agreement, Double Ratchet end-to-end encryption, vector clocks for causal ordering, and a store-and-forward relay server for offline delivery.",
  },
  {
    name: "Discord-Scale Sharding Simulation",
    link: "https://github.com/prasad-bug/Discord_Sharding",
    description:
      "Simulated a Discord-like chat platform under viral traffic spikes to study distributed systems trade-offs. Implemented and benchmarked user-based, channel-based, and hash-based sharding strategies with hotspot detection and resharding-impact analysis.",
  },
  {
    name: "LogiFly Smart Drone Analytics — Case Study",
    link: "https://github.com/prasad-bug/LogiFly-Drone-Analytics",
    description:
      "Built a Streamlit dashboard and Jupyter notebook analyzing the ROI and business impact of drone-based warehouse logistics, including synthetic data simulation, financial/payback-period modeling, and CRM impact analysis.",
  },
];

const SKILLS: { label: string; value: string }[] = [
  { label: "Programming", value: "Python, Java, JavaScript, SQL" },
  { label: "Web Fundamentals", value: "HTML, CSS, Responsive Design, DOM Manipulation" },
  { label: "Cloud & DevOps Basics", value: "AWS (EC2, S3), Docker, Kubernetes, Jenkins CI/CD" },
  { label: "Databases", value: "MySQL, Basic PostgreSQL, SQLite" },
  { label: "Operating Systems", value: "Linux Basics, File System, Permissions, Networking Fundamentals" },
  { label: "Tools", value: "Git, GitHub, VS Code, Linux Terminal" },
  { label: "Core Subjects", value: "OOP, Data Structures, Distributed Systems (Basics), Computer Networks, Operating Systems" },
];

function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-toolbar no-print">
        <Link to="/" className="back-link">
          <ArrowBackIcon fontSize="small" />
          Back to portfolio
        </Link>
        <button className="print-btn" onClick={() => window.print()}>
          <PrintOutlinedIcon fontSize="small" />
          Print / Save PDF
        </button>
      </div>

      <div className="resume-sheet">
        <header className="resume-header">
          <h1>Prasad Ganesh Bhad</h1>
          <p className="tagline">Full Stack Engineer | Aspiring Cloud Engineer | CSE Student</p>
          <div className="contact-row">
            <a href="mailto:prasadbhad514@gmail.com">
              <EmailOutlinedIcon fontSize="small" /> prasadbhad514@gmail.com
            </a>
            <a href="tel:+919541441150">
              <PhoneOutlinedIcon fontSize="small" /> +91-9541441150
            </a>
            <a href="https://github.com/prasad-bug" target="_blank" rel="noreferrer">
              <GitHubIcon fontSize="small" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/prasad-bhad-918068312/" target="_blank" rel="noreferrer">
              <LinkedInIcon fontSize="small" /> LinkedIn
            </a>
          </div>
        </header>

        <section className="resume-section">
          <h2>Career Objective</h2>
          <p>
            Aspiring Cloud Engineer with strong interest in cloud infrastructure, Linux systems, and
            scalable computing environments. Motivated to build a solid foundation in AWS, networking,
            and DevOps practices while gaining hands-on experience through projects and cloud-based labs.
          </p>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="edu-row">
            <div>
              <h3>ITM Skills University</h3>
              <p className="muted">B.Tech in Computer Science Engineering; CGPA: 8.9</p>
            </div>
            <div className="edu-meta">
              <p>India</p>
              <p className="muted">2024 – 2028</p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <div className="skill-row" key={skill.label}>
                <span className="skill-label">{skill.label}:</span>
                <span className="skill-value">{skill.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          <p>
            Fresher. Actively developing technical skills through academic coursework, cloud labs, and
            self-driven projects. Focused on building a strong foundation in cloud infrastructure, Linux
            systems, and distributed systems, with working knowledge of DevOps practices including Docker,
            Kubernetes, and Jenkins CI/CD pipelines gained through hands-on project work.
          </p>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>
          <ul className="project-list">
            {PROJECTS.map((project) => (
              <li key={project.name}>
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <a href={project.link} target="_blank" rel="noreferrer">GitHub</a>
                </div>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
