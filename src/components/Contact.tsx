import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePhysics } from '../context/PhysicsContext';
import { LinkedinIcon, GithubIcon } from './Icons';
import { Magnetic } from './motion/Magnetic';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { isZeroG } = usePhysics();
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState<boolean>(false);
  const [status, setStatus] = useState<'idle' | 'submitted' | 'info'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please add a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitted');
  };

  const handleDirectMailto = () => {
    const mailtoUrl = `mailto:${personal.contactEmail}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Hi Divakar,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative py-[var(--space-12)] scroll-mt-[var(--space-3)]">
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.125]">
            Contact
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-xl leading-[24px]">
            Open for internship and graduate roles. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-5)] items-start">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-[var(--space-3)]"
          >
            
            {/* Email Copy Box */}
            <div className="glass-card rounded-2xl p-[var(--space-3)] sm:p-[var(--space-4)] border border-white/10 relative overflow-hidden bg-space-950/80 backdrop-blur-xl shadow-xl space-y-[var(--space-2)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-glow uppercase tracking-wider flex items-center gap-[var(--space-half)]">
                  <Mail className="w-4 h-4" /> Direct Email
                </span>
                <span className="text-xs font-mono text-slate-400">Response &lt; 24h</span>
              </div>

              <div className="p-[var(--space-2)] rounded-xl bg-space-900 border border-white/5 flex items-center justify-between gap-[var(--space-1)]">
                <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                  {personal.contactEmail}
                </span>

                <Magnetic strength={0.3}>
                  <button
                    onClick={handleCopyEmail}
                    className={`min-h-[32px] px-[var(--space-2)] py-[var(--space-1)] rounded-xl transition-all flex items-center gap-[var(--space-half)] text-xs font-mono cursor-pointer ${
                      copied
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                        : 'bg-space-800 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/40'
                    }`}
                    title="Copy email to clipboard"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="hidden sm:inline">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </Magnetic>
              </div>

              <p className="text-xs text-slate-400 leading-[24px]">
                Copy my email or use the contact form below.
              </p>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-[var(--space-3)] border border-white/10 bg-space-950/80 backdrop-blur-xl space-y-[var(--space-2)]">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Profiles
              </span>

              <div className="space-y-[var(--space-1)]">
                <Magnetic strength={0.2} className="w-full">
                  <a
                    href={personal.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-[var(--space-2)] rounded-xl bg-space-900/60 hover:bg-space-900 border border-white/5 hover:border-cyan-500/40 transition-all group w-full"
                  >
                    <div className="flex items-center gap-[var(--space-1)]">
                      <div className="w-[40px] h-[40px] rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <LinkedinIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-glow transition-colors">
                          LinkedIn
                        </div>
                        <div className="text-xs font-mono text-slate-400">
                          /in/divakarsingaravelu
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-glow group-hover:translate-x-0.5 transition-all" />
                  </a>
                </Magnetic>

                <Magnetic strength={0.2} className="w-full">
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-[var(--space-2)] rounded-xl bg-space-900/60 hover:bg-space-900 border border-white/5 hover:border-cyan-500/40 transition-all group w-full"
                  >
                    <div className="flex items-center gap-[var(--space-1)]">
                      <div className="w-[40px] h-[40px] rounded-lg bg-space-800/60 border border-white/20 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-glow transition-colors">
                          GitHub
                        </div>
                        <div className="text-xs font-mono text-slate-400">
                          {personal.githubUrl.replace('https://github.com/', '@')}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-glow group-hover:translate-x-0.5 transition-all" />
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Location */}
            <div className="p-[var(--space-2)] rounded-xl border border-white/5 bg-space-950/70 text-xs font-mono text-slate-400 space-y-[var(--space-half)] leading-[24px]">
              <div className="text-slate-300 font-semibold">Location & Availability:</div>
              <div>Based in Chennai / Kanchipuram, Tamil Nadu, India.</div>
              <div className="text-cyan-glow">Open for full-stack internship & graduate roles.</div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-[var(--space-3)] sm:p-[var(--space-5)] border border-white/10 relative overflow-hidden bg-space-950/85 backdrop-blur-xl shadow-2xl">
              
              {status === 'submitted' ? (
                <div className="space-y-[var(--space-3)] text-center py-[var(--space-3)] animate-in fade-in duration-300">
                  <div className="w-[var(--space-8)] h-[var(--space-8)] mx-auto rounded-full bg-cyan-950 border-2 border-cyan-glow flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                    <Sparkles className="w-8 h-8 text-cyan-glow animate-pulse" />
                  </div>

                  <div className="space-y-[var(--space-1)]">
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-[32px]">
                      Message Ready
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-[24px]">
                      Thanks for reaching out, <span className="text-cyan-glow font-semibold">{formData.name}</span>.
                    </p>
                  </div>

                  <div className="p-[var(--space-2)] rounded-xl bg-space-900 border border-cyan-500/30 text-left text-xs font-mono text-slate-300 space-y-[var(--space-1)]">
                    <div className="flex items-center gap-[var(--space-half)] text-cyan-glow font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Ready to Send</span>
                    </div>
                    <p className="text-slate-400 leading-[24px]">
                      Click below to open your email client with the message pre-filled.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-[var(--space-1)] pt-[var(--space-1)]">
                    <Magnetic strength={0.25}>
                      <button
                        onClick={handleDirectMailto}
                        className="min-h-[40px] px-[var(--space-3)] py-[var(--space-1)] rounded-xl bg-gradient-to-r from-cyan-glow to-blue-500 text-space-950 font-bold text-xs font-mono shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:brightness-110 flex items-center gap-[var(--space-half)] cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Open in Mail App</span>
                      </button>
                    </Magnetic>

                    <Magnetic strength={0.25}>
                      <button
                        onClick={() => setStatus('idle')}
                        className="min-h-[40px] px-[var(--space-2)] py-[var(--space-1)] rounded-xl bg-space-800 text-slate-300 hover:text-white text-xs font-mono border border-white/5 cursor-pointer"
                      >
                        Edit Message
                      </button>
                    </Magnetic>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-[var(--space-3)]" noValidate>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-2)]">
                    <div className="space-y-[var(--space-half)]">
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 leading-[16px]">
                        Your Name <span className="text-cyan-glow">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full min-h-[40px] px-[var(--space-2)] py-[var(--space-1)] rounded-xl bg-space-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all ${
                          errors.name
                            ? 'border-rose-500/80 focus:border-rose-400'
                            : 'border-white/10 focus:border-cyan-glow focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs font-mono text-rose-400 leading-[16px]">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-[var(--space-half)]">
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 leading-[16px]">
                        Your Email <span className="text-cyan-glow">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className={`w-full min-h-[40px] px-[var(--space-2)] py-[var(--space-1)] rounded-xl bg-space-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500/80 focus:border-rose-400'
                            : 'border-white/10 focus:border-cyan-glow focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs font-mono text-rose-400 leading-[16px]">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-[var(--space-half)]">
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 leading-[16px]">
                      Subject <span className="text-cyan-glow">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Opportunity / Project Collaboration"
                      className={`w-full min-h-[40px] px-[var(--space-2)] py-[var(--space-1)] rounded-xl bg-space-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all ${
                        errors.subject
                          ? 'border-rose-500/80 focus:border-rose-400'
                          : 'border-white/10 focus:border-cyan-glow focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs font-mono text-rose-400 leading-[16px]">{errors.subject}</p>
                    )}
                  </div>

                  <div className="space-y-[var(--space-half)]">
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 leading-[16px]">
                      Message <span className="text-cyan-glow">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the opportunity or just say hello..."
                      className={`w-full min-h-[120px] px-[var(--space-2)] py-[var(--space-1)] rounded-xl bg-space-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-400'
                          : 'border-white/10 focus:border-cyan-glow focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs font-mono text-rose-400 leading-[16px]">{errors.message}</p>
                    )}
                  </div>

                  <Magnetic strength={0.2} className="w-full">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full min-h-[48px] py-[var(--space-2)] rounded-xl bg-gradient-to-r from-cyan-glow via-cyan-400 to-blue-500 text-space-950 font-bold text-sm shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.55)] hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-[var(--space-half)] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send</span>
                    </button>
                  </Magnetic>

                  <p className="text-xs font-mono text-slate-500 text-center leading-[16px]">
                    Client-side validation only. Opens your email client to send.
                  </p>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
