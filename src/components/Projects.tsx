import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { usePhysics } from '../context/PhysicsContext';
import { ProjectModal } from './ProjectModal';
import { TiltCard } from './motion/TiltCard';
import { Magnetic } from './motion/Magnetic';
import { GithubIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  ExternalLink,
  Info,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Code2,
  Cpu,
  Activity,
  Workflow,
  Radio,
  Flame
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { isZeroG } = usePhysics();
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'AI / Machine Learning', 'System Architecture'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return {
          label: 'Completed',
          classes: 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
        };
      case 'In Progress':
        return {
          label: 'In Active Development',
          classes: 'bg-amber-950/70 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
        };
      case 'Architecture / Concept':
        return {
          label: 'System Architecture',
          classes: 'bg-cyan-950/70 text-cyan-glow border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
        };
    }
  };

  return (
    <section id="projects" className="relative py-28 scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="aurora-cyan top-1/4 -left-20 opacity-30 pointer-events-none" />
      <div className="aurora-violet bottom-1/4 -right-20 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Refined Typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-800/80 border border-cyan-500/30 text-cyan-glow text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Layers className="w-3.5 h-3.5" />
            <span>ASYMMETRIC BENTO SHOWCASE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Engineering</span>
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-2xl leading-relaxed">
            High-impact web architectures, multi-tenant SaaS platforms, audio deep learning models, and system designs.
          </p>
        </motion.div>

        {/* Filter Category Tabs with Magnetic Interaction */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Magnetic key={cat} strength={0.2}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-glow shadow-[0_0_20px_rgba(0,240,255,0.3)] font-semibold'
                    : 'bg-space-800/60 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            </Magnetic>
          ))}
        </div>

        {/* Asymmetric Bento Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-12 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const statusInfo = getStatusBadge(project.status);
              const isFlagship = project.id === 'menubase-saas';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`${project.bentoSpan} flex flex-col`}
                >
                  <TiltCard
                    maxTilt={isFlagship ? 5 : 8}
                    glowColor={project.accentGlow || 'rgba(0, 240, 255, 0.15)'}
                    enableZeroGFloat={isZeroG}
                    floatDelay={index * 0.3}
                    className="h-full rounded-3xl glass-card border border-white/10 hover:border-cyan-500/40 bg-space-950/85 backdrop-blur-xl flex flex-col justify-between group shadow-xl transition-all duration-300"
                  >
                    {/* Top Decorative Ambient Bar */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-glow transition-all duration-500" />

                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                      
                      {/* Card Header Row: Monospace Tags & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border ${statusInfo.classes}`}>
                            {statusInfo.label}
                          </span>
                          {isFlagship && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-cyan-950/80 text-cyan-glow border border-cyan-500/50">
                              <Flame className="w-3 h-3 text-cyan-glow animate-pulse" />
                              Flagship Project
                            </span>
                          )}
                        </div>

                        <span className="text-[11px] font-mono text-slate-400 bg-space-900/90 px-2.5 py-1 rounded-lg border border-white/5">
                          {project.category}
                        </span>
                      </div>

                      {/* Main Title & Short Description */}
                      <div className="space-y-3 cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <h3 className={`font-bold text-white group-hover:text-cyan-glow transition-colors tracking-tight leading-tight ${
                          isFlagship ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
                        }`}>
                          {project.title}
                        </h3>

                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Flagship Exclusive: Multi-Platform Sync Preview & Metrics */}
                      {isFlagship && project.architectureLayers && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-2xl bg-space-900/80 border border-white/5 font-mono text-xs">
                          {project.architectureLayers.map((layer, i) => (
                            <div key={i} className="space-y-1">
                              <span className="text-cyan-glow text-[11px] uppercase tracking-wider block">
                                0{i + 1}. {layer.layer}
                              </span>
                              <p className="text-slate-400 text-[11px] leading-snug">
                                {layer.details}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Key Features List */}
                      <div className="space-y-2">
                        {project.keyFeatures.slice(0, isFlagship ? 3 : 2).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metrics Pill Bar (if present) */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center">
                          {project.metrics.map((m, i) => (
                            <div key={i} className="p-2 rounded-xl bg-space-900/60 border border-white/5">
                              <div className="font-mono text-xs font-bold text-white truncate">
                                {m.value}
                              </div>
                              <div className="font-mono text-[10px] text-slate-400 truncate mt-0.5">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-space-900 text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Bento Card Footer with Action Triggers */}
                    <div className="px-6 sm:px-8 py-4 bg-space-950/70 border-t border-white/5 flex items-center justify-between gap-3">
                      <Magnetic strength={0.2}>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-mono text-cyan-glow hover:text-white flex items-center gap-1.5 transition-colors group/btn"
                        >
                          <span>Explore Architecture</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </button>
                      </Magnetic>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <Magnetic strength={0.3}>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-space-900 text-slate-300 hover:text-cyan-glow border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-center"
                              title="Source Repository"
                              aria-label="GitHub Repository"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          </Magnetic>
                        )}

                        {project.liveUrl && (
                          <Magnetic strength={0.3}>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-cyan-950 text-cyan-glow border border-cyan-500/40 hover:bg-cyan-900 transition-all flex items-center justify-center"
                              title="Live Demo"
                              aria-label="Live Demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Magnetic>
                        )}
                      </div>
                    </div>

                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
