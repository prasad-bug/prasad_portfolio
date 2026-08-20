export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  github: string;
  sections: CaseStudySection[];
}

const caseStudies: CaseStudy[] = [
  {
    slug: "earthcore",
    title: "EarthCore",
    blurb:
      "Full-stack cloud-native app orchestrated with Docker, Kubernetes, and Jenkins CI/CD pipelines.",
    tags: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Microservices"],
    github: "https://github.com/prasad-bug/earthcore",
    sections: [
      {
        heading: "Problem",
        body:
          "TODO — Describe the core problem EarthCore solves. What pain point or gap existed before the project? Who is the target user or system? What scale or performance requirements drove the design decisions?",
      },
      {
        heading: "Approach",
        body:
          "TODO — Walk through your solution strategy. Why did you choose Docker and Kubernetes over alternatives? How were microservices decomposed? Outline the key engineering trade-offs you made and why.",
      },
      {
        heading: "Architecture",
        body:
          "TODO — Describe the system topology: services, their responsibilities, inter-service communication (REST / gRPC / message queue), data stores, and how the Jenkins CI/CD pipeline automates build → test → deploy. A diagram or ASCII art is welcome here.",
      },
      {
        heading: "What I Learned",
        body:
          "TODO — Reflect on the most valuable technical and non-technical lessons. What would you do differently with hindsight? What concepts from this project have you carried into subsequent work?",
      },
    ],
  },
  {
    slug: "chatlink",
    title: "ChatLink",
    blurb:
      "P2P encrypted messenger in Python with DHT peer discovery and Double Ratchet encryption.",
    tags: ["Python", "DHT", "Double Ratchet", "Cryptography", "P2P"],
    github: "https://github.com/prasad-bug/chatlink-p2p",
    sections: [
      {
        heading: "Problem",
        body:
          "TODO — Explain the motivation for a decentralised, end-to-end encrypted messenger. What limitations of existing centralised systems prompted this? Who are the intended users, and what threat model does ChatLink address?",
      },
      {
        heading: "Approach",
        body:
          "TODO — Describe how you chose DHT for peer discovery and the Double Ratchet algorithm for forward-secret message encryption. What libraries did you use, or did you implement cryptographic primitives yourself? How is key exchange bootstrapped?",
      },
      {
        heading: "Architecture",
        body:
          "TODO — Outline the peer network: how nodes join and leave the DHT ring, how messages are routed between peers without a central server, and how the Double Ratchet ratchets session keys forward with each message.",
      },
      {
        heading: "What I Learned",
        body:
          "TODO — What did building a cryptographic protocol from first principles teach you about applied cryptography, network programming, and distributed systems? What edge cases (NAT traversal, node churn, replay attacks) proved most challenging?",
      },
    ],
  },
  {
    slug: "discord-sharding",
    title: "Discord-Scale Sharding Simulation",
    blurb:
      "Distributed systems project benchmarking sharding strategies at Discord-scale concurrency.",
    tags: ["Distributed Systems", "Sharding", "Python", "Benchmarking"],
    github: "https://github.com/prasad-bug/Discord_Sharding",
    sections: [
      {
        heading: "Problem",
        body:
          "TODO — What specific scalability bottleneck does database sharding solve? Explain the Discord-scale context: millions of concurrent users, high write throughput, and low-latency reads. What made naive vertical scaling insufficient?",
      },
      {
        heading: "Approach",
        body:
          "TODO — Which sharding strategies did you benchmark (range, hash, consistent hashing, etc.)? How did you simulate Discord-like workloads? Describe the experiment design and the metrics you chose to measure (latency percentiles, throughput, hotspot rate).",
      },
      {
        heading: "Architecture",
        body:
          "TODO — Describe the simulation architecture: how shard nodes are represented, how the routing layer directs reads/writes, and how you instrumented the system to collect benchmark data. Include any tooling (locust, custom scripts, dashboards).",
      },
      {
        heading: "What I Learned",
        body:
          "TODO — Summarise the benchmark results. Which strategy won and under which conditions? What surprised you? What would you build next — replication, resharding without downtime, cross-shard transactions?",
      },
    ],
  },
  {
    slug: "logifly",
    title: "LogiFly Smart Drone Analytics",
    blurb:
      "Streamlit/Jupyter ROI analysis case study for autonomous drone logistics and telemetry.",
    tags: ["Streamlit", "Jupyter", "Python", "Data Science", "ROI Analysis"],
    github: "https://github.com/prasad-bug/LogiFly-Drone-Analytics",
    sections: [
      {
        heading: "Problem",
        body:
          "TODO — What business problem does drone-based logistics analytics address? Who is the stakeholder (logistics company, supply chain analyst)? What data was available, and what decisions should the analysis inform?",
      },
      {
        heading: "Approach",
        body:
          "TODO — Describe the analytical methodology: data cleaning, feature engineering, the ROI model, and how you validated assumptions. Why was Streamlit chosen for the interactive dashboard over alternatives like Dash or a static Jupyter export?",
      },
      {
        heading: "Architecture",
        body:
          "TODO — Walk through the data pipeline: raw telemetry ingestion → preprocessing → feature store → Jupyter analysis notebook → Streamlit dashboard. How are artifacts versioned and shared? What is the refresh cadence?",
      },
      {
        heading: "What I Learned",
        body:
          "TODO — What insights did the ROI analysis surface? What data-quality challenges did you encounter? How did presenting the findings via an interactive app change stakeholder engagement compared to a static report?",
      },
    ],
  },
];

export default caseStudies;
