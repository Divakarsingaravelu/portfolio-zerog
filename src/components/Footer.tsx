import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-space-950 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="aurora-cyan bottom-0 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-600/30 border border-cyan-500/30 flex items-center justify-center">
                <span className="font-mono font-bold text-xs text-cyan-glow">D</span>
              </div>
              <span className="font-mono font-bold text-lg text-white tracking-wider">
                DIVAKAR<span className="text-cyan-glow">.S</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              {personal.fullName} • {personal.title}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-glow transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-space-800 text-slate-300 hover:text-cyan-glow border border-white/5 hover:border-cyan-500/30 transition-all"
              aria-label="Divakar LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-space-800 text-slate-300 hover:text-violet-300 border border-white/5 hover:border-violet-500/30 transition-all"
              aria-label="Divakar GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-950/60 text-cyan-glow border border-cyan-500/40 hover:bg-cyan-900/60 shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all ml-2 group"
              title="Return to top of page"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Zero-G Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3 text-center sm:text-left">
          <div>
            &copy; {currentYear} {personal.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Designed & Built with</span>
            <span className="text-cyan-glow">Zero-G UI</span>
            <span>• React, Vite & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
