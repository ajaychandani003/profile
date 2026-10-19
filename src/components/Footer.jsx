import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Ajay Chandani</span>
          <span className="footer-meta">
            &copy; 2026 &middot; Senior Software Engineer &amp; Technical Lead &middot; 13+ Years Experience
          </span>
        </div>

        <button 
          onClick={scrollToTop} 
          className="footer-top-btn interactive-target"
          aria-label="Scroll to top of document"
          title="Return to top"
        >
          <span>Top</span>
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
