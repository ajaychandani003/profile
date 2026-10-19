import React, { useState } from 'react';
import { Mail, Phone, Download, Eye, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunity: 'Senior Software Engineer / Technical Lead',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);

      try {
        confetti({
          particleCount: 65,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#8fcaff', '#3b86ff', '#ffffff']
        });
      } catch (err) {
        // ignore
      }
    }, 800);
  };

  return (
    <section className="section" id="contact">
      <div className="section-eyebrow">
        <span>[ 05 &middot; TRANSMISSION &middot; HIRE AJAY ]</span>
      </div>

      <h2 className="section-title">
        Initiate <em>Transmission</em>
      </h2>

      <div className="contact-transmission-wrap">
        {/* Deep Space Transmission Card */}
        <div className="transmission-head-card">
          <div className="transmission-status-row">
            <span className="dsn-led" />
            <span className="trans-status-text">Signal Lock &middot; Ready for Immediate Senior / Lead Impact</span>
          </div>

          <h3 className="trans-title">Let's Build Something Resilient Together</h3>
          <p className="trans-sub">
            Whether you are an engineering director, talent partner, or founder looking for a 13+ year veteran across eCommerce stacks (Shopify, BigCommerce, WooCommerce), backend architectures (Laravel, FastAPI), and AI automation (RAG, n8n), I'm ready to connect.
          </p>

          <div className="trans-actions-row">
            <a 
              href="/resume.pdf" 
              download="Resume_Ajay_Chandani.pdf"
              className="trans-btn primary interactive-target"
            >
              <Download size={14} />
              <span>Download Resume (PDF)</span>
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="trans-btn secondary interactive-target"
            >
              <Eye size={14} />
              <span>Preview PDF Online</span>
            </a>

            <a 
              href={personalInfo.whatsapp} 
              target="_blank" 
              rel="noreferrer" 
              className="trans-btn whatsapp interactive-target"
            >
              <WhatsAppIcon size={14} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Channels Grid & Form */}
        <div className="transmission-grid">
          {/* Left: Contact Channels */}
          <div className="channels-col">
            <div className="channel-box">
              <div className="channel-box-top">
                <span className="channel-lbl">EMAIL COMMUNICATION</span>
                <button 
                  onClick={handleCopyEmail}
                  className="channel-copy-btn interactive-target"
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={13} color="var(--accent)" /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a href={`mailto:${personalInfo.email}`} className="channel-val-link interactive-target">
                {personalInfo.email}
              </a>
            </div>

            <div className="channel-box">
              <div className="channel-box-top">
                <span className="channel-lbl">DIRECT TELEPHONE</span>
                <button 
                  onClick={handleCopyPhone}
                  className="channel-copy-btn interactive-target"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check size={13} color="var(--accent)" /> : <Copy size={13} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a href={`tel:${personalInfo.phone}`} className="channel-val-link interactive-target">
                {personalInfo.phone}
              </a>
            </div>

            <div className="channel-box">
              <div className="channel-box-top">
                <span className="channel-lbl">INSTANT MESSENGER</span>
              </div>
              <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className="channel-val-link interactive-target">
                WhatsApp (+91-9926395979) &rarr;
              </a>
            </div>

            <div className="channel-box">
              <div className="channel-box-top">
                <span className="channel-lbl">CURRENT LOCATION</span>
              </div>
              <span className="channel-val-text">
                {personalInfo.location}
              </span>
            </div>

            <div className="channel-box">
              <div className="channel-box-top">
                <span className="channel-lbl">GLOBAL PROFILES</span>
              </div>
              <div className="channel-social-links">
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="soc-link interactive-target">
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="soc-link interactive-target">
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Dispatch Form */}
          <div className="dispatch-form-col">
            {isSent ? (
              <div className="trans-success-box">
                <CheckCircle2 size={36} color="var(--accent)" />
                <h4 className="trans-success-title">Transmission Acknowledged</h4>
                <p className="trans-success-desc">
                  Thank you, <strong>{formData.name}</strong>. Your message has been received. I will review your requirements and respond back to <strong>{formData.email}</strong> shortly.
                </p>
                <button onClick={() => setIsSent(false)} className="trans-btn secondary interactive-target">
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="transmission-form">
                <div className="form-field">
                  <label className="field-lbl">SENDER NAME / ORGANIZATION</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova &middot; VP of Engineering"
                    className="field-input interactive-target"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-lbl">DIRECT EMAIL ADDRESS</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@company.com"
                    className="field-input interactive-target"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-lbl">OPPORTUNITY / SCOPE</label>
                  <select
                    value={formData.opportunity}
                    onChange={(e) => setFormData({ ...formData, opportunity: e.target.value })}
                    className="field-input field-select interactive-target"
                  >
                    <option value="Senior Software Engineer / Technical Lead">Senior Software Engineer / Technical Lead</option>
                    <option value="eCommerce Platform Engineering (Shopify / BigCommerce / Woo)">eCommerce Platform Engineering (Shopify / BigCommerce / Woo)</option>
                    <option value="AI & RAG Solutions Engineering">AI &amp; RAG Solutions Engineering</option>
                    <option value="n8n Workflow Automation">n8n Workflow Automation</option>
                    <option value="Backend Architecture (Laravel / FastAPI)">Backend Architecture (Laravel / FastAPI)</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="field-lbl">TRANSMISSION MESSAGE</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail your engineering challenges, tech stack specifications, or project roadmap..."
                    className="field-input field-textarea interactive-target"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="trans-submit-btn interactive-target"
                >
                  {isSubmitting ? (
                    <span>Dispatching Transmission...</span>
                  ) : (
                    <>
                      <span>Transmit Message to Ajay</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
