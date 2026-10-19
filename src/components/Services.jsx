import React from 'react';
import { 
  CodeXml, 
  Layout, 
  Cloud, 
  Server, 
  Bot, 
  Gauge, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';
import { servicesData, processSteps } from '../data/portfolioData';

// Map icon string to Lucide React component
const iconMap = {
  CodeXml: CodeXml,
  Layout: Layout,
  Cloud: Cloud,
  Server: Server,
  Bot: Bot,
  Gauge: Gauge
};

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">My Services</div>
          <h2 className="section-title">
            Specialized Engineering & <br />
            <span className="gradient-text">Architectural Solutions</span>
          </h2>
          <p className="section-subtitle">
            Delivering end-to-end software solutions designed to solve critical business bottlenecks 
            and elevate user satisfaction.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || CodeXml;

            return (
              <div key={service.id} className="glass-card service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComponent size={26} className="service-icon" />
                  </div>
                  <span className="service-tagline">{service.tagline}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                {/* Service Deliverable Highlights */}
                <div className="service-highlights">
                  <span className="highlights-header">Key Deliverables:</span>
                  <ul className="service-highlights-list">
                    {service.highlights.map((h, idx) => (
                      <li key={idx} className="highlight-item">
                        <CheckCircle2 size={16} className="highlight-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Tech Tags */}
                <div className="service-tech-footer">
                  {service.techTags.map((tech, tIdx) => (
                    <span key={tIdx} className="badge">{tech}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process & Execution Framework */}
        <div className="process-framework-block">
          <div className="process-header">
            <span className="badge">Execution Methodology</span>
            <h3 className="process-main-title">How I Turn Requirements Into Production Reality</h3>
            <p className="process-main-desc">
              A transparent, agile, and iterative approach guaranteeing quality, predictability, and velocity.
            </p>
          </div>

          <div className="process-steps-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="glass-card process-step-card">
                <div className="step-number">{step.step}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
                <div className="step-progress-line" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
