import React, { useState } from 'react';
import { Download, ArrowDown, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { WhatsAppIcon } from './SocialIcons';

export default function Hero() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume_Ajay_Chandani.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3500);
  };

  return (
    <section className="hero-pin" id="top">
      <div className="hero-stage">
        <div className="hero-inner">
          {/* Eyebrow Tag */}
          <div className="hero-tag">
            <i className="hero-tag-led" />
            <span>Senior Software Engineer &amp; Technical Lead &middot; 13+ Years</span>
          </div>

          {/* Hero Name with Orbiting Satellite */}
          <div className="hero-name-wrap">
            <h1 className="hero-name">
              Ajay Chandani
            </h1>

            {/* Orbiting Satellite Graphic from reference */}
            <div className="name-sat" aria-hidden="true">
              <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* solar panels */}
                <rect x="2" y="22" width="30" height="16" rx="1.5" fill="#1e3f8f" stroke="#8fcaff" strokeWidth="1.2" />
                <line x1="12" y1="22" x2="12" y2="38" stroke="#8fcaff" strokeWidth="0.8" />
                <line x1="22" y1="22" x2="22" y2="38" stroke="#8fcaff" strokeWidth="0.8" />
                <rect x="68" y="22" width="30" height="16" rx="1.5" fill="#1e3f8f" stroke="#8fcaff" strokeWidth="1.2" />
                <line x1="78" y1="22" x2="78" y2="38" stroke="#8fcaff" strokeWidth="0.8" />
                <line x1="88" y1="22" x2="88" y2="38" stroke="#8fcaff" strokeWidth="0.8" />
                {/* booms */}
                <line x1="32" y1="30" x2="40" y2="30" stroke="#cddffa" strokeWidth="1.6" />
                <line x1="60" y1="30" x2="68" y2="30" stroke="#cddffa" strokeWidth="1.6" />
                {/* bus */}
                <rect x="40" y="20" width="20" height="20" rx="2.5" fill="#dbe6f7" stroke="#ffffff" strokeWidth="1.2" />
                <rect x="44" y="24" width="12" height="6" rx="1" fill="#3b86ff" />
                {/* dish */}
                <ellipse cx="50" cy="14" rx="8" ry="4" fill="#eef4ff" stroke="#ffffff" strokeWidth="1" />
                <line x1="50" y1="18" x2="50" y2="21" stroke="#ffffff" strokeWidth="1.4" />
              </svg>
            </div>
          </div>

          {/* Subtitle */}
          <p className="hero-subhead">
            Senior eCommerce &amp; AI Solutions Engineer &middot; BigCommerce, Shopify, WooCommerce &middot; PHP/Laravel, Python/FastAPI &middot; RAG Pipelines, AI Agents &amp; n8n &middot; International Client Project Ownership
          </p>

          {/* Minimalist Action Controls */}
          <div className="hero-action-pills">
            <a href="#projects" className="hero-pill primary interactive-target">
              <span>View Production Systems</span>
              <ArrowDown size={13} />
            </a>

            <button 
              onClick={handleDownload} 
              className={`hero-pill secondary interactive-target ${downloaded ? 'active-download' : ''}`}
            >
              <Download size={13} />
              <span>{downloaded ? 'Resume Downloaded' : 'Download Resume (PDF)'}</span>
            </button>

            <a 
              href={personalInfo.whatsapp} 
              target="_blank" 
              rel="noreferrer" 
              className="hero-pill whatsapp-pill interactive-target"
            >
              <WhatsAppIcon size={14} />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="scroll-cue">
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}
