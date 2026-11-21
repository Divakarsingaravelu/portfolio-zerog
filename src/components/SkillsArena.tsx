import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import { usePhysics } from '../context/PhysicsContext';
import { motion } from 'framer-motion';
import { Magnetic } from './motion/Magnetic';
import { GithubIcon } from './Icons';
import {
  Code2,
  Cpu,
  Layers,
  Database,
  Terminal,
  Server,
  Zap,
  Globe,
  Layout,
  GitBranch,
  Laptop,
  Package,
  Boxes,
  AppWindow,
  Smartphone,
  CheckCircle2,
} from 'lucide-react';

export const SkillsArena: React.FC = () => {
  const { isZeroG } = usePhysics();
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & DB', 'Languages', 'Tools & Workflow'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <span className="font-mono font-bold text-xs text-amber-400">☕</span>;
      case 'Terminal': return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-blue-400" />;
      case 'Atom': return <Zap className="w-4 h-4 text-cyan-glow" />;
      case 'FileCode': return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'Code': return <Code2 className="w-4 h-4 text-amber-300" />;
      case 'Palette': return <Zap className="w-4 h-4 text-teal-300" />;
      case 'Layout': return <Layout className="w-4 h-4 text-orange-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-blue-400" />;
      case 'Box': return <Boxes className="w-4 h-4 text-blue-300" />;
      case 'Zap': return <Zap className="w-4 h-4 text-yellow-400" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-cyan-300" />;
      case 'Server': return <Server className="w-4 h-4 text-emerald-400" />;
      case 'Boxes': return <Boxes className="w-4 h-4 text-slate-300" />;
      case 'Network': return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'Database': return <Database className="w-4 h-4 text-blue-400" />;
      case 'HardDrive': return <Database className="w-4 h-4 text-cyan-500" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4 text-orange-400" />;
      case 'Github': return <GithubIcon className="w-4 h-4 text-slate-200" />;
      case 'Laptop': return <Laptop className="w-4 h-4 text-blue-400" />;
      case 'TerminalSquare': return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'AppWindow': return <AppWindow className="w-4 h-4 text-blue-400" />;
      case 'Package': return <Package className="w-4 h-4 text-red-400" />;
      default: return <Code2 className="w-4 h-4 text-cyan-glow" />;
    }
  };

  return (
    <section id="skills" className="relative py-[var(--space-12)] scroll-mt-[var(--space-3)]">
      <div className="max-w-7xl mx-auto px-[var(--space-2)] sm:px-[var(--space-3)] lg:px-[var(--space-4)] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[var(--space-6)] gap-[var(--space-1)]">
          <div className="inline-flex items-center gap-[var(--space-half)] px-[var(--space-2)] py-[var(--space-half)] rounded-full bg-space-800/80 border border-cyan-500/30 text-cyan-glow text-xs font-mono tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.125]">
            Skills
          </h2>
          <p className="text-slate-400 font-mono text-sm sm:text-base max-w-2xl leading-[24px]">
            Languages, frameworks, databases, and tools I work with.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-[var(--space-1)] mb-[var(--space-6)]">
          {categories.map((cat) => (
            <Magnetic key={cat} strength={0.2}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[32px] px-[var(--space-2)] py-[var(--space-1)] rounded-full text-xs font-mono transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-cyan-950/70 border-cyan-500/50 text-cyan-glow shadow-[0_0_15px_rgba(0,240,255,0.25)] font-semibold'
                    : 'bg-space-800/50 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            </Magnetic>
          ))}
        </div>

        {/* Zero-G Notice */}
        <div className="flex items-center justify-center gap-[var(--space-half)] mb-[var(--space-4)] text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
          <span>
            {isZeroG
              ? 'Zero-G Mode: Capsules float weightlessly. Hover to illuminate.'
              : 'Gravity Mode: Drag and toss capsules around.'}
          </span>
        </div>

        {/* Skills Capsules */}
        <div className="glass-card rounded-3xl p-[var(--space-3)] sm:p-[var(--space-5)] border border-white/10 relative overflow-hidden bg-space-950/60 shadow-2xl min-h-[384px]">
          <div className="aurora-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />

          <div className="flex flex-wrap items-center justify-center gap-[var(--space-1)] sm:gap-[var(--space-2)] relative z-10">
            {filteredSkills.map((skill, index) => {
              const floatDelay = (index % 5) * 0.4;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  drag={!isZeroG}
                  dragConstraints={{ left: -150, right: 150, top: -100, bottom: 100 }}
                  dragElastic={0.2}
                  whileDrag={{ scale: 1.1, zIndex: 50 }}
                  animate={
                    isZeroG
                      ? {
                          y: [0, -8, 0],
                          transition: {
                            duration: 3.5 + (index % 3),
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: floatDelay,
                          },
                        }
                      : { y: 0 }
                  }
                  whileHover={{ scale: 1.05 }}
                  className={`group relative cursor-pointer min-h-[40px] px-[var(--space-2)] py-[var(--space-1)] rounded-2xl glass-card border transition-all duration-300 flex items-center gap-[var(--space-half)] shadow-sm ${
                    skill.featured
                      ? 'border-white/10 bg-space-900/80 hover:border-cyan-glow hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]'
                      : 'border-white/5 bg-space-950/80 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                  }`}
                >
                  {/* Icon with 4px gap to text */}
                  <div className="w-[var(--space-3)] h-[var(--space-3)] rounded-lg bg-space-800/80 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getSkillIcon(skill.icon)}
                  </div>

                  <span className="font-mono text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>

                  <span className="hidden sm:inline-block text-[10px] font-mono px-[var(--space-1)] py-[var(--space-half)] rounded-full bg-space-800/90 text-slate-400 border border-white/5 group-hover:border-cyan-500/30 group-hover:text-cyan-glow transition-all">
                    {skill.category}
                  </span>

                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow/40 group-hover:bg-cyan-glow group-hover:shadow-[0_0_8px_#00F0FF] transition-all" />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-[var(--space-6)] pt-[var(--space-3)] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-[var(--space-1)]">
            <div className="flex items-center gap-[var(--space-half)]">
              <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
              <span>Real skills only. No percentage bars.</span>
            </div>
            <div className="text-slate-500">
              Actively working with React, Node.js, and Java
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
