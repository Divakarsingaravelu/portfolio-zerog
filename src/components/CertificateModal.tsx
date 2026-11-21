import React from 'react';
import { Certification } from '../data/portfolioData';
import { X, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-[var(--space-2)] sm:p-[var(--space-3)] bg-space-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-white/15 bg-space-900/95 p-[var(--space-3)] sm:p-[var(--space-4)] shadow-2xl space-y-[var(--space-3)]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[var(--space-3)] right-[var(--space-3)] w-[40px] h-[40px] rounded-xl bg-space-800 text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-colors flex items-center justify-center"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-[var(--space-6)]">
          <div className="inline-flex items-center gap-[var(--space-half)] px-[var(--space-1)] py-[var(--space-half)] rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-glow mb-[var(--space-1)]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credential</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-[24px]">
            {cert.title}
          </h3>
          <p className="text-cyan-glow font-mono text-sm mt-[var(--space-half)]">
            Issued by: {cert.issuer}
          </p>
        </div>

        {/* Certificate Frame */}
        <div className="relative rounded-xl border border-cyan-500/30 bg-gradient-to-br from-space-950 via-space-900 to-space-950 p-[var(--space-3)] sm:p-[var(--space-4)] text-center space-y-[var(--space-2)] shadow-inner overflow-hidden">
          <div className="absolute top-0 right-0 w-[128px] h-[128px] bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[128px] h-[128px] bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Seal */}
          <div className="w-[var(--space-8)] h-[var(--space-8)] mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 p-[2px] shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center">
            <div className="w-full h-full bg-space-950 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-cyan-glow" />
            </div>
          </div>

          <div className="space-y-[var(--space-half)]">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Certificate of Completion
            </span>
            <div className="text-lg font-bold text-white leading-[24px]">
              Divakar Singaravelu
            </div>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-[16px]">
              Completed {cert.title}.
            </p>
          </div>

          <div className="pt-[var(--space-1)] border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Issuer: {cert.issuer}</span>
            <span className="text-emerald-400 flex items-center gap-[var(--space-half)]">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified
            </span>
          </div>
        </div>

        {/* Topics Covered */}
        <div className="space-y-[var(--space-1)]">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Topics Covered:
          </h4>
          <div className="space-y-[var(--space-1)]">
            {cert.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-[var(--space-half)] text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-[var(--space-2)] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Status: Earned & Active
          </span>
          <button
            onClick={onClose}
            className="min-h-[32px] px-[var(--space-2)] py-[var(--space-1)] rounded-xl bg-space-800 text-slate-300 hover:text-white text-xs font-mono border border-white/5"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
