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
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { isZeroG } = usePhysics();
  const { personal } = PORTFOLIO_DATA;

  // Form states
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

    // Show transparent submission modal/notification explaining configuration
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
    <section id="contact" className="relative py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-800/80 border border-cyan-500/30 text-cyan-glow text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Let's Build <span className="text-gradient-cyan">Something Together</span>
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-xl leading-relaxed">
            I'm always interested in learning, collaborating, and exploring exciting development opportunities. Feel free to connect with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Quick Email Copy Box */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden bg-space-950/80 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-glow uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-4 h-4" /> Direct Email
                </span>
                <span className="text-[11px] font-mono text-slate-400">Response &lt; 24h</span>
              </div>

              <div className="p-3.5 rounded-xl bg-space-900 border border-white/5 flex items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                  {personal.contactEmail}
                </span>

                <Magnetic strength={0.3}>
                  <button
                    onClick={handleCopyEmail}
                    className={`p-2 rounded-xl transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer ${
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

              <p className="text-xs text-slate-400 leading-relaxed">
                Clicking Copy will store my email directly to your clipboard, or you can send a message using the form.
              </p>
            </div>

            {/* Social & Professional Links */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 bg-space-950/80 backdrop-blur-xl space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Professional Networks
              </span>

              <div className="space-y-3">
                {/* LinkedIn */}
                <Magnetic strength={0.2} className="w-full">
                  <a
                    href={personal.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-space-900/60 hover:bg-space-900 border border-white/5 hover:border-cyan-500/40 transition-all group w-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <LinkedinIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-glow transition-colors">
                          LinkedIn
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          /in/divakarsingaravelu
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-glow group-hover:translate-x-0.5 transition-all" />
                  </a>
                </Magnetic>

                {/* GitHub */}
                <Magnetic strength={0.2} className="w-full">
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-space-900/60 hover:bg-space-900 border border-white/5 hover:border-violet-500/40 transition-all group w-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                          GitHub
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          {personal.githubUrl.replace('https://github.com/', '@')}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-violet-300 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Location & Status Note */}
            <div className="p-4 rounded-xl border border-white/5 bg-space-950/70 text-xs font-mono text-slate-400 space-y-1">
              <div className="text-slate-300 font-semibold">Location & Availability:</div>
              <div>Based in Chennai / Kanchipuram, Tamil Nadu, India.</div>
              <div className="text-cyan-glow">Open for Full Stack internship & graduate roles.</div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden bg-space-950/85 backdrop-blur-xl shadow-2xl">
              
              {status === 'submitted' ? (
                /* Honest Success & Delivery Dialog */
                <div className="space-y-6 text-center py-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-cyan-950 border-2 border-cyan-glow flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                    <Sparkles className="w-8 h-8 text-cyan-glow animate-pulse" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Message Formulated!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <span className="text-cyan-glow font-semibold">{formData.name}</span>!
                    </p>
                  </div>

                  {/* Honest explanation of submission status */}
                  <div className="p-4 rounded-xl bg-space-900 border border-cyan-500/30 text-left text-xs font-mono text-slate-300 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-glow font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Direct Transmission Ready</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      To keep this portfolio 100% genuine without mock third-party backend servers, click the button below to launch your default email client with your pre-filled inquiry:
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <Magnetic strength={0.25}>
                      <button
                        onClick={handleDirectMailto}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-glow to-blue-500 text-space-950 font-bold text-xs font-mono shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:brightness-110 flex items-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Open in Mail App</span>
                      </button>
                    </Magnetic>

                    <Magnetic strength={0.25}>
                      <button
                        onClick={() => setStatus('idle')}
                        className="px-4 py-2.5 rounded-xl bg-space-800 text-slate-300 hover:text-white text-xs font-mono border border-white/5 cursor-pointer"
                      >
                        Edit Message
                      </button>
                    </Magnetic>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300">
                        Your Name <span className="text-cyan-glow">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-space-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all ${
                          errors.name
                            ? 'border-rose-500/80 focus:border-rose-400'
                            : 'border-white/10 focus:border-cyan-glow focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300">
                        Your Email <span className="text-cyan-glow">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-space-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500/80 focus:border-rose-400'
                            : 'border-white/10 focus:border-cyan-glow focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
                      Subject <span className="text-cyan-glow">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Internship Opportunity / Project Collaboration"
                      className={`w-full px-4 py-3 rounded-xl bg-space-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all ${
                        errors.subject
                          ? 'border-rose-500/80 focus:border-rose-400'
                          : 'border-white/10 focus:border-cyan-glow focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] font-mono text-rose-400">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                      Message <span className="text-cyan-glow">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a project overview, opportunity details, or just say hello..."
                      className={`w-full px-4 py-3 rounded-xl bg-space-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-400'
                          : 'border-white/10 focus:border-cyan-glow focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button with Magnetic micro-interaction */}
                  <Magnetic strength={0.2} className="w-full">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-glow via-cyan-400 to-blue-500 text-space-950 font-bold text-sm shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.55)] hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </button>
                  </Magnetic>

                  <p className="text-[11px] font-mono text-slate-500 text-center">
                    Protected by client validation • Zero spam • Instant direct mail option
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
