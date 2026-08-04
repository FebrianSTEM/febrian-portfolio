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
    <footer className="relative bg-[#050714] pt-16 pb-10 border-t border-slate-900 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Main CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#090D16] p-8 sm:p-12 rounded-2xl border border-slate-800 text-center relative overflow-hidden shadow-xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AVAILABLE FOR SENIOR BACKEND & LEAD ROLES</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Let's Build Something Great Together
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Interested in backend microservice architecture, high-throughput payment processing, or team leadership? Get in touch.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* WhatsApp Direct */}
            <a
              href={PORTFOLIO_DATA.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp ({PORTFOLIO_DATA.personal.phone})</span>
            </a>

            {/* Email Link */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              onClick={triggerConfetti}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>

            {/* Download Real CV */}
            <a
              href={PORTFOLIO_DATA.personal.cvFileUrl}
              download="CV_Muhammad_Febrian_Maulana_2026.pdf"
              onClick={triggerConfetti}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Real CV</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-slate-800/80">
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-mono transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-mono transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom Footer Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 pt-4 border-t border-slate-900">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Crafted with precision.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-slate-700 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

