import React, { useState } from 'react';

export default function SkillsCloud() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsList = [
    // Languages & Backend
    { name: "PHP", cat: "backend", weight: 3 },
    { name: "Python", cat: "backend", weight: 3 },
    { name: "Laravel", cat: "backend", weight: 3 },
    { name: "FastAPI", cat: "backend", weight: 3 },
    { name: "Django", cat: "backend", weight: 2 },
    { name: "REST APIs", cat: "backend", weight: 3 },
    { name: "GraphQL", cat: "backend", weight: 2 },
    { name: "Microservices", cat: "backend", weight: 2 },
    { name: "MySQL", cat: "backend", weight: 3 },
    { name: "PostgreSQL", cat: "backend", weight: 3 },
    { name: "Redis", cat: "backend", weight: 2 },
    
    // eCommerce
    { name: "WooCommerce", cat: "ecommerce", weight: 3 },
    { name: "Shopify Liquid", cat: "ecommerce", weight: 3 },
    { name: "Shopify Custom Apps", cat: "ecommerce", weight: 3 },
    { name: "BigCommerce Stencil", cat: "ecommerce", weight: 3 },
    { name: "Magento", cat: "ecommerce", weight: 2 },
    { name: "Headless Commerce", cat: "ecommerce", weight: 3 },
    { name: "Payment Gateways", cat: "ecommerce", weight: 3 },
    { name: "Stripe & Apple Pay", cat: "ecommerce", weight: 3 },

    // AI & RAG
    { name: "RAG Architecture", cat: "ai", weight: 3 },
    { name: "LLM Integration", cat: "ai", weight: 3 },
    { name: "LangChain", cat: "ai", weight: 3 },
    { name: "Ollama (Local LLMs)", cat: "ai", weight: 3 },
    { name: "Vector DBs (Chroma/pgvector)", cat: "ai", weight: 2 },
    { name: "Embeddings & Semantic Search", cat: "ai", weight: 2 },
    { name: "AI Chatbots & Agents", cat: "ai", weight: 3 },
    { name: "Prompt Engineering", cat: "ai", weight: 2 },

    // Automation
    { name: "n8n Workflows", cat: "automation", weight: 3 },
    { name: "Voiceflow", cat: "automation", weight: 2 },
    { name: "Twilio WhatsApp API", cat: "automation", weight: 3 },
    { name: "Webhooks", cat: "automation", weight: 3 },
    { name: "OAuth 2.0", cat: "automation", weight: 2 },
    { name: "CRM / ERP Sync", cat: "automation", weight: 2 },

    // Frontend & Tools
    { name: "React", cat: "frontend", weight: 3 },
    { name: "Next.js", cat: "frontend", weight: 2 },
    { name: "JavaScript (ESNext)", cat: "frontend", weight: 3 },
    { name: "TypeScript", cat: "frontend", weight: 2 },
    { name: "Tailwind CSS", cat: "frontend", weight: 2 },
    { name: "Docker", cat: "frontend", weight: 2 },
    { name: "AWS Cloud", cat: "frontend", weight: 2 },
    { name: "Git / CI/CD", cat: "frontend", weight: 3 }
  ];

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "ecommerce", label: "eCommerce Stacks" },
    { id: "backend", label: "Backend & APIs" },
    { id: "ai", label: "AI & RAG" },
    { id: "automation", label: "Automation (n8n)" },
    { id: "frontend", label: "Frontend & Cloud" }
  ];

  const filtered = activeCategory === 'all' 
    ? skillsList 
    : skillsList.filter(s => s.cat === activeCategory);

  return (
    <section className="section" id="skills">
      <div className="section-eyebrow">
        <span>[ 04 &middot; TECHNICAL ARSENAL &middot; SKILL CLOUD ]</span>
      </div>

      <h2 className="section-title">
        Technical <em>Skills</em>
      </h2>

      {/* Filter Buttons from reference */}
      <div className="skills-filters">
        {categories.map((c) => (
          <button
            key={c.id}
            className={`skills-filter interactive-target ${activeCategory === c.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(c.id)}
          >
            {c.id !== 'all' && <span className={`filter-dot filter-dot-${c.id}`} />}
            <span>{c.label}</span>
          </button>
        ))}
      </div>

      {/* Cloud Sphere / Constellation Tag Grid */}
      <div className="cloud-stage">
        <div className="cloud-sphere">
          {filtered.map((skill, idx) => (
            <span
              key={idx}
              className={`cloud-tag interactive-target tag-cat-${skill.cat}`}
              data-cat={skill.cat}
              data-weight={skill.weight}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
      <p className="cloud-hint">13+ years of production engineering expertise across global environments</p>
    </section>
  );
}
