import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePhysics } from '../context/PhysicsContext';
import { TiltCard } from './motion/TiltCard';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  const { isZeroG } = usePhysics();
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="relative py-[var(--space-12)] scroll-mt-[var(--space-3)]">
      <div className="max-w-7xl mx-auto px-[var(--space-2)] sm:px-[var(--space-3)] lg:px-[var(--space-4)] relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-[var(--space-8)] gap-[var(--space-2)]"
        >
          <div className="inline-flex items-center gap-[var(--space-half)] px-[var(--space-2)] py-[var(--space-half)] rounded-full bg-space-800/80 border border-cyan-500/30 text-cyan-glow text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>EDUCATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.125]">
            Education
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-xl leading-[24px]">
            My engineering degree and software development training.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-[var(--space-2)] bottom-[var(--space-2)] -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-glow via-blue-500 to-transparent opacity-40" />

          <div className="space-y-[var(--space-6)]">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-[var(--space-4)] h-[var(--space-4)] rounded-full bg-space-950 border-2 border-cyan-glow items-center justify-center z-20 shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-glow" />
                  </div>

                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 md:px-[var(--space-4)]">
                    <TiltCard
                      maxTilt={6}
                      glowColor="rgba(0, 240, 255, 0.15)"
                      enableZeroGFloat={isZeroG}
                      floatDelay={index * 0.4}
                      className="glass-card rounded-2xl p-[var(--space-3)] sm:p-[var(--space-4)] border border-white/10 hover:border-cyan-500/40 bg-space-950/85 backdrop-blur-xl relative overflow-hidden transition-all duration-300 shadow-xl"
                    >
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-[var(--space-1)] mb-[var(--space-1)]">
                        <span className="inline-flex items-center gap-[var(--space-half)] px-[var(--space-1)] py-[var(--space-half)] rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-glow text-xs font-mono">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>

                        <span className="px-[var(--space-1)] py-[var(--space-half)] rounded-full text-xs font-mono bg-blue-950/60 border border-blue-500/30 text-blue-300">
                          {item.status}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-[var(--space-half)] leading-[24px] tracking-tight">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className="text-cyan-glow/90 font-mono text-sm font-medium mb-[var(--space-half)]">
                        {item.institution}
                      </div>

                      {item.affiliate && (
                        <div className="text-slate-400 text-xs font-mono mb-[var(--space-1)]">
                          ({item.affiliate})
                        </div>
                      )}

                      {item.location && (
                        <div className="flex items-center gap-[var(--space-half)] text-xs text-slate-400 mb-[var(--space-1)]">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.location}</span>
                        </div>
                      )}

                      <p className="text-slate-300 text-sm leading-[24px] mb-[var(--space-2)]">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-[var(--space-1)] pt-[var(--space-1)] border-t border-white/5">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-[var(--space-1)] flex items-center gap-[var(--space-half)]">
                          <BookOpen className="w-3.5 h-3.5 text-cyan-glow" /> Key Focus
                        </div>
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-[var(--space-half)] text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </TiltCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
