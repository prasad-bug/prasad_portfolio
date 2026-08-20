import React, { useEffect, useRef, useState } from "react";
import '../assets/styles/CurrentlyBuilding.scss';

// ─── EDIT THIS ARRAY to update what's shown ───────────────────────────────────
interface BuildingItem {
    emoji: string;
    label: string;
    description: string;
}

const currentlyBuilding: BuildingItem[] = [
    {
        emoji: "⚙️",
        label: "Kubernetes & DevOps",
        description: "Deepening Kubernetes orchestration patterns, Helm charts, and GitOps deployment workflows.",
    },
    {
        emoji: "🔗",
        label: "Distributed Systems Design",
        description: "Exploring consensus algorithms, event-driven architectures, and fault-tolerant messaging systems.",
    },
    {
        emoji: "🤖",
        label: "LLM-Powered Tooling",
        description: "Building developer tools that integrate large language models into real engineering workflows.",
    },
];
// ──────────────────────────────────────────────────────────────────────────────

function CurrentlyBuilding() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Trigger entrance animation once the section scrolls into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="cb-container" ref={sectionRef} id="currently-building">
            <div className="cb-inner">
                <div className="cb-header">
                    <span className="cb-live-dot" aria-hidden="true" />
                    <h2 className="cb-title">Currently Building</h2>
                </div>
                <p className="cb-subtitle">
                    What I'm actively exploring, learning, and shipping right now.
                </p>
                <div className="cb-grid">
                    {currentlyBuilding.map((item, i) => (
                        <div
                            key={item.label}
                            className={`cb-card ${visible ? 'cb-card--visible' : ''}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <span className="cb-card-emoji" aria-hidden="true">
                                {item.emoji}
                            </span>
                            <div className="cb-card-body">
                                <h3 className="cb-card-label">{item.label}</h3>
                                <p className="cb-card-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CurrentlyBuilding;
