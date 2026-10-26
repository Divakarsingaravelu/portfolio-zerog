import React, { useState } from 'react';
import { PhysicsProvider } from './context/PhysicsContext';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { SkillsArena } from './components/SkillsArena';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const AppContent: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-space-900 text-slate-100 flex flex-col font-sans selection:bg-cyan-glow/30 selection:text-cyan-glow">
      {/* Interactive Background Canvas */}
      <StarfieldCanvas />

      {/* Floating Glass Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="flex-1 z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <SkillsArena />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <PhysicsProvider>
      <AppContent />
    </PhysicsProvider>
  );
};

export default App;
