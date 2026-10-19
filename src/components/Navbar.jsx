import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Downlinks', href: '#reports' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="logo interactive-target" href="#top" aria-label="Ajay Chandani Home">
          Ajay Chandani
        </a>

        <ul className="nav-links">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="interactive-target">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right-actions">
          <a 
            href="/resume.pdf" 
            download="Resume_Ajay_Chandani.pdf"
            className="nav-btn-cv interactive-target"
            title="Download Official Resume PDF"
          >
            <Download size={13} />
            <span>CV</span>
          </a>

          <button
            className="mobile-nav-toggle interactive-target"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`site-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-list">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="interactive-target"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-cv-item">
            <a 
              href="/resume.pdf" 
              download="Resume_Ajay_Chandani.pdf"
              className="nav-btn-cv"
              style={{ display: 'inline-flex' }}
            >
              <Download size={14} />
              <span>Download Resume PDF</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
