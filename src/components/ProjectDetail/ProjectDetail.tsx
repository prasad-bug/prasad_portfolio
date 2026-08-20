import React, { useEffect, useCallback } from 'react';
import { CaseStudy } from '../../data/projectCaseStudies';
import './ProjectDetail.css';

interface Props {
  study: CaseStudy;
  onClose: () => void;
}

const GitHubIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const isTodo = (text: string) => text.startsWith('TODO');

const ProjectDetail: React.FC<Props> = ({ study, onClose }) => {
  // Close on Escape key
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    // Prevent body scroll while modal is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prev;
    };
  }, [handleKey]);

  return (
    <div
      className="pd-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pd-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="pd-panel">
        {/* Close button */}
        <button
          className="pd-close"
          onClick={onClose}
          aria-label="Close case study"
        >
          <CloseIcon />
        </button>

        {/* Header */}
        <header className="pd-header">
          <h2 id="pd-title" className="pd-title">
            {study.title}
          </h2>
          <p className="pd-blurb">{study.blurb}</p>
          <div className="pd-tags">
            {study.tags.map((tag) => (
              <span className="pd-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        <hr className="pd-divider" />

        {/* Case-study sections */}
        <div className="pd-sections">
          {study.sections.map((sec) => (
            <section className="pd-section" key={sec.heading}>
              <h3 className="pd-section-heading">{sec.heading}</h3>
              <p
                className={
                  isTodo(sec.body)
                    ? 'pd-section-body pd-section-body-todo'
                    : 'pd-section-body'
                }
              >
                {sec.body}
              </p>
            </section>
          ))}
        </div>

        {/* Footer CTA */}
        <footer className="pd-footer">
          <a
            href={study.github}
            target="_blank"
            rel="noreferrer"
            className="pd-github-btn"
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ProjectDetail;
