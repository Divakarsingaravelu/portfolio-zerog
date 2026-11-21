import React, { useState } from 'react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';
import { usePhysics } from '../context/PhysicsContext';
import { CertificateModal } from './CertificateModal';
import { TiltCard } from './motion/TiltCard';
import { Magnetic } from './motion/Magnetic';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Eye, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { isZeroG } = usePhysics();
  const { certifications } = PORTFOLIO_DATA;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="relative py-[var(--space-12)] scroll-mt-[var(--space-3)]">
      {/* Background ambient lighting */}
      <div className="aurora-blue top-1/3 -left-[var(--space-3)] opacity-25 pointer-events-none" />

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
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.125]">
            Certifications
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-2xl leading-[24px]">
            Completed coursework and hands-on training credentials.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-[var(--space-3)]">
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
                  glowColor={cert.accentGlow || 'rgba(0, 240, 255, 0.15)'}
                  enableZeroGFloat={isZeroG}
                  floatDelay={index * 0.4}
                  className="h-full rounded-3xl glass-card border border-white/10 hover:border-cyan-500/50 bg-space-950/85 backdrop-blur-xl flex flex-col justify-between group shadow-xl transition-all duration-300 p-[var(--space-3)] sm:p-[var(--space-4)]"
                >
                  <div className="space-y-[var(--space-3)]">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <div className="w-[var(--space-6)] h-[var(--space-6)] rounded-2xl bg-space-900 border border-white/10 flex items-center justify-center text-cyan-glow group-hover:scale-110 group-hover:border-cyan-500/50 transition-all shadow-md">
                        <Award className="w-6 h-6" />
                      </div>

                      <div className="flex items-center gap-[var(--space-1)]">
                        {cert.badge && (
                          <span className="px-[var(--space-1)] py-[var(--space-half)] rounded-full text-xs font-mono bg-blue-950/70 border border-blue-500/40 text-blue-300">
                            {cert.badge}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-[var(--space-half)] px-[var(--space-1)] py-[var(--space-half)] rounded-full text-xs font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Verified
                        </span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className={`font-bold text-white group-hover:text-cyan-glow transition-colors tracking-tight leading-[24px] mb-[var(--space-half)] ${
                        isFlagship ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl'
                      }`}>
                        {cert.title}
                      </h3>
                      <div className="text-xs font-mono text-cyan-glow/90 font-medium">
                        {cert.issuer}
                      </div>
                      {cert.date && (
                        <div className="text-xs font-mono text-slate-400 mt-[var(--space-half)]">
                          {cert.date}
                        </div>
                      )}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-[var(--space-1)] pt-[var(--space-1)] border-t border-white/5">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                        Topics Covered
                      </span>
                      {cert.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-[var(--space-half)] text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom */}
                  <div className="pt-[var(--space-3)] mt-[var(--space-2)] border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">
                      {cert.category}
                    </span>

                    <Magnetic strength={0.25}>
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="min-h-[32px] px-[var(--space-2)] py-[var(--space-1)] rounded-xl bg-space-900/90 hover:bg-cyan-950 text-xs font-mono text-slate-200 hover:text-cyan-glow border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-[var(--space-half)] shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
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
