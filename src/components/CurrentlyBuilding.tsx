import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faNetworkWired, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

// ─── EDIT THIS ARRAY to add, remove, or update entries ───────────────────────
interface BuildingEntry {
  icon: typeof faCloud;        // any FontAwesome solid icon
  title: string;               // bold card heading
  subtitle: string;            // smaller tag line (tech stack / category)
  description: string;         // body text
  date: string;                // date label shown beside the node
}

const currentlyBuilding: BuildingEntry[] = [
  {
    icon: faCloud,
    title: "Kubernetes & DevOps Practices",
    subtitle: "Docker • Kubernetes • Helm • GitOps",
    description:
      "Deepening hands-on knowledge of Kubernetes orchestration patterns, Helm chart authoring, and GitOps workflows using ArgoCD. Focused on production-grade cluster reliability, rolling deployments, and infrastructure-as-code practices.",
    date: "2026 — Present",
  },
  {
    icon: faNetworkWired,
    title: "Distributed Systems Design",
    subtitle: "Consensus • Event-Driven • CAP Theorem",
    description:
      "Systematically studying consensus algorithms (Raft, Paxos), event-driven architectures, partition tolerance trade-offs, and fault-tolerant messaging patterns. Applying theory through simulations and benchmarking projects.",
    date: "2026 — Present",
  },
  {
    icon: faTerminal,
    title: "Systems & Low-Level Programming",
    subtitle: "Linux Internals • C • Networking",
    description:
      "Exploring Linux internals, kernel concepts, socket programming, and low-level systems topics to build stronger foundations in how modern cloud and distributed infrastructure actually works under the hood.",
    date: "2026 — Present",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

// Shared card style — same white card look as Timeline.tsx
const CARD_STYLE    = { background: 'white', color: 'rgb(39, 40, 34)' };
const ARROW_STYLE   = { borderRight: '7px solid white' };
const ICON_STYLE    = { background: '#7C3AED', color: 'white' };

function CurrentlyBuilding() {
  return (
    <div id="currently-building">
      <div className="items-container">
        <h1>Currently Building</h1>
        <VerticalTimeline>
          {currentlyBuilding.map((entry) => (
            <VerticalTimelineElement
              key={entry.title}
              className="vertical-timeline-element--work"
              contentStyle={CARD_STYLE}
              contentArrowStyle={ARROW_STYLE}
              date={entry.date}
              iconStyle={ICON_STYLE}
              icon={<FontAwesomeIcon icon={entry.icon} />}
            >
              <h3 className="vertical-timeline-element-title">{entry.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{entry.subtitle}</h4>
              <p>{entry.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default CurrentlyBuilding;
