import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, FileText, Download, CheckCircle2, AlertCircle, ExternalLink, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, education, skills } = PORTFOLIO_DATA;

  const handleDownload = () => {
    // Generate text/markdown or link to public/Divakar_Singaravelu_Resume.pdf
    const link = document.createElement('a');
    link.href = `/${personal.resumeFileName}`;
    link.download = personal.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-space-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-white/15 bg-space-900/95 p-6 sm:p-8 shadow-2xl space-y-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-space-800 text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-colors"
          aria-label="Close resume preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-glow mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae Preview</span>
          </div>
          <h3 className="text-2xl font-bold text-white">
            {personal.fullName}
          </h3>
          <p className="text-cyan-glow font-mono text-xs sm:text-sm mt-0.5">
            {personal.title} • {personal.statusBadge}
          </p>
        </div>

        {/* Embedded High-tech Resume Overview Sheet */}
        <div className="p-6 rounded-xl border border-white/10 bg-space-950/90 space-y-5 font-sans text-slate-200">
          {/* Header summary */}
          <div className="border-b border-white/10 pb-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-glow" /> Professional Objective
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Aspiring Full-Stack Software Developer and final-year Computer Science Engineering undergraduate with hands-on skills in React, TypeScript, Node.js, and Java. Committed to writing clean, maintainable code and solving real-world challenges.
            </p>
          </div>

          {/* Education */}
          <div className="border-b border-white/10 pb-4 space-y-2">
            <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider">
              Education & Programs
            </h4>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.institution} className="text-xs">
                  <div className="font-semibold text-white flex justify-between">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-slate-300 font-mono">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-cyan-glow uppercase tracking-wider">
              Technical Skill Highlights
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-space-900/60 p-2.5 rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-[11px]">LANGUAGES</span>
                <span className="text-white font-medium">Java, Python, C</span>
              </div>
              <div className="bg-space-900/60 p-2.5 rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-[11px]">FRONTEND</span>
                <span className="text-white font-medium">React, TS, Tailwind, HTML5, CSS3</span>
              </div>
              <div className="bg-space-900/60 p-2.5 rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-[11px]">BACKEND & DB</span>
                <span className="text-white font-medium">Node.js, Express, REST APIs, SQL, SQLite</span>
              </div>
              <div className="bg-space-900/60 p-2.5 rounded-lg border border-white/5">
                <span className="text-slate-400 font-mono block text-[11px]">DEV TOOLS</span>
                <span className="text-white font-medium">Git, GitHub, VS Code, npm, Bash</span>
              </div>
            </div>
          </div>
        </div>

        {/* Note on replacing the file */}
        <div className="p-3 rounded-lg bg-space-800/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-cyan-glow shrink-0 mt-0.5" />
          <span>
            To connect your full official PDF resume, simply drop your PDF named <code className="text-cyan-glow font-mono">Divakar_Singaravelu_Resume.pdf</code> into the <code className="text-cyan-glow font-mono">public/</code> directory.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-glow to-blue-500 text-space-950 font-bold text-xs font-mono shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:brightness-110 flex items-center gap-2 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-space-800 text-slate-300 hover:text-white text-xs font-mono border border-white/5"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
