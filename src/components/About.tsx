import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePhysics } from '../context/PhysicsContext';
import { TiltCard } from './motion/TiltCard';
import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles, MapPin, GraduationCap, Award, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const { isZeroG } = usePhysics();
  const { personal, aboutPillars } = PORTFOLIO_DATA;

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-cyan-glow" />,
    Cpu: <Cpu className="w-6 h-6 text-blue-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-cyan-400" />,
  };

  return (
    <section id="about" className="relative py-[var(--space-12)] scroll-mt-[var(--space-3)]">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.125]">
            About <span className="text-gradient-cyan">me</span>
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-xl">
            {personal.bioHeading}
          </p>
        </motion.div>

        {/* Bio Box */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative mb-[var(--space-8)]"
        >
          <div className="glass-card rounded-2xl p-[var(--space-3)] sm:p-[var(--space-5)] border border-white/10 relative overflow-hidden bg-space-950/70 backdrop-blur-xl shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-4)] items-center">
              <div className="lg:col-span-8 space-y-[var(--space-2)]">
                <p className="text-slate-200 text-base sm:text-lg leading-[24px] font-normal">
                  {personal.bio}
                </p>
                <div className="pt-[var(--space-1)] flex flex-wrap gap-[var(--space-1)] text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-[var(--space-half)] bg-space-900/80 px-[var(--space-2)] py-[var(--space-1)] rounded-xl border border-white/5">
                    <GraduationCap className="w-4 h-4 text-cyan-glow" />
                    <span>Adhi College of Engineering (B.E. CSE)</span>
                  </div>
                  <div className="flex items-center gap-[var(--space-half)] bg-space-900/80 px-[var(--space-2)] py-[var(--space-1)] rounded-xl border border-white/5">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center gap-[var(--space-half)] bg-space-900/80 px-[var(--space-2)] py-[var(--space-1)] rounded-xl border border-white/5">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>NxtWave CCBP Full Stack Certified</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-[var(--space-1)]">
                <div className="p-[var(--space-2)] rounded-xl border border-white/10 bg-space-900/60 text-center">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-glow leading-[32px]">2027</div>
                  <div className="text-xs font-mono text-slate-400 mt-[var(--space-half)]">Graduation</div>
                </div>
                <div className="p-[var(--space-2)] rounded-xl border border-white/10 bg-space-900/60 text-center">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-blue-400 leading-[32px]">3+</div>
                  <div className="text-xs font-mono text-slate-400 mt-[var(--space-half)]">Languages</div>
                </div>
                <div className="p-[var(--space-2)] rounded-xl border border-white/10 bg-space-900/60 text-center">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 leading-[32px]">6+</div>
                  <div className="text-xs font-mono text-slate-400 mt-[var(--space-half)]">Projects</div>
                </div>
                <div className="p-[var(--space-2)] rounded-xl border border-white/10 bg-space-900/60 text-center">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 leading-[32px]">5</div>
                  <div className="text-xs font-mono text-slate-400 mt-[var(--space-half)]">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-3)]">
          {aboutPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <TiltCard
                maxTilt={8}
                glowColor={pillar.accent}
                enableZeroGFloat={isZeroG}
                floatDelay={index * 0.3}
                className="h-full glass-card rounded-2xl p-[var(--space-3)] sm:p-[var(--space-4)] flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 bg-space-950/80 backdrop-blur-xl group transition-all duration-300 shadow-xl"
              >
                {/* Pillar top highlight bar */}
                <div
                  className="w-[var(--space-6)] h-[var(--space-half)] rounded-full mb-[var(--space-3)] transition-all duration-300 group-hover:w-[var(--space-10)]"
                  style={{ backgroundColor: pillar.accent }}
                />

                <div className="space-y-[var(--space-2)]">
                  <div className="w-[var(--space-6)] h-[var(--space-6)] rounded-xl bg-space-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {iconMap[pillar.icon]}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-glow transition-colors tracking-tight leading-[24px]">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-[24px]">
                    {pillar.description}
                  </p>
                </div>

                {/* Sub-badge */}
                <div className="pt-[var(--space-3)] mt-[var(--space-2)] border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-[var(--space-half)]">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-glow" />
                    Active
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: pillar.accent }}>
                    0{index + 1}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
