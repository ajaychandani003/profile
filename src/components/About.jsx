import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const [copiedPitch, setCopiedPitch] = useState(false);

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(personalInfo.elevatorPitch);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 3000);
  };

  const records = [
    { key: "Name", val: personalInfo.fullName },
    { key: "Role", val: "Senior Software Engineer & Technical Lead" },
    { key: "Experience", val: `${personalInfo.yearsExperience} (${personalInfo.exactExperience})` },
    { key: "eCommerce Stacks", val: "BigCommerce (Stencil), Shopify (Liquid & Apps), WooCommerce" },
    { key: "Backend & APIs", val: "PHP / Laravel, Python / FastAPI & Django, REST / GraphQL" },
    { key: "AI & Automation", val: "RAG Architecture, Local LLMs (Ollama), n8n Workflows" },
    { key: "Client Reach", val: "United States, United Kingdom, Australia & Caribbean" },
    { key: "Education", val: "MCA (8.0 CGPA), BCA (69.94%)" },
    { key: "Location", val: "Indore, India (Open to Remote / Relocation)" },
    { key: "Status", val: "Actively Open to Senior & Lead Roles" }
  ];

  return (
    <section className="section" id="about">
      <div className="section-eyebrow">
        <span>[ 01 &middot; DOSSIER &middot; ABOUT ME ]</span>
      </div>

      <div className="about-grid">
        {/* Left: The Signature Porthole with Rotating Arc */}
        <div className="porthole-col">
          <div className="porthole-wrap">
            <svg className="porthole-arc" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="48"></circle>
            </svg>
            <div className="porthole">
              <div className="porthole-glass">
                <img 
                  src="/images/ajay_profile.jpg" 
                  alt={personalInfo.fullName} 
                  className="me_pic"
                />
              </div>
              <span className="porthole-sweep" aria-hidden="true" />
            </div>
          </div>

          <div className="porthole-caption">
            <span className="porthole-name">{personalInfo.fullName}</span>
            <span className="porthole-sub">13+ Years &middot; Technical Lead</span>
          </div>
        </div>

        {/* Right: Technical Record Matrix */}
        <div className="about-body">
          <h2 className="section-title">
            About <em>Me</em>
          </h2>

          <div className="record">
            {records.map((r, idx) => (
              <div key={idx} className="record-row">
                <span className="record-key">{r.key}</span>
                <span className="record-sep">:</span>
                <span className="record-val">{r.val}</span>
              </div>
            ))}
          </div>

          {/* Social Icons row (from reference) */}
          <div className="social-card">
            <a href={`mailto:${personalInfo.email}`} aria-label="Direct Email" className="interactive-target" title="Email Ajay">
              <Mail size={18} />
            </a>
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="interactive-target" title="WhatsApp Chat">
              <WhatsAppIcon size={18} />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="interactive-target" title="LinkedIn Profile">
              <LinkedinIcon size={18} />
            </a>
            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="interactive-target" title="GitHub Repositories">
              <GithubIcon size={18} />
            </a>
            <a href={`tel:${personalInfo.phone}`} aria-label="Phone Call" className="interactive-target" title="Phone Call">
              <Phone size={18} />
            </a>
          </div>

          {/* Recruiter Elevator Pitch One-Click Copy */}
          <div className="recruiter-box">
            <div className="recruiter-box-head">
              <span className="recruiter-label">For Recruiters &amp; Hiring Managers</span>
              <button 
                onClick={handleCopyPitch}
                className={`recruiter-copy-btn interactive-target ${copiedPitch ? 'copied' : ''}`}
                title="Copy structured candidate pitch"
              >
                {copiedPitch ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedPitch ? 'Pitch Copied!' : 'Copy Candidate Pitch'}</span>
              </button>
            </div>
            <p className="recruiter-pitch-text">
              {personalInfo.elevatorPitch}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
