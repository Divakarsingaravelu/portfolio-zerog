import React, { useState, useEffect } from 'react';
import { GravityToggle } from './GravityToggle';
import { Magnetic } from './motion/Magnetic';
import { Menu, X, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section scroll spy
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 glass-nav shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo with Magnetic micro-interaction */}
        <Magnetic strength={0.25}>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow rounded-lg px-1 py-0.5"
            aria-label="Divakar.S Portfolio Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-600/30 to-purple-800/40 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-glow group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300">
              <span className="font-mono font-bold text-sm text-cyan-glow">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-base tracking-wider text-slate-100 group-hover:text-cyan-glow transition-colors">
                DIVAKAR<span className="text-cyan-glow">.S</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Full Stack Dev
              </span>
            </div>
          </a>
        </Magnetic>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-space-800/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <Magnetic key={link.label} strength={0.2}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 block ${
                    isActive
                      ? 'text-cyan-glow bg-cyan-950/40 shadow-[0_0_12px_rgba(0,240,255,0.15)] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-glow rounded-full shadow-[0_0_8px_#00F0FF]" />
                  )}
                </a>
              </Magnetic>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden sm:flex items-center gap-3">
          <Magnetic strength={0.2}>
            <GravityToggle />
          </Magnetic>

          <Magnetic strength={0.3}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative group overflow-hidden px-4 py-2 rounded-full text-xs font-semibold text-space-950 bg-gradient-to-r from-cyan-glow to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
        </div>

        {/* Mobile Menu & Physics Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <GravityToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-space-800 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-nav mt-3 border-b border-white/10 px-6 py-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-cyan-950/60 text-cyan-glow border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-2.5 rounded-lg text-center text-xs font-semibold text-space-950 bg-cyan-glow hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center justify-center gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
