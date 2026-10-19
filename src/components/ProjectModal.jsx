import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Zap, ArrowRight, Shield } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Modal Image Showcase */}
        <div className="modal-image-wrapper">
          <img 
            src={project.image} 
            alt={project.title} 
            className="modal-image"
          />
          <div className="modal-category-badge">{project.category}</div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-desc">{project.fullDesc}</p>

          {/* Metrics Grid */}
          <div className="modal-metrics-grid">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="modal-metric-card">
                <span className="modal-metric-value">{metric.value}</span>
                <span className="modal-metric-label">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Key Features & Architecture */}
          <div className="modal-features-section">
            <h4 className="modal-section-title">Key Architectural Features:</h4>
            <div className="modal-features-list">
              {project.features.map((feat, idx) => (
                <div key={idx} className="modal-feature-item">
                  <CheckCircle2 size={18} color="var(--accent-emerald)" className="flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List */}
          <div className="modal-tech-section">
            <h4 className="modal-section-title">Built With:</h4>
            <div className="modal-tech-tags">
              {project.tech.map((t, idx) => (
                <span key={idx} className="badge">{t}</span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="modal-footer-actions">
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary"
            >
              <span>Launch Live Application</span>
              <ExternalLink size={16} />
            </a>

            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary"
            >
              <GithubIcon size={16} />
              <span>Explore GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
