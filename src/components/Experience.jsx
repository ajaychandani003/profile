import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { experiencesData, educationAndCertifications } from '../data/portfolioData';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(1);

  return (
    <section className="section" id="experience">
      <div className="section-eyebrow">
        <span>[ 03 &middot; CAREER MILESTONES &middot; CONSTELLATION OF ROLES ]</span>
      </div>

      <div className="experience-head-row">
        <h2 className="section-title">
          Work <em>Experience</em>
        </h2>
        <div className="total-exp-badge">
          <span>MISSION DURATION: 13 YEARS 6 MONTHS</span>
        </div>
      </div>

      {/* Constellation / Orbital Career Timeline */}
      <div className="constellation-timeline">
        {experiencesData.map((exp, idx) => (
          <div 
            key={exp.id} 
            className={`mission-card interactive-target ${selectedExp === exp.id ? 'active-mission' : ''}`}
            onClick={() => setSelectedExp(exp.id)}
          >
            {/* Header / Meta */}
            <div className="mission-top">
              <div className="mission-star">
                <span className="star-core">&loz;</span>
                <span className="star-pulse" />
              </div>
              <div className="mission-title-group">
                <h3 className="mission-role">{exp.role}</h3>
                <span className="mission-company">&commat; {exp.company} &middot; {exp.location}</span>
              </div>
              <span className="mission-date">{exp.period}</span>
            </div>

            <p className="mission-desc">{exp.description}</p>

            {/* Achievements Bullet Checklist */}
            <ul className="mission-bullets">
              {exp.achievements.map((item, aIdx) => (
                <li key={aIdx} className="mission-bullet-item">
                  <span className="bullet-dot" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="mission-tech-row">
              <span className="mission-tech-lbl">SYSTEM STACKS:</span>
              <div className="mission-tech-tags">
                {exp.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Formal Credentials & Education Grid */}
      <div className="credentials-space">
        <div className="credentials-sub-title">
          <span>[ ACADEMIC DEGREES &amp; LEADERSHIP CREDENTIALS ]</span>
        </div>

        <div className="credentials-row-grid">
          {educationAndCertifications.map((item, idx) => (
            <div key={idx} className="credential-mini-card">
              <div className="cred-icon-box">
                {idx === 2 ? <Award size={18} /> : <GraduationCap size={18} />}
              </div>
              <div className="cred-content">
                <div className="cred-top-row">
                  <h4 className="cred-title">{item.title}</h4>
                  <span className="cred-year">{item.year}</span>
                </div>
                <p className="cred-issuer">{item.issuer}</p>
                <p className="cred-details">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
