import React from 'react';
import { motion } from 'framer-motion';
import { SpidermanHangingSVG } from './SpidermanSVGs';

export const SpidermanHanging: React.FC = () => {
  return (
    <div className="fixed top-0 right-4 sm:right-16 z-30 pointer-events-none select-none">
      {/* Gentle Pendulum Sway Animation */}
      <motion.div
        className="flex flex-col items-center relative"
        initial={{ rotate: -3 }}
        animate={{ rotate: [-3, 3] }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ transformOrigin: "top center" }}
      >
        {/* Glowing Web Thread connecting top of screen to feet */}
        <div className="w-[1.5px] h-20 sm:h-28 bg-gradient-to-b from-[#00E5FF] via-white/80 to-[#E30022] shadow-[0_0_8px_rgba(0,229,255,0.8)] relative">
          {/* Top Anchor Glow Point */}
          <div className="absolute top-0 -left-[3px] w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
        </div>

        {/* Upside Down Spider-Man Graphic with Comic Speech Bubble */}
        <div className="-mt-1 relative flex items-center justify-center filter drop-shadow-[0_0_12px_rgba(227,0,34,0.5)]">
          <SpidermanHangingSVG className="w-20 h-32 sm:w-24 sm:h-36" />

          {/* Marvel Comic Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [0.96, 1.03, 0.96], y: [0, -3, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute -left-44 top-16 sm:-left-52 sm:top-20 bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-900 px-3.5 py-2.5 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.6)] border-2 border-[#E30022] max-w-[170px] sm:max-w-[200px] text-center"
          >
            {/* Speech Bubble Arrow Tail pointing towards Spidey */}
            <div className="absolute -right-2.5 top-4 w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-[#E30022]" />
            <div className="absolute -right-2 top-[17px] w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-white" />

            <p className="text-xs sm:text-sm font-extrabold tracking-tight leading-tight text-slate-900 font-sans drop-shadow-sm">
              "Please hire Febrian! He's a good man! 🕷️✨"
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

