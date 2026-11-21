import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';
import { ArrowUp } from 'lucide-react';

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
    <footer className="relative border-t border-white/10 bg-space-950 pt-[var(--space-8)] pb-[var(--space-6)] overflow-hidden">
      {/* Background ambient */}
      <div className="aurora-cyan bottom-0 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-[var(--space-2)] sm:px-[var(--space-3)] lg:px-[var(--space-4)] relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-[var(--space-4)] pb-[var(--space-4)] border-b border-white/5">
          
          {/* Brand */}
          <div className="space-y-[var(--space-1)] text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-[var(--space-1)]">
              <div className="w-[32px] h-[32px] rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center">
                <span className="font-mono font-bold text-xs text-cyan-glow">D</span>
              </div>
              <span className="font-mono font-bold text-lg text-white tracking-wider leading-[24px]">
                DIVAKAR<span className="text-cyan-glow">.S</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono leading-[16px]">
              {personal.fullName} · {personal.title}
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-[var(--space-2)] sm:gap-[var(--space-3)] text-xs font-mono text-slate-400">
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
          <div className="flex items-center gap-[var(--space-1)]">
            <a
              href={personal.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-xl bg-space-800 text-slate-300 hover:text-cyan-glow border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-center"
              aria-label="Divakar LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-xl bg-space-800 text-slate-300 hover:text-cyan-glow border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-center"
              aria-label="Divakar GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-[40px] h-[40px] rounded-xl bg-cyan-950/60 text-cyan-glow border border-cyan-500/40 hover:bg-cyan-900/60 shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all flex items-center justify-center group"
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-[var(--space-4)] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-[var(--space-1)] text-center sm:text-left">
          <div>
            &copy; {currentYear} {personal.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-[var(--space-half)] text-slate-400">
            <span>Built with</span>
            <span className="text-cyan-glow">React, Vite & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
