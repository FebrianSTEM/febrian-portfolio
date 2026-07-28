import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CourseItem } from '../data/portfolioData';
import { Award, Calendar, CheckCircle2, ExternalLink, ShieldCheck, X, Copy, Check } from 'lucide-react';

interface CredentialModalProps {
  course: CourseItem | null;
  onClose: () => void;
}

export const CredentialModal: React.FC<CredentialModalProps> = ({ course, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (course) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  const handleCopyId = () => {
    if (course.credentialId) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(course.credentialId);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = course.credentialId;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-slate-900/95 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Ambient Glow in Modal Header */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10 shrink-0">
              <Award className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  {course.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {course.title}
              </h3>
              <p className="text-sm font-medium text-slate-300">
                Issued by <span className="text-cyan-400">{course.organizer}</span>
              </p>
            </div>
          </div>

          {/* Key Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs text-slate-400">Issue Date</div>
                <div className="text-sm font-semibold text-slate-200">{course.issued}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <div className="text-xs text-slate-400">Validity</div>
                <div className="text-sm font-semibold text-slate-200">{course.expiration || 'No Expiration'}</div>
              </div>
            </div>

            {course.credentialId && (
              <div className="sm:col-span-2 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Credential ID</div>
                  <div className="text-sm font-mono text-cyan-300 font-semibold">{course.credentialId}</div>
                </div>
                <button
                  onClick={handleCopyId}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy ID</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Description Section */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Syllabus & Overview</h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/30 p-4 rounded-xl border border-slate-800/50">
              {course.description}
            </p>
          </div>

          {/* Mastered Skills */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Mastered Competencies & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/25"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            {course.credentialUrl && (
              <a
                href={course.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
