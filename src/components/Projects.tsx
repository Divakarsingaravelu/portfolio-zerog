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
  CheckCircle2,
  ArrowUpRight,
  Flame
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { isZeroG } = usePhysics();
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Frontend'];

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
          label: 'In Progress',
          classes: 'bg-amber-950/70 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
        };
      default:
        return {
          label: 'Active',
          classes: 'bg-cyan-950/70 text-cyan-glow border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
        };
    }
  };

  return (
    <section id="projects" className="relative py-[var(--space-12)] scroll-mt-[var(--space-3)]">
      {/* Background ambient lighting */}
      <div className="aurora-cyan top-1/4 -left-[var(--space-3)] opacity-30 pointer-events-none" />
      <div className="aurora-blue bottom-1/4 -right-[var(--space-3)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-[var(--space-2)] sm:px-[var(--space-3)] lg:px-[var(--space-4)] relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-[var(--space-8)] gap-[var(--space-2)]"
        >
          <div className="inline-flex items-center gap-[var(--space-half)] px-[var(--space-2)] py-[var(--space-half)] rounded-full bg-space-800/80 border border-cyan-500/30 text-cyan-glow text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Layers className="w-3.5 h-3.5" />
            <span>PROJECTS</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.125]">
            Projects
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-2xl leading-[24px]">
            Personal SaaS platform, academic web applications, and portfolio architecture.
          </p>
        </motion.div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-[var(--space-1)] mb-[var(--space-6)]">
          {categories.map((cat) => (
            <Magnetic key={cat} strength={0.2}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[32px] px-[var(--space-2)] py-[var(--space-1)] rounded-full text-xs font-mono transition-all duration-200 border cursor-pointer ${
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

        {/* Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-12 gap-[var(--space-3)]"
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
                    {/* Top Decorative Bar */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-glow transition-all duration-500" />

                    <div className="p-[var(--space-3)] sm:p-[var(--space-4)] flex-1 flex flex-col justify-between gap-[var(--space-3)]">
                      
                      {/* Header Row */}
                      <div className="flex flex-wrap items-center justify-between gap-[var(--space-1)]">
                        <div className="flex items-center gap-[var(--space-1)]">
                          <span className={`px-[var(--space-1)] py-[var(--space-half)] rounded-full text-xs font-mono border ${statusInfo.classes}`}>
                            {statusInfo.label}
                          </span>
                          {isFlagship && (
                            <span className="inline-flex items-center gap-[var(--space-half)] px-[var(--space-1)] py-[var(--space-half)] rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-glow border border-cyan-500/50">
                              <Flame className="w-3 h-3 text-cyan-glow animate-pulse" />
                              Flagship Project
                            </span>
                          )}
                        </div>

                        <span className="text-xs font-mono text-slate-400 bg-space-900/90 px-[var(--space-1)] py-[var(--space-half)] rounded-lg border border-white/5">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-[var(--space-1)] cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <h3 className={`font-bold text-white group-hover:text-cyan-glow transition-colors tracking-tight leading-[32px] ${
                          isFlagship ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
                        }`}>
                          {project.title}
                        </h3>

                        <p className="text-slate-300 text-xs sm:text-sm leading-[24px]">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Flagship Architecture Preview */}
                      {isFlagship && project.architectureLayers && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-1)] p-[var(--space-2)] rounded-2xl bg-space-900/80 border border-white/5 font-mono text-xs">
                          {project.architectureLayers.map((layer, i) => (
                            <div key={i} className="space-y-[var(--space-half)]">
                              <span className="text-cyan-glow text-xs uppercase tracking-wider block">
                                0{i + 1}. {layer.layer}
                              </span>
                              <p className="text-slate-400 text-xs leading-[16px]">
                                {layer.details}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Key Features */}
                      <div className="space-y-[var(--space-1)]">
                        {project.keyFeatures.slice(0, isFlagship ? 3 : 2).map((feat, i) => (
                          <div key={i} className="flex items-start gap-[var(--space-half)] text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-[var(--space-1)] pt-[var(--space-1)] border-t border-white/5 text-center">
                          {project.metrics.map((m, i) => (
                            <div key={i} className="p-[var(--space-1)] rounded-xl bg-space-900/60 border border-white/5">
                              <div className="font-mono text-xs font-bold text-white truncate">
                                {m.value}
                              </div>
                              <div className="font-mono text-xs text-slate-400 truncate mt-[var(--space-half)]">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-[var(--space-1)] pt-[var(--space-1)]">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-[var(--space-1)] py-[var(--space-half)] rounded-md text-xs font-mono bg-space-900 text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Card Footer */}
                    <div className="px-[var(--space-3)] sm:px-[var(--space-4)] py-[var(--space-2)] bg-space-950/70 border-t border-white/5 flex items-center justify-between gap-[var(--space-1)]">
                      <Magnetic strength={0.2}>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="min-h-[32px] text-xs font-mono text-cyan-glow hover:text-white flex items-center gap-[var(--space-half)] transition-colors group/btn cursor-pointer"
                        >
                          <span>View Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </button>
                      </Magnetic>

                      <div className="flex items-center gap-[var(--space-1)]">
                        {project.githubUrl && (
                          <Magnetic strength={0.3}>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-[32px] h-[32px] rounded-xl bg-space-900 text-slate-300 hover:text-cyan-glow border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-center"
                              title="Source Repository"
                              aria-label="GitHub Repository"
                            >
                              <GithubIcon className="w-4 h-4" />
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
