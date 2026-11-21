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
  Smartphone,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const SkillsArena: React.FC = () => {
  const { isZeroG } = usePhysics();
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & DB', 'Languages', 'Tools & Workflow', 'Soft Skills'];

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
            Languages, frontend libraries, backend APIs, databases, and professional skills from my resume.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-[var(--space-1)] mb-[var(--space-6)]">
          {categories.map((cat) => (
            <Magnetic key={cat} strength={0.2}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[32px] px-[var(--space-2)] py-[var(--space-1)] rounded-full text-xs font-mono transition-all duration-200 border cursor-pointer ${
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

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[var(--space-2)]">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className={`p-[var(--space-2)] rounded-xl border border-white/10 bg-space-950/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-md hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] ${
                isZeroG ? 'hover:-translate-y-1' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-[var(--space-1)]">
                <div className="w-[32px] h-[32px] rounded-lg bg-space-900 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getSkillIcon(skill.icon)}
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  {skill.category.split(' ')[0]}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white group-hover:text-cyan-glow transition-colors leading-[18px]">
                  {skill.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
