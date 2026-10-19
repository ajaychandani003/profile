import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    'All', 
    'eCommerce & BigCommerce', 
    'Enterprise & Platforms', 
    'Fintech & Trading', 
    'AI & Headless', 
    'Automation'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const planetGlows = [
    { glow: 'rgba(26,159,120,.45)', fallback: '#1a9f78', ring: '#2a78d6', size: '150px' },
    { glow: 'rgba(238,98,70,.45)', fallback: '#c7ab94', ring: '#ff7b54', size: '165px' },
    { glow: 'rgba(90,200,255,.5)', fallback: '#1b6fa8', ring: '#7fe6ff', size: '155px' },
    { glow: 'rgba(168,85,247,.45)', fallback: '#6b21a8', ring: '#c084fc', size: '140px' },
    { glow: 'rgba(245,158,11,.45)', fallback: '#92400e', ring: '#fcd34d', size: '160px' },
    { glow: 'rgba(16,185,129,.45)', fallback: '#065f46', ring: '#6ee7b7', size: '145px' },
    { glow: 'rgba(59,130,246,.45)', fallback: '#1e40af', ring: '#93c5fd', size: '150px' },
    { glow: 'rgba(236,72,153,.45)', fallback: '#9d174d', ring: '#f472b6', size: '140px' },
    { glow: 'rgba(14,165,233,.45)', fallback: '#075985', ring: '#38bdf8', size: '155px' }
  ];

  return (
    <section className="section" id="projects">
      <div className="section-eyebrow">
        <span>[ 02 &middot; PRODUCTION CLIENT SYSTEMS &middot; PLANETARY ARCHITECTURE ]</span>
      </div>

      <h2 className="section-title">
        Selected <em>Projects</em>
      </h2>

      {/* Categories Filter Tabs */}
      <div className="planet-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`planet-filter-btn interactive-target ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Planetary System Grid from Aahana Surya Reference */}
      <div className="system">
        {filteredProjects.map((project, idx) => {
          const styleConfig = planetGlows[idx % planetGlows.length];

          return (
            <div
              key={project.id}
              className="planet-card interactive-target"
              style={{
                '--glow': styleConfig.glow,
                '--fallback': styleConfig.fallback,
                '--ring': styleConfig.ring,
                '--size': styleConfig.size
              }}
              onClick={() => setActiveModalProject(project)}
            >
              {/* Planetary Visual Slot */}
              <div className="planet-slot">
                <div className="planet-sphere" />
                {styleConfig.ring && <div className="planet-saturn-ring" />}
                <div className="planet-code-badge">{project.tech[0]}</div>
              </div>

              <p className="planet-name">{project.title.split('—')[0].trim()}</p>

              <div className="planet-info">
                <span className="planet-drop" />
                <span className="planet-rule" />
                <div className="planet-readout">
                  <span className="planet-category-label">{project.category}</span>
                  <p className="planet-desc">{project.shortDesc}</p>
                  
                  <div className="planet-meta-foot">
                    <span className="planet-cta">
                      <span>View Dossier &amp; Spec</span>
                      <i>&rarr;</i>
                    </span>

                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="planet-ext-link interactive-target"
                        onClick={(e) => e.stopPropagation()}
                        title="Visit Live Client Website"
                      >
                        <span>Live Site</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectModal 
          project={activeModalProject} 
          onClose={() => setActiveModalProject(null)} 
        />
      )}
    </section>
  );
}
