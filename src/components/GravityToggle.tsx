import React from 'react';
import { usePhysics } from '../context/PhysicsContext';
import { Orbit, Compass } from 'lucide-react';

export const GravityToggle: React.FC = () => {
  const { isZeroG, togglePhysics } = usePhysics();

  return (
    <button
      onClick={togglePhysics}
      className={`relative group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border ${
        isZeroG
          ? 'bg-cyan-950/40 text-cyan-glow border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
          : 'bg-violet-950/40 text-violet-300 border-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
      } hover:scale-105 active:scale-95`}
      title={isZeroG ? "Zero-G Active: Weightless float & 3D tilt. Click to turn on Gravity!" : "Gravity Active: Elements obey physical weight. Click to activate Zero-G float!"}
      aria-label="Toggle Zero-G or Gravity Physics Mode"
    >
      <div className="relative flex items-center justify-center">
        {isZeroG ? (
          <Orbit className="w-3.5 h-3.5 text-cyan-glow animate-spin" style={{ animationDuration: '8s' }} />
        ) : (
          <Compass className="w-3.5 h-3.5 text-violet-400" />
        )}
        <span
          className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full ${
            isZeroG ? 'bg-cyan-glow animate-ping' : 'bg-violet-400'
          }`}
        />
      </div>

      <span className="font-semibold tracking-wider uppercase text-[11px]">
        {isZeroG ? 'Zero-G: ON' : 'Gravity: ON'}
      </span>

      {/* Floating status badge indicator pill */}
      <div
        className={`w-2 h-2 rounded-full ${
          isZeroG ? 'bg-cyan-400 shadow-[0_0_8px_#00F0FF]' : 'bg-violet-400 shadow-[0_0_8px_#8B5CF6]'
        }`}
      />

      {/* Hover tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded bg-space-800 text-[10px] text-slate-300 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        Switch to {isZeroG ? 'Gravity Mode' : 'Zero-G Float'}
      </span>
    </button>
  );
};
