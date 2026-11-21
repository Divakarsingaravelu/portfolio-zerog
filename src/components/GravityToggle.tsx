import React from 'react';
import { usePhysics } from '../context/PhysicsContext';
import { Orbit, Compass } from 'lucide-react';

export const GravityToggle: React.FC = () => {
  const { isZeroG, togglePhysics } = usePhysics();

  return (
    <button
      onClick={togglePhysics}
      className={`relative group flex items-center gap-[var(--space-half)] min-h-[32px] px-[var(--space-2)] py-[var(--space-1)] rounded-full text-xs font-mono transition-all duration-300 border ${
        isZeroG
          ? 'bg-cyan-950/40 text-cyan-glow border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
          : 'bg-blue-950/40 text-blue-300 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
      } hover:scale-105 active:scale-95`}
      title={isZeroG ? "Zero-G Active: Click to turn on Gravity!" : "Gravity Active: Click to activate Zero-G!"}
      aria-label="Toggle Zero-G or Gravity Physics Mode"
    >
      <div className="relative flex items-center justify-center">
        {isZeroG ? (
          <Orbit className="w-3.5 h-3.5 text-cyan-glow animate-spin" style={{ animationDuration: '8s' }} />
        ) : (
          <Compass className="w-3.5 h-3.5 text-blue-400" />
        )}
        <span
          className={`absolute -top-0.5 -right-0.5 w-[6px] h-[6px] rounded-full ${
            isZeroG ? 'bg-cyan-glow animate-ping' : 'bg-blue-400'
          }`}
        />
      </div>

      <span className="font-semibold tracking-wider uppercase text-xs leading-[16px]">
        {isZeroG ? 'Zero-G: ON' : 'Gravity: ON'}
      </span>

      {/* Status indicator */}
      <div
        className={`w-2 h-2 rounded-full ${
          isZeroG ? 'bg-cyan-400 shadow-[0_0_8px_#00F0FF]' : 'bg-blue-400 shadow-[0_0_8px_#3B82F6]'
        }`}
      />

      {/* Hover tooltip */}
      <span className="absolute -bottom-[var(--space-4)] left-1/2 -translate-x-1/2 whitespace-nowrap px-[var(--space-1)] py-[var(--space-half)] rounded bg-space-800 text-xs text-slate-300 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        Switch to {isZeroG ? 'Gravity Mode' : 'Zero-G Float'}
      </span>
    </button>
  );
};
