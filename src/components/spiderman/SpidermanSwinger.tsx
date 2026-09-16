import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpidermanSwingerSVG, SpiderCatchBurstSVG } from './SpidermanSVGs';

interface SpidermanSwingerProps {
  onCatch: () => void;
}

const SPIDEY_CATCHPHRASES = [
  "Catch me if you can! 🕷️",
  "Thwip! Need a Software Engineer?",
  "Hire Febrian! He's amazing! 🦸",
  "Click me for a secret Easter Egg! 🎁",
  "Your friendly neighborhood dev!",
  "Catch me to unlock Febrian's CV! 📄",
  "Just swinging by! Click me!",
  "Backend superhero right here! 💻🦸",
  "Gotcha! Click to catch me!",
  "Let me solve your bugs! 🐛🕷️",
];

export const SpidermanSwinger: React.FC<SpidermanSwingerProps> = ({ onCatch }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const catchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Set to true in handleTriggerCatch BEFORE the native click event reaches document
  const isCaughtRef = useRef(false);
  const audioStartedRef = useRef(false);

  const [spideyPos, setSpideyPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCaught, setIsCaught] = useState(false);
  const [catchCoords, setCatchCoords] = useState<{ x: number; y: number } | null>(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showMusicHint, setShowMusicHint] = useState(false);

  // Audio setup with correct event ordering to avoid race condition
  useEffect(() => {
    const audio = new Audio('/spiderman-theme.webm');
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    // Ref to the unlock handler so we can remove it later
    let unlockHandler: (() => void) | null = null;

    audio.play().then(() => {
      // Autoplay allowed — great!
      audioStartedRef.current = true;
    }).catch(() => {
      // Autoplay blocked by browser — wait for user interaction
      setShowMusicHint(true);

      unlockHandler = () => {
        // isCaughtRef is set SYNCHRONOUSLY in handleTriggerCatch (React bubble phase)
        // which fires BEFORE this document bubble-phase listener.
        // So if Spider-Man was clicked, isCaughtRef.current is already true here.
        if (isCaughtRef.current || audioStartedRef.current) {
          // Spider-Man was caught on this click — remove listener and bail
          if (unlockHandler) document.removeEventListener('click', unlockHandler);
          return;
        }
        audioStartedRef.current = true;
        setShowMusicHint(false);
        audio.play().catch(() => {});
        if (unlockHandler) document.removeEventListener('click', unlockHandler);
      };

      // BUBBLE phase (no capture flag) — fires AFTER React synthetic event handlers
      // This ensures handleTriggerCatch has already set isCaughtRef before we check it
      document.addEventListener('click', unlockHandler);
    });

    return () => {
      audio.pause();
      audio.src = '';
      if (unlockHandler) {
        document.removeEventListener('click', unlockHandler);
      }
    };
  }, []);

  // Sync spidey position for dynamic web line SVG rendering
  useEffect(() => {
    if (isCaught) return;
    let animationFrameId: number;

    const updatePosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setSpideyPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 3,
        });
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isCaught]);

  // Cycle catchphrase every 2.8 seconds
  useEffect(() => {
    if (isCaught) return;
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % SPIDEY_CATCHPHRASES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isCaught]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (catchTimeoutRef.current) {
        clearTimeout(catchTimeoutRef.current);
      }
    };
  }, []);

  // Handle high-energy catch action animation
  const handleTriggerCatch = (e: React.MouseEvent | React.PointerEvent) => {
    e.stopPropagation();
    if (isCaught) return;

    // Set BEFORE native event reaches document bubble listener
    isCaughtRef.current = true;
    setShowMusicHint(false);

    // Stop the music
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const rect = containerRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : e.clientX;
    const y = rect ? rect.top + rect.height / 2 : e.clientY;

    setCatchCoords({ x, y });
    setIsCaught(true);

    if (catchTimeoutRef.current) {
      clearTimeout(catchTimeoutRef.current);
    }

    catchTimeoutRef.current = setTimeout(() => {
      onCatch();
    }, 650);
  };

  const webAnchorX = spideyPos.x < window.innerWidth / 2 ? spideyPos.x + 140 : spideyPos.x - 140;
  const webAnchorY = 0;

  return (
    <div className="fixed inset-0 pointer-events-none z-[998] overflow-hidden">
      {/* SVG Canvas for Dynamic Glowing Web Thread & Particles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="webThreadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E30022" stopOpacity="0.6" />
          </linearGradient>
          <filter id="webGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {!isCaught && spideyPos.x > 0 && (
          <g filter="url(#webGlow)">
            <line
              x1={webAnchorX}
              y1={webAnchorY}
              x2={spideyPos.x}
              y2={spideyPos.y}
              stroke="url(#webThreadGrad)"
              strokeWidth="2.5"
              strokeDasharray="8 3"
            />
            <circle cx={webAnchorX} cy={webAnchorY + 4} r="6" fill="#00E5FF" opacity="0.9" />
            <circle cx={webAnchorX} cy={webAnchorY + 4} r="10" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
          </g>
        )}
      </svg>

      {/* Music hint — shown when browser blocks autoplay */}
      <AnimatePresence>
        {showMusicHint && !isCaught && (
          <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-[999] flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 border border-white/20 backdrop-blur-md shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-base"
            >
              🎵
            </motion.span>
            <span className="text-white text-xs font-semibold tracking-wide">
              Click anywhere to play Spider-Man theme!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Swinging Motion Wrapper */}
      {!isCaught && (
        <motion.div
          className="absolute top-0 left-0 pointer-events-auto cursor-pointer select-none"
          initial={{ x: "-15vw", y: "15vh", rotate: 35, scale: 0.95 }}
          animate={{
            x: ["-10vw", "22vw", "50vw", "78vw", "105vw"],
            y: ["15vh", "48vh", "18vh", "52vh", "15vh"],
            rotate: [45, -25, 30, -35, 25],
            scale: [0.95, 1.1, 0.95, 1.15, 0.95],
          }}
          transition={{
            duration: 6.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleTriggerCatch}
          onPointerDown={handleTriggerCatch}
        >
          <div ref={containerRef} className="relative p-6 group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhraseIndex}
                initial={{ opacity: 0, scale: 0.7, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: -8 }}
                transition={{ duration: 0.35, ease: "backOut" }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-white via-slate-50 to-slate-100 text-slate-900 px-3.5 py-1.5 rounded-2xl shadow-[0_8px_22px_rgba(0,0,0,0.5)] border-2 border-[#E30022] whitespace-nowrap z-30 pointer-events-none"
              >
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-[#E30022]" />
                <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-x-[5px] border-x-transparent border-t-[6px] border-t-white" />
                <p className="text-xs font-extrabold tracking-tight text-slate-900 font-sans flex items-center gap-1 drop-shadow-sm">
                  <span>{SPIDEY_CATCHPHRASES[currentPhraseIndex]}</span>
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{ scale: isHovered ? [1, 1.18, 1] : 1 }}
              transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
            >
              <div
                className={`w-32 h-32 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  isHovered
                    ? "border-[#00E5FF] bg-cyan-500/15 shadow-[0_0_35px_rgba(0,229,255,0.7)]"
                    : "border-transparent opacity-0"
                }`}
              >
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-3.5 bg-[#00E5FF]" />
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-3.5 bg-[#00E5FF]" />
                <div className="absolute left-1 top-1/2 -translate-y-1/2 w-3.5 h-0.5 bg-[#00E5FF]" />
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3.5 h-0.5 bg-[#00E5FF]" />
                <span className="absolute -bottom-6 px-3 py-0.5 rounded-full bg-[#E30022] text-white text-[10px] font-mono tracking-wider font-bold shadow-lg shadow-red-600/60 whitespace-nowrap">
                  CATCH SPIDEY!
                </span>
              </div>
            </motion.div>

            <div className="relative z-10 filter drop-shadow-[0_0_18px_rgba(227,0,34,0.7)] transition-transform group-hover:scale-110">
              <SpidermanSwingerSVG className="w-28 h-28 sm:w-32 sm:h-32" />
            </div>
          </div>
        </motion.div>
      )}

      {/* Marvel Comic "THWIP!" Catch Explosion Effect */}
      <AnimatePresence>
        {isCaught && catchCoords && (
          <motion.div
            className="absolute pointer-events-none z-[9999]"
            style={{
              left: catchCoords.x,
              top: catchCoords.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0.2, opacity: 0, rotate: -25 }}
            animate={{ scale: [0.3, 1.25, 1], opacity: 1, rotate: [-25, 10, 0] }}
            exit={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 0.45, ease: "backOut" }}
          >
            <motion.div
              className="absolute -inset-10 rounded-full border-4 border-[#00E5FF] shadow-[0_0_50px_#00E5FF]"
              initial={{ scale: 0.2, opacity: 1 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="relative flex items-center justify-center filter drop-shadow-[0_0_30px_rgba(242,193,0,0.8)]">
              <SpiderCatchBurstSVG className="w-48 h-48 sm:w-56 sm:h-56" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
