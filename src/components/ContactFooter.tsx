import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Download, MessageCircle, Mail, ArrowUp, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactFooter: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#3b82f6', '#06b6d4', '#60a5fa', '#10b981']
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 pt-20 pb-12 border-t border-blue-500/20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Radial Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        
        {/* Main CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-12 rounded-3xl border border-blue-500/30 text-center relative overflow-hidden shadow-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to Connect?
          </h3>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Whether you need enterprise microservice architecture, batch performance tuning, or full-stack software development, feel free to reach out directly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* WhatsApp Direct Link */}
            <a
              href={PORTFOLIO_DATA.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Direct ({PORTFOLIO_DATA.personal.phone})</span>
            </a>

            {/* Email Link */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              onClick={triggerConfetti}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>

            {/* Download Real CV */}
            <a
              href={PORTFOLIO_DATA.personal.cvFileUrl}
              download="CV_Muhammad_Febrian_Maulana_2026.pdf"
              onClick={triggerConfetti}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5 text-cyan-400" />
              <span>Download Real CV</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-slate-800/80">
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 text-sm transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 text-sm transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom Footer Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 pt-6 border-t border-slate-900">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
