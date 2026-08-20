import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faServer, faCloud, faUsers } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Technical Journey</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech Computer Science Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Computer Science</h4>
            <p>
              Pursuing a B.Tech in Computer Science Engineering while building practical knowledge across software development, cloud computing, DevOps, and distributed systems.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Full-Stack & Backend Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Development</h4>
            <p>
              Building full-stack and backend applications using technologies such as React, Node.js, Express.js, MongoDB, JavaScript, and REST APIs.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faServer} />}
          >
            <h3 className="vertical-timeline-element-title">DevOps & Cloud Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Docker • Kubernetes • AWS • Jenkins</h4>
            <p>
              Developing hands-on experience with containerization, CI/CD pipelines, cloud infrastructure, deployment automation, Docker, Kubernetes, AWS, Jenkins, Git, and GitHub.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCloud} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud-Native Projects</h3>
            <h4 className="vertical-timeline-element-subtitle">Kubernetes • Docker • CI/CD</h4>
            <p>
              Applying DevOps practices to personal projects (such as EarthCore) through containerized application deployment, Kubernetes orchestration, CI/CD automation, and infrastructure monitoring using tools such as Prometheus and Grafana.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2026 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h3 className="vertical-timeline-element-title">Developer Communities & Technical Learning</h3>
            <h4 className="vertical-timeline-element-subtitle">GitHub • GSoC • Open Source</h4>
            <p>
              Exploring open-source communities, GSoC opportunities, developer communities, industry mentorship, and modern software engineering practices while continuously expanding my technical skills.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;