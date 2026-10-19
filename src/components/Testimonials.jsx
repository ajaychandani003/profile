import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Client Trust & Recommendations</div>
          <h2 className="section-title">
            Endorsed by Engineering <br />
            <span className="gradient-text">& Product Leaders</span>
          </h2>
          <p className="section-subtitle">
            Consistent high praise for architectural velocity, technical communication, and deliverable reliability.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="glass-card testimonial-card">
              <div className="testimonial-top">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--accent-amber)" color="var(--accent-amber)" />
                  ))}
                </div>
                <Quote size={24} className="quote-icon" />
              </div>

              <p className="testimonial-quote">"{item.quote}"</p>

              <div className="testimonial-author">
                <div className="author-avatar-badge">
                  {item.client.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <div className="author-name">{item.client}</div>
                  <div className="author-role">{item.role} • <span className="author-company">{item.company}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
