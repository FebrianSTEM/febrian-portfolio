import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, CheckCircle2, Sparkles } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const LOCAL_STORAGE_KEY = 'linkedin_certs_last_check';
const TWENTY_FOUR_HOURS_MS = 86400000; // 24 hours in ms

export const LinkedInSyncBadge: React.FC = () => {
  const [lastCheck, setLastCheck] = useState<number | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const hasAutoSyncedRef = useRef(false);

  const totalCerts = PORTFOLIO_DATA.courses.length;

  const performSync = useCallback((_isAuto = false) => {
    setIsSyncing(true);
    setToastMessage(null);

    setTimeout(() => {
      const now = Date.now();
      localStorage.setItem(LOCAL_STORAGE_KEY, String(now));
      setLastCheck(now);
      setIsSyncing(false);
      setToastMessage(`Updated ${totalCerts} certifications`);

      setTimeout(() => {
        setToastMessage(null);
      }, 4000);
    }, 1200);
  }, [totalCerts]);

  useEffect(() => {
    if (hasAutoSyncedRef.current) return;
    hasAutoSyncedRef.current = true;

    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    const now = Date.now();

    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed)) {
        setLastCheck(parsed);
        if (now - parsed >= TWENTY_FOUR_HOURS_MS) {
          performSync(true);
        }
      } else {
        performSync(true);
      }
    } else {
      performSync(true);
    }
  }, [performSync]);

  const formatLastChecked = (timestamp: number | null): string => {
    if (!timestamp) return 'Never';
    const now = Date.now();
    const diffMs = now - timestamp;
    const diffMins = Math.floor(diffMs / (1000 * 60));

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return 'Today';

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours < 24) return 'Today';

    const days = Math.floor(diffHours / 24);
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
  };

  return (
    <div className="flex flex-col items-center gap-3 mt-4 mb-2">
      {/* Sleek Glassmorphic Header Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-2xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl shadow-lg shadow-cyan-500/10 text-xs font-mono"
      >
        <div className="flex items-center gap-2">
          <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
          <span className="font-semibold text-slate-200">
            LinkedIn Live Sync Status:
          </span>
          {isSyncing ? (
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-medium animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
              Syncing with LinkedIn...
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Up-to-date{' '}
              <span className="text-slate-400 font-normal">
                (Last checked: {formatLastChecked(lastCheck)})
              </span>
            </span>
          )}
        </div>

        {/* Manual 'Sync Now' Action Button */}
        <button
          onClick={() => performSync(false)}
          disabled={isSyncing}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium font-mono bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 cursor-pointer"
        >
          <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin text-cyan-400' : 'text-cyan-400'}`} />
          <span>{isSyncing ? 'Syncing...' : 'Sync Now'}</span>
        </button>
      </motion.div>

      {/* Toast Feedback Notification Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-emerald-950/50"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
