import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, FileText, Download, Briefcase, GraduationCap, Code2, Award, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, internships, education, projects, skills, certifications } = PORTFOLIO_DATA;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/${personal.resumeFileName}`;
    link.download = personal.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-[var(--space-2)] sm:p-[var(--space-3)] bg-space-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-white/15 bg-space-900/95 p-[var(--space-3)] sm:p-[var(--space-4)] shadow-2xl space-y-[var(--space-3)]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[var(--space-3)] right-[var(--space-3)] w-[40px] h-[40px] rounded-xl bg-space-800 text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-colors flex items-center justify-center"
          aria-label="Close resume preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-[var(--space-6)]">
          <div className="inline-flex items-center gap-[var(--space-half)] px-[var(--space-1)] py-[var(--space-half)] rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-glow mb-[var(--space-1)]">
            <FileText className="w-3.5 h-3.5" />
            <span>Resume Preview</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-[32px]">
            {personal.fullName}
          </h3>
          <p className="text-cyan-glow font-mono text-xs sm:text-sm mt-[var(--space-half)]">
            {personal.title} · {personal.statusBadge}
          </p>
          <p className="text-slate-400 font-mono text-xs mt-[var(--space-half)]">
            {personal.contactEmail} · {personal.phone} · {personal.location}
          </p>
        </div>

        {/* Resume Content Overview */}
        <div className="p-[var(--space-3)] rounded-xl border border-white/10 bg-space-950/90 space-y-[var(--space-3)] font-sans text-slate-200">
          
          {/* Professional Summary */}
          <div className="border-b border-white/10 pb-[var(--space-2)]">
            <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider mb-[var(--space-1)]">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-[24px]">
              {personal.summary}
            </p>
          </div>

          {/* Internship Experience */}
          <div className="border-b border-white/10 pb-[var(--space-2)] space-y-[var(--space-2)]">
            <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider flex items-center gap-[var(--space-half)]">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Internship Experience</span>
            </h4>
            <div className="space-y-[var(--space-2)]">
              {internships.map((intern) => (
                <div key={intern.certificateId} className="text-xs space-y-[var(--space-half)]">
                  <div className="font-semibold text-white flex flex-wrap justify-between gap-[var(--space-1)] leading-[16px]">
                    <span className="text-cyan-300">{intern.role} – {intern.company}</span>
                    <span className="font-mono text-slate-400">{intern.period}</span>
                  </div>
                  <div className="text-slate-400 font-mono text-[11px]">
                    Certificate ID: {intern.certificateId} · {intern.dates}
                  </div>
                  <p className="text-slate-300 leading-[16px]">
                    {intern.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-b border-white/10 pb-[var(--space-2)] space-y-[var(--space-1)]">
            <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider flex items-center gap-[var(--space-half)]">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </h4>
            <div className="space-y-[var(--space-1)]">
              {education.map((edu) => (
                <div key={edu.institution} className="text-xs">
                  <div className="font-semibold text-white flex flex-wrap justify-between gap-[var(--space-1)] leading-[16px]">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-cyan-glow">{edu.status}</span>
                  </div>
                  <div className="text-slate-300 font-mono mt-[var(--space-half)] flex justify-between">
                    <span>{edu.institution}</span>
                    <span className="text-slate-400">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="border-b border-white/10 pb-[var(--space-2)] space-y-[var(--space-1)]">
            <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider flex items-center gap-[var(--space-half)]">
              <Code2 className="w-3.5 h-3.5" />
              <span>Key Projects</span>
            </h4>
            <div className="space-y-[var(--space-2)]">
              {projects.slice(0, 2).map((proj) => (
                <div key={proj.id} className="text-xs space-y-[var(--space-half)]">
                  <div className="font-semibold text-white flex flex-wrap justify-between gap-[var(--space-1)] leading-[16px]">
                    <span className="text-cyan-300">{proj.title}</span>
                    <span className="font-mono text-slate-400">
                      {proj.technologies.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-[16px]">
                    {proj.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="border-b border-white/10 pb-[var(--space-2)] space-y-[var(--space-1)]">
            <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider">
              Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-1)] text-xs">
              <div className="bg-space-900/60 p-[var(--space-1)] rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-[10px]">LANGUAGES</span>
                <span className="text-white font-medium">JavaScript, TypeScript, Python, Java, C, SQL</span>
              </div>
              <div className="bg-space-900/60 p-[var(--space-1)] rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-[10px]">FRONTEND</span>
                <span className="text-white font-medium">React 18, HTML, CSS, Bootstrap, Tailwind, TanStack Query</span>
              </div>
              <div className="bg-space-900/60 p-[var(--space-1)] rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-[10px]">BACKEND & DATABASES</span>
                <span className="text-white font-medium">Node.js, REST APIs, Fetch API, SQLite, SQL, Row-Level Security</span>
              </div>
              <div className="bg-space-900/60 p-[var(--space-1)] rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-[10px]">SOFT SKILLS</span>
                <span className="text-white font-medium">Rapid Problem-Solving, Collaboration, Adaptability</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-[var(--space-1)]">
            <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider flex items-center gap-[var(--space-half)]">
              <Award className="w-3.5 h-3.5" />
              <span>Certifications</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-1)] text-xs text-slate-300">
              {certifications.map((c) => (
                <div key={c.id} className="flex items-center gap-[var(--space-half)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow shrink-0" />
                  <span className="truncate">{c.title} ({c.date})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Actions */}
        <div className="pt-[var(--space-1)] flex flex-wrap items-center justify-between gap-[var(--space-2)]">
          <div className="flex flex-wrap items-center gap-[var(--space-2)]">
            <button
              onClick={handleDownload}
              className="min-h-[40px] px-[var(--space-3)] py-[var(--space-1)] rounded-xl bg-gradient-to-r from-cyan-glow to-blue-500 text-space-950 font-bold text-xs font-mono shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:brightness-110 flex items-center gap-[var(--space-half)] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <a
              href={`/${personal.resumeFileName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[40px] px-[var(--space-3)] py-[var(--space-1)] rounded-xl bg-space-800 hover:bg-space-700 text-cyan-glow font-medium text-xs font-mono border border-cyan-500/30 flex items-center gap-[var(--space-half)] transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open PDF in New Tab</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="min-h-[40px] px-[var(--space-3)] py-[var(--space-1)] rounded-xl bg-space-800 text-slate-300 hover:text-white text-xs font-mono border border-white/5 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
