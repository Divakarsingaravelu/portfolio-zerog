import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePhysics } from '../context/PhysicsContext';
import { LinkedinIcon, GithubIcon } from './Icons';
import { Magnetic } from './motion/Magnetic';
import { TiltCard } from './motion/TiltCard';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  FileDown,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Database,
  CheckCircle2,
  ExternalLink,
  Flame,
  Globe
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { isZeroG } = usePhysics();
  const { personal } = PORTFOLIO_DATA;

  // Typewriter effect state
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(100);

  // Holographic card active tab
  const [activeTab, setActiveTab] = useState<'code' | 'stack' | 'terminal'>('code');

  // Typewriter effect logic
  useEffect(() => {
    const phrases = personal.typewriterPhrases;
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText.length + 1 === currentPhrase.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backwards
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, personal.typewriterPhrases, typingSpeed]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Background radial ambient gradients */}
      <div className="aurora-cyan -top-24 -left-24 opacity-60" />
      <div className="aurora-violet top-1/3 -right-24 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            
            {/* Introductory Pill & Availability Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-800/80 border border-cyan-500/30 text-cyan-glow text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                <Terminal className="w-3.5 h-3.5" />
                <span>HELLO, WORLD! I'M</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personal.statusBadge}</span>
              </div>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                <span className="text-gradient-silver">{personal.fullName}</span>
              </h1>
              <div className="flex items-center gap-3">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-glow font-mono">
                  {personal.title}
                </h2>
                <span className="hidden sm:inline-block w-8 h-[2px] bg-gradient-to-r from-cyan-glow to-transparent" />
              </div>
            </div>

            {/* Typewriter Subtitle */}
            <div className="h-8 flex items-center">
              <p className="text-base sm:text-lg text-slate-300 font-mono">
                <span className="text-violet-400 font-bold">&gt;&nbsp;</span>
                <span className="text-white">{currentText}</span>
                <span className="inline-block w-2.5 h-5 ml-1 bg-cyan-glow animate-pulse align-middle" />
              </p>
            </div>

            {/* Bio Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personal.heroDescription}
            </p>

            {/* Key Stack Quick Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono text-slate-400 mr-1">Focus:</span>
              {['React.js', 'Node.js', 'TypeScript', 'Java', 'Python', 'SQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-space-800/60 border border-white/5 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-glow transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons with Magnetic Pull */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              <Magnetic strength={0.25}>
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-glow via-cyan-400 to-blue-500 text-space-950 font-semibold text-sm shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl glass-card hover:border-violet-500/50 text-slate-200 hover:text-white font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group shadow-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                >
                  <FileDown className="w-4 h-4 text-violet-400 group-hover:text-cyan-glow transition-colors" />
                  <span>Resume Preview</span>
                </button>
              </Magnetic>
            </div>

            {/* Social Links & Verified Profiles with Magnetic Hover */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs text-slate-400 font-mono">Connect:</span>
              
              <Magnetic strength={0.3}>
                <a
                  href={personal.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-space-800/80 border border-white/10 text-slate-300 hover:text-cyan-glow hover:border-cyan-500/40 transition-all text-xs font-mono group"
                  aria-label="Divakar Singaravelu LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </Magnetic>

              <Magnetic strength={0.3}>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-space-800/80 border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/40 transition-all text-xs font-mono group"
                  aria-label="Divakar Singaravelu GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </Magnetic>
            </div>

          </motion.div>

          {/* Right Column: Floating 3D Holographic Developer Core Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <TiltCard
              maxTilt={10}
              glowColor="rgba(0, 240, 255, 0.2)"
              enableZeroGFloat={isZeroG}
              className="w-full max-w-lg rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl bg-space-950/85 backdrop-blur-2xl"
            >
              {/* Header bar / Window Controls */}
              <div className="px-4 py-3 border-b border-white/10 bg-space-900/90 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-glow" />
                    divakar_core.ts
                  </span>
                </div>

                {/* Mode switcher inside card */}
                <div className="flex items-center gap-1 bg-space-950/60 p-0.5 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === 'code' ? 'bg-cyan-950 text-cyan-glow border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    code
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === 'stack' ? 'bg-cyan-950 text-cyan-glow border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    radar
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === 'terminal' ? 'bg-cyan-950 text-cyan-glow border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    term
                  </button>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-5 font-mono text-xs text-slate-300 leading-relaxed min-h-[300px] flex flex-col justify-between">
                {activeTab === 'code' && (
                  <div className="space-y-1.5">
                    <p><span className="text-violet-400">const</span> <span className="text-cyan-glow">developer</span> = &#123;</p>
                    <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personal.fullName}"</span>,</p>
                    <p className="pl-4"><span className="text-slate-400">degree:</span> <span className="text-emerald-300">"B.E. Computer Science & Eng"</span>,</p>
                    <p className="pl-4"><span className="text-slate-400">institution:</span> <span className="text-emerald-300">"Adhi College of Engineering"</span>,</p>
                    <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-amber-300">"Final-year Undergraduate"</span>,</p>
                    <p className="pl-4"><span className="text-slate-400">coreLanguages:</span> [<span className="text-cyan-300">"Java"</span>, <span className="text-cyan-300">"Python"</span>, <span className="text-cyan-300">"C"</span>],</p>
                    <p className="pl-4"><span className="text-slate-400">stack:</span> &#123;</p>
                    <p className="pl-8"><span className="text-slate-400">frontend:</span> [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"TypeScript"</span>, <span className="text-cyan-300">"Tailwind"</span>],</p>
                    <p className="pl-8"><span className="text-slate-400">backend:</span> [<span className="text-cyan-300">"Node.js"</span>, <span className="text-cyan-300">"Express"</span>, <span className="text-cyan-300">"REST APIs"</span>],</p>
                    <p className="pl-8"><span className="text-slate-400">database:</span> [<span className="text-cyan-300">"SQL"</span>, <span className="text-cyan-300">"SQLite"</span>]</p>
                    <p className="pl-4">&#125;,</p>
                    <p className="pl-4"><span className="text-slate-400">passions:</span> [<span className="text-pink-300">"AI"</span>, <span className="text-pink-300">"Web Arch"</span>, <span className="text-pink-300">"Problem Solving"</span>]</p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-white/5">
                      <span>PILLAR</span>
                      <span>PRIMARY FOCUS</span>
                    </div>
                    <div className="space-y-2.5">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-cyan-glow flex items-center gap-1.5">
                            <Code2 className="w-3.5 h-3.5" /> Frontend Engineering
                          </span>
                          <span className="text-slate-400 text-[11px]">React, TS, Tailwind</span>
                        </div>
                        <div className="w-full bg-space-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-[90%] rounded-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-violet-400 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5" /> Backend & APIs
                          </span>
                          <span className="text-slate-400 text-[11px]">Node.js, Express, REST</span>
                        </div>
                        <div className="w-full bg-space-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-full w-[85%] rounded-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-emerald-400 flex items-center gap-1.5">
                            <Database className="w-3.5 h-3.5" /> Relational Data
                          </span>
                          <span className="text-slate-400 text-[11px]">SQL, SQLite Models</span>
                        </div>
                        <div className="w-full bg-space-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[80%] rounded-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-pink-400 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" /> Emerging & AI Focus
                          </span>
                          <span className="text-slate-400 text-[11px]">Speech Emotion & Audio</span>
                        </div>
                        <div className="w-full bg-space-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-pink-500 to-rose-400 h-full w-[78%] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-2 text-[11px]">
                    <div className="text-slate-400">divakar@nebula-core:~$ agy-dev --check-status</div>
                    <div className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> System status: Ready for full-stack impact
                    </div>
                    <div className="text-slate-400">divakar@nebula-core:~$ load-modules</div>
                    <div className="text-cyan-300">
                      &gt; [OK] B.E. CSE Curriculum (Anna University)<br />
                      &gt; [OK] NxtWave CCBP Full Stack Certification<br />
                      &gt; [OK] Active Project: MenuBase SaaS Platform
                    </div>
                    <div className="text-slate-400 pt-1 flex items-center gap-1">
                      <span>divakar@nebula-core:~$</span>
                      <span className="inline-block w-2 h-4 bg-cyan-glow animate-pulse" />
                    </div>
                  </div>
                )}

                {/* Card bottom info footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
                    Zero-G Simulation Engine
                  </span>
                  <span className="font-mono text-cyan-glow/80">divakar.ts</span>
                </div>

              </div>

            </TiltCard>

            {/* Orbiting Tech Badges in 3D Space */}
            <div className={`hidden sm:block absolute -top-4 -right-2 px-3 py-1.5 rounded-full glass-card border border-cyan-500/40 text-cyan-glow text-xs font-mono shadow-glow-cyan z-20 ${isZeroG ? 'animate-float-fast' : ''}`}>
              ⚡ React + TypeScript
            </div>

            <div className={`hidden sm:block absolute -bottom-4 -left-2 px-3 py-1.5 rounded-full glass-card border border-violet-500/40 text-violet-300 text-xs font-mono shadow-glow-violet z-20 ${isZeroG ? 'animate-float-medium' : ''}`}>
              🚀 Node.js + SQL
            </div>

            <div className={`hidden md:block absolute top-1/2 -right-8 -translate-y-1/2 px-2.5 py-1 rounded-md glass-card border border-emerald-500/40 text-emerald-300 text-[11px] font-mono z-20 ${isZeroG ? 'animate-float-slow' : ''}`}>
              🤖 AI & ML Concept
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
