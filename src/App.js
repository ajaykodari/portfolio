import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Desk from './components/Desk';
import SkillTree from './components/SkillTree';
import ProjectShelf from './components/ProjectShelf';
import CertificateWall from './components/CertificateWall';
import ContactGuestbook from './components/ContactGuetbook';

import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<Desk />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<SkillTree />} />
        <Route path="/projects" element={<ProjectShelf />} />
        <Route path="/certifications" element={<CertificateWall />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<ContactGuestbook />} />
      </Routes>
    </div>
  );
}

export default App;
