import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { MessageCircle, Mail, Download, X, Sparkles, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { SpidermanMaskSVG, SpiderWebPatternSVG } from './SpidermanSVGs';

interface SpidermanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpidermanModal: React.FC<SpidermanModalProps> = ({ isOpen, onClose }) => {
  const openTimeRef = React.useRef<number>(0);

  useEffect(() => {
    if (isOpen) {
      openTimeRef.current = Date.now();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const triggerSpideyConfetti = () => {
    // Red, Gold, Cyan Spidey themed confetti burst
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#E30022', '#F2C100', '#00E5FF', '#FFFFFF', '#0A66C2'],
    });
  };

  const handleActionClick = (actionFn?: () => void) => {
    triggerSpideyConfetti();
    if (actionFn) actionFn();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Ignore synthetic click ghosting on mobile within 400ms of opening
    if (Date.now() - openTimeRef.current < 400) {
      return;
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark Glassmorphic Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
          />

          {/* Spidey Mask Modal Container */}
          <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-[#050714]/90 border border-[#E30022]/40 shadow-[0_0_50px_rgba(227,0,34,0.3)] rounded-3xl p-6 sm:p-8 max-w-lg w-full overflow-hidden text-center backdrop-blur-xl"
        >
          {/* Subtle Background Spider Web SVG Pattern */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <SpiderWebPatternSVG className="w-full h-full" />
          </div>

          {/* Glowing Top Radial Light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#E30022]/15 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-400 hover:text-white hover:border-[#E30022] hover:bg-[#E30022]/20 transition-all cursor-pointer z-20"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Mask Icon & Header Badge */}
          <div className="flex flex-col items-center justify-center mt-2 mb-4">
            <motion.div
              animate={{ scale: [1, 1.04, 1], rotate: [-1, 1, -1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative mb-3 filter drop-shadow-[0_0_20px_rgba(227,0,34,0.7)]"
            >
              <SpidermanMaskSVG className="w-24 h-24 sm:w-28 sm:h-28" />
            </motion.div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E30022]/15 border border-[#E30022]/40 text-[#E30022] text-xs font-mono font-semibold uppercase tracking-widest shadow-[0_0_12px_rgba(227,0,34,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-[#F2C100]" />
              <span>SPIDER-MAN: BRAND NEW DAY</span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            You caught <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E4D] via-[#E30022] to-[#F2C100]">Spider-Man!</span>
          </h2>

          {/* Main Question */}
          <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed mb-2">
            Do you want to catch me as your <span className="text-cyan-400 font-semibold">software engineer</span> / <span className="text-blue-400 font-semibold">backend engineer</span>?
          </p>

          {/* Tagline */}
          <p className="text-[#F2C100] text-sm sm:text-base font-semibold italic mb-6">
            "I'm your friendly neighborhood software engineer!"
          </p>

          {/* Contact CTAs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {/* WhatsApp */}
            <a
              href={PORTFOLIO_DATA.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleActionClick()}
              className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-sm shadow-md transition-all hover:scale-[1.02] hover:border-emerald-400"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-auto" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              onClick={() => handleActionClick()}
              className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 font-semibold text-sm shadow-md transition-all hover:scale-[1.02] hover:border-blue-400"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Send Email</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-auto" />
            </a>

            {/* LinkedIn */}
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleActionClick()}
              className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/40 text-sky-300 font-semibold text-sm shadow-md transition-all hover:scale-[1.02] hover:border-sky-400"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-auto" />
            </a>

            {/* GitHub */}
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleActionClick()}
              className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-800/80 border border-slate-600/50 text-slate-200 font-semibold text-sm shadow-md transition-all hover:scale-[1.02] hover:border-slate-400"
            >
              <GithubIcon className="w-4 h-4 text-slate-200" />
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-auto" />
            </a>
          </div>

          {/* Resume Download CTA (Full Width) */}
          <a
            href={PORTFOLIO_DATA.personal.cvFileUrl}
            download="CV_Muhammad_Febrian_Maulana_2026.pdf"
            onClick={() => handleActionClick()}
            className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#F2C100]/20 to-amber-500/20 hover:from-[#F2C100]/30 hover:to-amber-500/30 border border-[#F2C100]/50 text-[#F2C100] font-bold text-sm shadow-lg transition-all hover:scale-[1.01] mb-3"
          >
            <Download className="w-4 h-4 text-[#F2C100]" />
            <span>Download Resume / CV</span>
          </a>

          {/* Primary Dismiss Button */}
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-[#E30022] hover:bg-[#FF1E43] text-white font-bold text-sm shadow-lg shadow-red-600/40 transition-all hover:shadow-red-600/60 cursor-pointer"
          >
            Let's Build Something Great!
          </button>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};
