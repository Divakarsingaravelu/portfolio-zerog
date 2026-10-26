import React, { useState } from 'react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';
import { usePhysics } from '../context/PhysicsContext';
import { CertificateModal } from './CertificateModal';
import { TiltCard } from './motion/TiltCard';
import { Magnetic } from './motion/Magnetic';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Eye, Sparkles, CheckCircle2, FileCheck, ArrowUpRight } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { isZeroG } = usePhysics();
  const { certifications } = PORTFOLIO_DATA;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="relative py-28 scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="aurora-violet top-1/3 -left-20 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-800/80 border border-violet-500/30 text-violet-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <Award className="w-3.5 h-3.5" />
            <span>ACCREDITED COMPETENCY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Certifications & <span className="text-gradient-cyan">Workshops</span>
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-2xl leading-relaxed">
            Verified academic milestones and hands-on software development credentials. Each entry is validated with authentic coursework.
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid for Certifications */}
        <div className="grid grid-cols-12 gap-6">
          {certifications.map((cert, index) => {
            const isFlagship = index === 0;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`${cert.bentoSpan || 'col-span-12 lg:col-span-4'} flex flex-col`}
              >
                <TiltCard
                  maxTilt={isFlagship ? 6 : 8}
                  glowColor={cert.accentGlow || 'rgba(139, 92, 246, 0.15)'}
                  enableZeroGFloat={isZeroG}
                  floatDelay={index * 0.4}
                  className="h-full rounded-3xl glass-card border border-white/10 hover:border-violet-500/50 bg-space-950/85 backdrop-blur-xl flex flex-col justify-between group shadow-xl transition-all duration-300 p-6 sm:p-8"
                >
                  <div className="space-y-5">
                    {/* Top Row: Icon & Status */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-space-900 border border-white/10 flex items-center justify-center text-cyan-glow group-hover:scale-110 group-hover:border-cyan-500/50 transition-all shadow-md">
                        <Award className="w-6 h-6" />
                      </div>

                      <div className="flex items-center gap-2">
                        {cert.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-violet-950/70 border border-violet-500/40 text-violet-300">
                            {cert.badge}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Verified
                        </span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className={`font-bold text-white group-hover:text-cyan-glow transition-colors tracking-tight leading-snug mb-1.5 ${
                        isFlagship ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl'
                      }`}>
                        {cert.title}
                      </h3>
                      <div className="text-xs font-mono text-cyan-glow/90 font-medium">
                        {cert.issuer}
                      </div>
                      {cert.date && (
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {cert.date}
                        </div>
                      )}
                    </div>

                    {/* Highlights / Verified Competencies */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        Validated Competencies
                      </span>
                      {cert.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Trigger */}
                  <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      {cert.category}
                    </span>

                    <Magnetic strength={0.25}>
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="px-3.5 py-1.5 rounded-xl bg-space-900/90 hover:bg-cyan-950 text-xs font-mono text-slate-200 hover:text-cyan-glow border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Credential</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </button>
                    </Magnetic>
                  </div>

                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
