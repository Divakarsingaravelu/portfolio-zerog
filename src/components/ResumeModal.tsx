import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, FileText, Download, AlertCircle, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, education, skills } = PORTFOLIO_DATA;

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
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-white/15 bg-space-900/95 p-[var(--space-3)] sm:p-[var(--space-4)] shadow-2xl space-y-[var(--space-3)]"
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
          <h3 className="text-2xl font-bold text-white leading-[32px]">
            {personal.fullName}
          </h3>
          <p className="text-cyan-glow font-mono text-xs sm:text-sm mt-[var(--space-half)]">
            {personal.title} · {personal.statusBadge}
          </p>
        </div>

        {/* Resume Overview */}
        <div className="p-[var(--space-3)] rounded-xl border border-white/10 bg-space-950/90 space-y-[var(--space-3)] font-sans text-slate-200">
          {/* Objective */}
          <div className="border-b border-white/10 pb-[var(--space-2)]">
            <h4 className="text-base font-bold text-white flex items-center gap-[var(--space-half)]">
              <Sparkles className="w-4 h-4 text-cyan-glow" /> Objective
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-[var(--space-1)] leading-[24px]">
              Final-year CSE student at Anna University looking for full-stack development roles. Hands-on experience with React, TypeScript, Node.js, and Java.
            </p>
          </div>

          {/* Education */}
          <div className="border-b border-white/10 pb-[var(--space-2)] space-y-[var(--space-1)]">
            <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider">
              Education
            </h4>
            <div className="space-y-[var(--space-1)]">
              {education.map((edu) => (
                <div key={edu.institution} className="text-xs">
                  <div className="font-semibold text-white flex justify-between leading-[16px]">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-slate-300 font-mono mt-[var(--space-half)]">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-[var(--space-1)]">
            <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider">
              Skills
            </h4>
            <div className="grid grid-cols-2 gap-[var(--space-1)] text-xs">
              <div className="bg-space-900/60 p-[var(--space-1)] rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-xs">LANGUAGES</span>
                <span className="text-white font-medium">Java, Python, C</span>
              </div>
              <div className="bg-space-900/60 p-[var(--space-1)] rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-xs">FRONTEND</span>
                <span className="text-white font-medium">React, TS, Tailwind, HTML5, CSS3</span>
              </div>
              <div className="bg-space-900/60 p-[var(--space-1)] rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-xs">BACKEND & DB</span>
                <span className="text-white font-medium">Node.js, Express, REST APIs, SQL, SQLite</span>
              </div>
              <div className="bg-space-900/60 p-[var(--space-1)] rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-xs">DEV TOOLS</span>
                <span className="text-white font-medium">Git, GitHub, VS Code, npm, Bash</span>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="p-[var(--space-1)] rounded-lg bg-space-800/60 border border-white/5 flex items-start gap-[var(--space-half)] text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-cyan-glow shrink-0 mt-0.5" />
          <span>
            To add your full PDF resume, place <code className="text-cyan-glow font-mono">Divakar_Singaravelu_Resume.pdf</code> in the <code className="text-cyan-glow font-mono">public/</code> folder.
          </span>
        </div>

        {/* Actions */}
        <div className="pt-[var(--space-1)] flex flex-wrap items-center justify-between gap-[var(--space-1)]">
          <button
            onClick={handleDownload}
            className="min-h-[40px] px-[var(--space-3)] py-[var(--space-1)] rounded-xl bg-gradient-to-r from-cyan-glow to-blue-500 text-space-950 font-bold text-xs font-mono shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:brightness-110 flex items-center gap-[var(--space-half)] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </button>

          <button
            onClick={onClose}
            className="min-h-[40px] px-[var(--space-2)] py-[var(--space-1)] rounded-xl bg-space-800 text-slate-300 hover:text-white text-xs font-mono border border-white/5"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
