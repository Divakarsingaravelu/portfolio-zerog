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
  Flame,
  CheckCircle2,
  Filter
} from 'lucide-react';

export const SkillsArena: React.FC = () => {
  const { isZeroG } = usePhysics();
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & DB', 'Languages', 'Tools & Workflow'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  // Icon resolver
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <span className="font-mono font-bold text-xs text-amber-400">☕</span>;
      case 'Terminal': return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-violet-400" />;
      case 'Atom': return <Zap className="w-4 h-4 text-cyan-glow" />;
      case 'FileCode': return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'Code': return <Code2 className="w-4 h-4 text-amber-300" />;
      case 'Palette': return <Zap className="w-4 h-4 text-teal-300" />;
      case 'Layout': return <Layout className="w-4 h-4 text-orange-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-blue-400" />;
      case 'Box': return <Boxes className="w-4 h-4 text-purple-400" />;
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
      case 'AppWindow': return <AppWindow className="w-4 h-4 text-indigo-400" />;
      case 'Package': return <Package className="w-4 h-4 text-red-400" />;
      default: return <Code2 className="w-4 h-4 text-cyan-glow" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-800/80 border border-cyan-500/30 text-cyan-glow text-xs font-mono tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm sm:text-base max-w-2xl">
            A verified repertoire of programming languages, modern frameworks, databases, and engineering tools I actively work with.
          </p>
        </div>

        {/* Category Filter Tabs with Magnetic */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Magnetic key={cat} strength={0.2}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
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

        {/* Zero-G Arena Notice */}
        <div className="flex items-center justify-center gap-2 mb-8 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
          <span>
            {isZeroG
              ? 'Zero-G Mode Active: Capsules float weightlessly in space. Hover to illuminate.'
              : 'Gravity Mode Active: Drag and toss capsules around with physical momentum!'}
          </span>
        </div>

        {/* Interactive Skills Capsules Arena */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden bg-space-950/60 shadow-2xl min-h-[380px]">
          <div className="aurora-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative z-10">
            {filteredSkills.map((skill, index) => {
              // Subtle sinusoidal offset for Zero-G floating effect
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
                  className={`group relative cursor-pointer px-4 py-2.5 rounded-2xl glass-card border transition-all duration-300 flex items-center gap-2.5 shadow-sm ${
                    skill.featured
                      ? 'border-white/10 bg-space-900/80 hover:border-cyan-glow hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]'
                      : 'border-white/5 bg-space-950/80 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                  }`}
                >
                  {/* Icon */}
                  <div className="w-7 h-7 rounded-lg bg-space-800/80 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getSkillIcon(skill.icon)}
                  </div>

                  {/* Name */}
                  <span className="font-mono text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>

                  {/* Category Pill Tag on Hover */}
                  <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-space-800/90 text-slate-400 border border-white/5 group-hover:border-cyan-500/30 group-hover:text-cyan-glow transition-all">
                    {skill.category}
                  </span>

                  {/* Glowing dot */}
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow/40 group-hover:bg-cyan-glow group-hover:shadow-[0_0_8px_#00F0FF] transition-all" />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Note on Genuine Proficiency */}
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
              <span>Authentic skills portfolio — zero arbitrary percentage bars</span>
            </div>
            <div className="text-slate-500">
              Actively developing in React, Node.js, and Java
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
