import React from 'react';
import { Certification } from '../data/portfolioData';
import { X, Award, ExternalLink, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-space-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-white/15 bg-space-900/95 p-6 sm:p-8 shadow-2xl space-y-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-space-800 text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-colors"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-glow mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Technical Credential</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {cert.title}
          </h3>
          <p className="text-cyan-glow font-mono text-sm mt-1">
            Issued by: {cert.issuer}
          </p>
        </div>

        {/* High-tech Certificate Frame / Document Preview */}
        <div className="relative rounded-xl border border-cyan-500/30 bg-gradient-to-br from-space-950 via-space-900 to-space-950 p-6 sm:p-8 text-center space-y-4 shadow-inner overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Golden / Cyan Seal */}
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-violet-600 p-[2px] shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center">
            <div className="w-full h-full bg-space-950 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-cyan-glow" />
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
              Certificate of Completion & Excellence
            </span>
            <div className="text-lg font-bold text-white">
              Divakar Singaravelu
            </div>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Successfully demonstrated verified technical competency in {cert.title}.
            </p>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Issuer: {cert.issuer}</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified
            </span>
          </div>
        </div>

        {/* Syllabus / Highlights Covered */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Competencies & Topics Validated:
          </h4>
          <div className="space-y-1.5">
            {cert.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Status: Earned & Active
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-space-800 text-slate-300 hover:text-white text-xs font-mono border border-white/5"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
