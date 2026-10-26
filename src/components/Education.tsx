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
    <section id="education" className="relative py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-800/80 border border-cyan-500/30 text-cyan-glow text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC & PROFESSIONAL PATHWAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Training</span>
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-xl leading-relaxed">
            My formal engineering foundation and intensive software development credentials.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-glow via-violet-500 to-transparent opacity-40" />

          <div className="space-y-12">
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
                  {/* Central Node Orb */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-space-950 border-2 border-cyan-glow items-center justify-center z-20 shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-glow" />
                  </div>

                  {/* Spacer for 50% width on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card with TiltCard */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <TiltCard
                      maxTilt={6}
                      glowColor={isEven ? 'rgba(0, 240, 255, 0.15)' : 'rgba(139, 92, 246, 0.15)'}
                      enableZeroGFloat={isZeroG}
                      floatDelay={index * 0.4}
                      className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 bg-space-950/85 backdrop-blur-xl relative overflow-hidden transition-all duration-300 shadow-xl"
                    >
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-glow text-xs font-mono">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>

                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-violet-950/60 border border-violet-500/30 text-violet-300">
                          {item.status}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-snug tracking-tight">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className="text-cyan-glow/90 font-mono text-sm font-medium mb-1">
                        {item.institution}
                      </div>

                      {item.affiliate && (
                        <div className="text-slate-400 text-xs font-mono mb-2">
                          ({item.affiliate})
                        </div>
                      )}

                      {item.location && (
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.location}</span>
                        </div>
                      )}

                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-white/5">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-cyan-glow" /> Key Focus & Activities
                        </div>
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
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
