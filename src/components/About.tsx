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
    Cpu: <Cpu className="w-6 h-6 text-violet-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-pink-400" />,
  };

  return (
    <section id="about" className="relative py-28 scroll-mt-20">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER MY FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-xl">
            {personal.bioHeading}
          </p>
        </motion.div>

        {/* Narrative Box with Glass Frame */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden bg-space-950/70 backdrop-blur-xl shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                  {personal.bio}
                </p>
                <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2 bg-space-900/80 px-3 py-1.5 rounded-xl border border-white/5">
                    <GraduationCap className="w-4 h-4 text-cyan-glow" />
                    <span>Adhi College of Engineering (B.E. CSE)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-space-900/80 px-3 py-1.5 rounded-xl border border-white/5">
                    <MapPin className="w-4 h-4 text-violet-400" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-space-900/80 px-3 py-1.5 rounded-xl border border-white/5">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>NxtWave CCBP Full Stack Certified</span>
                  </div>
                </div>
              </div>

              {/* Quick Highlight Stats */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl border border-white/10 bg-space-900/60 text-center">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-glow">2027</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">Graduation Cohort</div>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-space-900/60 text-center">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-violet-400">3+</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">Core Languages</div>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-space-900/60 text-center">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-pink-400">6+</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">Verified Certs</div>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-space-900/60 text-center">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">100%</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">Genuine Profile</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Core Pillars Cards with 3D TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="h-full glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 bg-space-950/80 backdrop-blur-xl group transition-all duration-300 shadow-xl"
              >
                {/* Pillar top highlight bar */}
                <div
                  className="w-12 h-1 rounded-full mb-6 transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: pillar.accent }}
                />

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-space-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {iconMap[pillar.icon]}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-glow transition-colors tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Sub-badge */}
                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-glow" />
                    Continuous Growth
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
