import React from 'react';
import { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40';
      case 'In Progress':
        return 'bg-amber-950/60 text-amber-300 border-amber-500/40';
      case 'Architecture / Concept':
        return 'bg-cyan-950/60 text-cyan-glow border-cyan-500/40';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-space-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-white/15 bg-space-900/95 p-6 sm:p-8 shadow-2xl space-y-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-space-800 text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Category: <span className="text-cyan-glow">{project.category}</span>
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
        </div>

        {/* Project Visual Banner */}
        <div className={`w-full h-44 rounded-xl bg-gradient-to-br ${project.imagePlaceholderGradient} border border-white/10 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <Layers className="w-10 h-10 text-cyan-glow mb-2 animate-bounce" style={{ animationDuration: '3s' }} />
          <span className="font-mono text-sm font-semibold text-white tracking-wide z-10">
            {project.title}
          </span>
          <span className="text-xs font-mono text-slate-300 z-10 mt-1">
            {project.technologies.join(' • ')}
          </span>
        </div>

        {/* Full Overview */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> System Overview & Architecture
          </h4>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Features Breakdown */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-mono text-violet-400 uppercase tracking-wider flex items-center gap-1.5">
            <Cpu className="w-4 h-4" /> Key Features & Capabilities
          </h4>
          <div className="space-y-2">
            {project.keyFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-glow shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-space-800 border border-white/10 text-cyan-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-space-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 text-xs font-mono flex items-center gap-2 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-cyan-glow" />
                <span>Source Repository</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-500">Repository private / under review</span>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-glow text-space-950 font-semibold text-xs font-mono flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:bg-cyan-300 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-space-800/80 text-slate-300 hover:text-white text-xs font-mono border border-white/5"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
