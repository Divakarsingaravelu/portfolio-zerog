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
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
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
      className="relative min-h-[92vh] flex items-center justify-center pt-[var(--space-12)] pb-[var(--space-8)] lg:py-[var(--space-12)] overflow-hidden"
    >
      {/* Background radial ambient gradients */}
      <div className="aurora-cyan -top-[var(--space-12)] -left-[var(--space-12)] opacity-60" />
      <div className="aurora-blue top-1/3 -right-[var(--space-12)] opacity-50" />

      <div className="max-w-7xl mx-auto px-[var(--space-2)] sm:px-[var(--space-3)] lg:px-[var(--space-4)] relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-6)] lg:gap-[var(--space-4)] items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start gap-[var(--space-3)]"
          >
            
            {/* Introductory Pill & Availability Badge */}
            <div className="flex flex-wrap items-center gap-[var(--space-1)]">
              <div className="inline-flex items-center gap-[var(--space-half)] px-[var(--space-2)] py-[var(--space-half)] rounded-full bg-space-800/80 border border-cyan-500/30 text-cyan-glow text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                <Terminal className="w-3.5 h-3.5" />
                <span>HELLO, WORLD! I'M</span>
              </div>

              <div className="inline-flex items-center gap-[var(--space-half)] px-[var(--space-2)] py-[var(--space-half)] rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personal.statusBadge}</span>
              </div>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-[var(--space-1)]">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.125]">
                <span className="text-gradient-silver">{personal.fullName}</span>
              </h1>
              <div className="flex items-center gap-[var(--space-1)]">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-glow font-mono leading-[32px]">
                  {personal.title}
                </h2>
                <span className="hidden sm:inline-block w-[var(--space-4)] h-[2px] bg-gradient-to-r from-cyan-glow to-transparent" />
              </div>
            </div>

            {/* Typewriter Subtitle */}
            <div className="h-[var(--space-4)] flex items-center">
              <p className="text-base sm:text-lg text-slate-300 font-mono leading-[24px]">
                <span className="text-blue-400 font-bold">&gt;&nbsp;</span>
                <span className="text-white">{currentText}</span>
                <span className="inline-block w-2.5 h-5 ml-[var(--space-half)] bg-cyan-glow animate-pulse align-middle" />
              </p>
            </div>

            {/* Bio Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-[24px] max-w-2xl font-normal">
              {personal.heroDescription}
            </p>

            {/* Key Stack Quick Badges */}
            <div className="flex flex-wrap items-center gap-[var(--space-1)] pt-[var(--space-half)]">
              <span className="text-xs font-mono text-slate-400 mr-[var(--space-half)]">Focus:</span>
              {['React 18', 'TypeScript', 'Tailwind CSS', 'Node.js', 'SQL', 'Python', 'Java'].map((tech) => (
                <span
                  key={tech}
                  className="px-[var(--space-1)] py-[var(--space-half)] rounded-md text-xs font-mono bg-space-800/60 border border-white/5 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-glow transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-[var(--space-2)] pt-[var(--space-1)] w-full sm:w-auto">
              <Magnetic strength={0.25}>
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="w-full sm:w-auto min-h-[40px] px-[var(--space-3)] py-[var(--space-1)] rounded-xl bg-gradient-to-r from-cyan-glow via-cyan-400 to-blue-500 text-space-950 font-semibold text-sm shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-[var(--space-half)] group"
                >
                  <span>See My Work</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto min-h-[40px] px-[var(--space-3)] py-[var(--space-1)] rounded-xl glass-card hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-[var(--space-half)] group shadow-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-cyan-400 group-hover:text-cyan-glow transition-colors" />
                  <span>Resume</span>
                </button>
              </Magnetic>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-[var(--space-2)] pt-[var(--space-1)]">
              <span className="text-xs text-slate-400 font-mono">Connect:</span>
              
              <Magnetic strength={0.3}>
                <a
                  href={personal.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[var(--space-half)] min-h-[32px] px-[var(--space-2)] py-[var(--space-1)] rounded-lg bg-space-800/80 border border-white/10 text-slate-300 hover:text-cyan-glow hover:border-cyan-500/40 transition-all text-xs font-mono group"
                  aria-label="Divakar S LinkedIn Profile"
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
                  className="flex items-center gap-[var(--space-half)] min-h-[32px] px-[var(--space-2)] py-[var(--space-1)] rounded-lg bg-space-800/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-mono group"
                  aria-label="Divakar S GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </Magnetic>
            </div>

          </motion.div>

          {/* Right Column: Developer Core Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <TiltCard
              maxTilt={10}
              glowColor="rgba(0, 240, 255, 0.2)"
              enableZeroGFloat={isZeroG}
              className="w-full max-w-lg rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl bg-space-950/85 backdrop-blur-2xl"
            >
              {/* Header bar */}
              <div className="h-[40px] px-[var(--space-2)] py-[var(--space-1)] border-b border-white/10 bg-space-900/90 flex items-center justify-between">
                <div className="flex items-center gap-[var(--space-1)]">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
                  <span className="ml-[var(--space-1)] text-xs font-mono text-slate-400 flex items-center gap-[var(--space-half)]">
                    <Code2 className="w-3.5 h-3.5 text-cyan-glow" />
                    divakar_core.ts
                  </span>
                </div>

                {/* Mode switcher */}
                <div className="flex items-center gap-[var(--space-half)] bg-space-950/60 p-[var(--space-half)] rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-[var(--space-1)] py-[var(--space-half)] rounded text-[10px] font-mono transition-colors cursor-pointer ${
                      activeTab === 'code' ? 'bg-cyan-950 text-cyan-glow border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    code
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-[var(--space-1)] py-[var(--space-half)] rounded text-[10px] font-mono transition-colors cursor-pointer ${
                      activeTab === 'stack' ? 'bg-cyan-950 text-cyan-glow border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    radar
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-[var(--space-1)] py-[var(--space-half)] rounded text-[10px] font-mono transition-colors cursor-pointer ${
                      activeTab === 'terminal' ? 'bg-cyan-950 text-cyan-glow border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    term
                  </button>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-[var(--space-3)] font-mono text-xs text-slate-300 leading-[24px] min-h-[304px] flex flex-col justify-between">
                {activeTab === 'code' && (
                  <div className="space-y-[var(--space-half)]">
                    <p><span className="text-blue-400">const</span> <span className="text-cyan-glow">developer</span> = &#123;</p>
                    <p className="pl-[var(--space-2)]"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personal.fullName}"</span>,</p>
                    <p className="pl-[var(--space-2)]"><span className="text-slate-400">degree:</span> <span className="text-emerald-300">"B.E. Computer Science & Eng"</span>,</p>
                    <p className="pl-[var(--space-2)]"><span className="text-slate-400">institution:</span> <span className="text-emerald-300">"Adhi College of Engineering (Anna Univ)"</span>,</p>
                    <p className="pl-[var(--space-2)]"><span className="text-slate-400">cgpa:</span> <span className="text-cyan-300">7.5</span>,</p>
                    <p className="pl-[var(--space-2)]"><span className="text-slate-400">internships:</span> [<span className="text-cyan-300">"Happieloop"</span>, <span className="text-cyan-300">"Thiranex"</span>],</p>
                    <p className="pl-[var(--space-2)]"><span className="text-slate-400">languages:</span> [<span className="text-cyan-300">"JS"</span>, <span className="text-cyan-300">"TS"</span>, <span className="text-cyan-300">"Python"</span>, <span className="text-cyan-300">"Java"</span>, <span className="text-cyan-300">"C"</span>, <span className="text-cyan-300">"SQL"</span>],</p>
                    <p className="pl-[var(--space-2)]"><span className="text-slate-400">stack:</span> &#123;</p>
                    <p className="pl-[var(--space-4)]"><span className="text-slate-400">frontend:</span> [<span className="text-cyan-300">"React 18"</span>, <span className="text-cyan-300">"Tailwind"</span>, <span className="text-cyan-300">"TanStack"</span>],</p>
                    <p className="pl-[var(--space-4)]"><span className="text-slate-400">backend:</span> [<span className="text-cyan-300">"Node.js"</span>, <span className="text-cyan-300">"REST APIs"</span>],</p>
                    <p className="pl-[var(--space-4)]"><span className="text-slate-400">databases:</span> [<span className="text-cyan-300">"SQLite"</span>, <span className="text-cyan-300">"SQL"</span>, <span className="text-cyan-300">"RLS"</span>]</p>
                    <p className="pl-[var(--space-2)]">&#125;</p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-[var(--space-2)]">
                    <div className="flex items-center justify-between text-slate-400 text-xs pb-[var(--space-half)] border-b border-white/5">
                      <span>PILLAR</span>
                      <span>PRIMARY FOCUS</span>
                    </div>
                    <div className="space-y-[var(--space-1)]">
                      <div>
                        <div className="flex justify-between text-xs mb-[var(--space-half)]">
                          <span className="text-cyan-glow flex items-center gap-[var(--space-half)]">
                            <Code2 className="w-3.5 h-3.5" /> Frontend
                          </span>
                          <span className="text-slate-400 text-xs">React 18, TS, Tailwind, TanStack</span>
                        </div>
                        <div className="w-full bg-space-800 h-[var(--space-1)] rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-[95%] rounded-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-[var(--space-half)]">
                          <span className="text-blue-400 flex items-center gap-[var(--space-half)]">
                            <Cpu className="w-3.5 h-3.5" /> Backend & APIs
                          </span>
                          <span className="text-slate-400 text-xs">Node.js, REST APIs, Fetch</span>
                        </div>
                        <div className="w-full bg-space-800 h-[var(--space-1)] rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full w-[90%] rounded-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-[var(--space-half)]">
                          <span className="text-emerald-400 flex items-center gap-[var(--space-half)]">
                            <Database className="w-3.5 h-3.5" /> Relational Data
                          </span>
                          <span className="text-slate-400 text-xs">SQL, SQLite, Row-Level Security</span>
                        </div>
                        <div className="w-full bg-space-800 h-[var(--space-1)] rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[85%] rounded-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-[var(--space-half)]">
                          <span className="text-cyan-400 flex items-center gap-[var(--space-half)]">
                            <Sparkles className="w-3.5 h-3.5" /> Internships
                          </span>
                          <span className="text-slate-400 text-xs">Happieloop & Thiranex</span>
                        </div>
                        <div className="w-full bg-space-800 h-[var(--space-1)] rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-400 h-full w-[90%] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-[var(--space-1)] text-xs">
                    <div className="text-slate-400">divakar@dev:~$ status --check</div>
                    <div className="text-emerald-400 flex items-center gap-[var(--space-half)]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> System status: Ready
                    </div>
                    <div className="text-slate-400">divakar@dev:~$ load-profile</div>
                    <div className="text-cyan-300">
                      &gt; [OK] B.E. CSE (Anna University, CGPA: 7.5)<br />
                      &gt; [OK] 2 Industry Internships (Happieloop, Thiranex)<br />
                      &gt; [OK] NxtWave CCBP Full Stack Training<br />
                      &gt; [OK] Projects: MenuBase SaaS, Wikipedia Search
                    </div>
                    <div className="text-slate-400 pt-[var(--space-half)] flex items-center gap-[var(--space-half)]">
                      <span>divakar@dev:~$</span>
                      <span className="inline-block w-2 h-4 bg-cyan-glow animate-pulse" />
                    </div>
                  </div>
                )}

                {/* Card bottom footer */}
                <div className="pt-[var(--space-2)] border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-[var(--space-half)]">
                    <span className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
                    Zero-G Physics
                  </span>
                  <span className="font-mono text-cyan-glow/80">divakar.ts</span>
                </div>

              </div>

            </TiltCard>

            {/* Orbiting Tech Badges */}
            <div className={`hidden sm:block absolute -top-[var(--space-2)] -right-[var(--space-1)] px-[var(--space-2)] py-[var(--space-1)] rounded-full glass-card border border-cyan-500/40 text-cyan-glow text-xs font-mono shadow-glow-cyan z-20 ${isZeroG ? 'animate-float-fast' : ''}`}>
              ⚡ React 18 + TS
            </div>

            <div className={`hidden sm:block absolute -bottom-[var(--space-2)] -left-[var(--space-1)] px-[var(--space-2)] py-[var(--space-1)] rounded-full glass-card border border-blue-500/40 text-blue-300 text-xs font-mono shadow-glow-blue z-20 ${isZeroG ? 'animate-float-medium' : ''}`}>
              🚀 Node.js + SQL
            </div>

            <div className={`hidden md:block absolute top-1/2 -right-[var(--space-4)] -translate-y-1/2 px-[var(--space-1)] py-[var(--space-half)] rounded-md glass-card border border-emerald-500/40 text-emerald-300 text-xs font-mono z-20 ${isZeroG ? 'animate-float-slow' : ''}`}>
              💼 2 Internships
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
