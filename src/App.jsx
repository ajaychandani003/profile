import React from 'react';
import './index.css';
import './App.css';
import StarfieldCanvas from './components/StarfieldCanvas';
import ReticleCursor from './components/ReticleCursor';
import ScrollRail from './components/ScrollRail';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import DeepSpaceDownlink from './components/DeepSpaceDownlink';
import Experience from './components/Experience';
import SkillsCloud from './components/SkillsCloud';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app-root">
      {/* 2px Scroll progress hairline */}
      <ScrollRail />

      {/* Signature Targeting Reticle & Dot Cursor */}
      <ReticleCursor />

      {/* Interactive Deep Space Starfield Canvas & Vignette */}
      <StarfieldCanvas />

      {/* Top Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <DeepSpaceDownlink />
        <Experience />
        <SkillsCloud />
        <Contact />
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer />
    </div>
  );
}
