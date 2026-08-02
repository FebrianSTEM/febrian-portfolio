import React from 'react';

/**
 * SpidermanSwingerSVG - Spider-Man with animated swinging limbs, kicking legs,
 * pulsing glowing eyes, web-shooting wrist FX, and wind trail speed lines.
 */
export const SpidermanSwingerSVG: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Spider-Man Swinging Animated">
    <defs>
      {/* Neon Red Gradient */}
      <linearGradient id="spideyRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF1E43" />
        <stop offset="50%" stopColor="#E30022" />
        <stop offset="100%" stopColor="#990014" />
      </linearGradient>

      {/* Dark Suit Blue Gradient */}
      <linearGradient id="spideyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00529B" />
        <stop offset="100%" stopColor="#001838" />
      </linearGradient>

      {/* Glowing Eye Gradient */}
      <linearGradient id="spideyEye" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#DDFBFF" />
      </linearGradient>

      {/* Glow Filters */}
      <filter id="neonGlowRed" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="eyeGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      {/* CSS Keyframe Animations for Realistic Spidey Body Motion */}
      <style>{`
        @keyframes spideyLegKickFront {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(12deg) translateY(-4px); }
        }
        @keyframes spideyLegKickBack {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-15deg) translateY(3px); }
        }
        @keyframes spideyArmPull {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg) translateX(-2px); }
        }
        @keyframes spideyWebPulse {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes windLineMove {
          0% { stroke-dashoffset: 40; opacity: 0.2; }
          50% { opacity: 0.8; }
          100% { stroke-dashoffset: 0; opacity: 0.2; }
        }
        @keyframes eyeBlink {
          0%, 90%, 100% { transform: scale(1); }
          95% { transform: scaleY(0.4); }
        }
        .anim-leg-front { transform-origin: 110px 135px; animation: spideyLegKickFront 1.4s ease-in-out infinite; }
        .anim-leg-back { transform-origin: 80px 130px; animation: spideyLegKickBack 1.4s ease-in-out infinite; }
        .anim-arm-front { transform-origin: 100px 95px; animation: spideyArmPull 1.4s ease-in-out infinite; }
        .anim-web-pulse { transform-origin: 160px 45px; animation: spideyWebPulse 0.8s ease-in-out infinite; }
        .anim-wind { stroke-dasharray: 12 12; animation: windLineMove 1s linear infinite; }
        .anim-eyes { transform-origin: 95px 72px; animation: eyeBlink 4s ease-in-out infinite; }
      `}</style>
    </defs>

    {/* Dynamic Wind Trails (Speed Lines behind Swinging Spidey) */}
    <g stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" className="anim-wind">
      <path d="M15 80 Q35 70 55 85" fill="none" />
      <path d="M25 110 Q50 100 75 115" fill="none" />
      <path d="M30 140 Q55 130 80 145" fill="none" />
    </g>

    <g filter="url(#neonGlowRed)">
      {/* Right Arm extended forward pulling web (Animated) */}
      <g className="anim-arm-front">
        <path d="M100 95 L145 60 L160 45 L155 40 L138 56 Z" fill="url(#spideyRed)" stroke="#500000" strokeWidth="1.5" />
      </g>

      {/* Left Arm trailing behind */}
      <path d="M75 105 L40 120 L25 135 L32 140 L50 122 Z" fill="url(#spideyRed)" stroke="#500000" strokeWidth="1.5" />

      {/* Right Leg forward (Animated Kick) */}
      <g className="anim-leg-front">
        <path d="M110 135 L140 165 L165 160 L160 150 L135 152 Z" fill="url(#spideyBlue)" stroke="#00091A" strokeWidth="1.5" />
        <path d="M140 165 L165 160 L170 172 L145 174 Z" fill="url(#spideyRed)" stroke="#500000" strokeWidth="1" />
      </g>
      
      {/* Left Leg bent back (Animated Kick) */}
      <g className="anim-leg-back">
        <path d="M80 130 L60 155 L45 145 L65 125 Z" fill="url(#spideyBlue)" stroke="#00091A" strokeWidth="1.5" />
        <path d="M60 155 L45 145 L40 160 L52 165 Z" fill="url(#spideyRed)" stroke="#500000" strokeWidth="1" />
      </g>

      {/* Torso */}
      <path d="M78 95 Q95 85 112 95 Q115 125 110 138 Q95 145 80 138 Z" fill="url(#spideyBlue)" />
      {/* Chest Red Section */}
      <path d="M85 92 Q95 86 105 92 L106 122 Q95 128 84 122 Z" fill="url(#spideyRed)" stroke="#500000" strokeWidth="1" />

      {/* Web Pattern on Chest */}
      <path d="M95 90 L95 125 M85 100 L105 100 M86 112 L104 112 M90 92 Q95 96 100 92 M88 106 Q95 110 102 106" stroke="#1a0000" strokeWidth="1" opacity="0.6" fill="none" />

      {/* Spider Chest Logo */}
      <path d="M95 104 L92 108 L95 112 L98 108 Z M95 104 L87 99 M95 108 L86 108 M95 108 L87 114 M95 104 L103 99 M95 108 L104 108 M95 108 L103 114" stroke="#050714" strokeWidth="1.5" fill="#050714" />

      {/* Head */}
      <ellipse cx="95" cy="72" rx="16" ry="20" fill="url(#spideyRed)" transform="rotate(-15 95 72)" stroke="#500000" strokeWidth="1.5" />
      
      {/* Head Web Grid */}
      <g opacity="0.5" stroke="#1a0000" strokeWidth="0.8" fill="none">
        <path d="M95 52 L95 92" />
        <path d="M79 72 L111 72" />
        <path d="M83 60 L107 84" />
        <path d="M83 84 L107 60" />
        <ellipse cx="95" cy="72" rx="7" ry="9" />
        <ellipse cx="95" cy="72" rx="13" ry="16" />
      </g>

      {/* Spider Eyes (Glowing White with micro blinking animation) */}
      <g filter="url(#eyeGlow)" className="anim-eyes">
        {/* Left Eye */}
        <path d="M83 68 Q90 62 93 72 Q88 77 82 74 Z" fill="url(#spideyEye)" stroke="#050714" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Right Eye */}
        <path d="M107 68 Q100 62 97 72 Q102 77 108 74 Z" fill="url(#spideyEye)" stroke="#050714" strokeWidth="2.5" strokeLinejoin="round" />
      </g>

      {/* Animated Wrist Web Shooter FX */}
      <g className="anim-web-pulse">
        <circle cx="160" cy="45" r="5" fill="#00E5FF" opacity="0.9" />
        <circle cx="160" cy="45" r="9" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
        <path d="M160 45 L178 33 M160 45 L172 40 M160 45 L170 52" stroke="#00E5FF" strokeWidth="2" opacity="0.9" />
      </g>
    </g>
  </svg>
);

/**
 * SpidermanMaskSVG - Face mask for the Modal Header.
 * Sleek red glass gradient, glowing eyes, metallic web lines.
 */
export const SpidermanMaskSVG: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 200 240" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Spider-Man Mask">
    <defs>
      <linearGradient id="maskRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF2E4D" />
        <stop offset="40%" stopColor="#E30022" />
        <stop offset="85%" stopColor="#8A0012" />
        <stop offset="100%" stopColor="#57000B" />
      </linearGradient>

      <linearGradient id="eyeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="70%" stopColor="#E0F7FA" />
        <stop offset="100%" stopColor="#80DEEA" />
      </linearGradient>

      <filter id="maskGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      <filter id="eyeCyanGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComponentTransfer in="blur" result="glow">
          <feFuncA type="linear" slope="0.8" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Main Mask Silhouette */}
    <g filter="url(#maskGlow)">
      <path
        d="M100 15 
           C145 15, 175 40, 175 95 
           C175 160, 140 215, 100 230 
           C60 215, 25 160, 25 95 
           C25 40, 55 15, 100 15 Z"
        fill="url(#maskRed)"
        stroke="#FF4D6D"
        strokeWidth="2"
      />

      {/* Dynamic Web Net Overlay */}
      <g opacity="0.35" stroke="#1A0004" strokeWidth="1.2" fill="none">
        {/* Radial lines from center origin between eyes (100, 110) */}
        <path d="M100 110 L100 15" />
        <path d="M100 110 L100 230" />
        <path d="M100 110 L25 95" />
        <path d="M100 110 L175 95" />
        <path d="M100 110 L45 35" />
        <path d="M100 110 L155 35" />
        <path d="M100 110 L40 170" />
        <path d="M100 110 L160 170" />
        <path d="M100 110 L65 215" />
        <path d="M100 110 L135 215" />

        {/* Concentric Web Rings */}
        <path d="M80 95 Q100 80 120 95 Q100 125 80 95" />
        <path d="M60 80 Q100 55 140 80 Q100 145 60 80" />
        <path d="M42 60 Q100 30 158 60 Q100 175 42 60" />
        <path d="M30 40 Q100 18 170 40 Q100 205 30 40" />
      </g>

      {/* Spider-Man Eyes (Thick Black Border with Glowing Inner) */}
      <g filter="url(#eyeCyanGlow)">
        {/* Left Eye */}
        <path
          d="M38 100 
             C40 70, 72 70, 90 98 
             C72 135, 45 130, 38 100 Z"
          fill="url(#eyeGradient)"
          stroke="#050714"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path
          d="M42 100 
             C44 74, 70 74, 86 98 
             C70 130, 48 126, 42 100 Z"
          stroke="#00E5FF"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />

        {/* Right Eye */}
        <path
          d="M162 100 
             C160 70, 128 70, 110 98 
             C128 135, 155 130, 162 100 Z"
          fill="url(#eyeGradient)"
          stroke="#050714"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path
          d="M158 100 
             C156 74, 130 74, 114 98 
             C130 130, 152 126, 158 100 Z"
          stroke="#00E5FF"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />
      </g>
    </g>
  </svg>
);

/**
 * SpidermanHangingSVG - Upside down Spider-Man hanging pose.
 * Attached to a single web thread at the feet.
 */
export const SpidermanHangingSVG: React.FC<{ className?: string }> = ({ className = "w-24 h-36" }) => (
  <svg viewBox="0 0 160 260" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Spider-Man Hanging Upside Down">
    <defs>
      <linearGradient id="hangRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF2E4D" />
        <stop offset="60%" stopColor="#E30022" />
        <stop offset="100%" stopColor="#8A0012" />
      </linearGradient>

      <linearGradient id="hangBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00529B" />
        <stop offset="100%" stopColor="#001229" />
      </linearGradient>

      <filter id="hangGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <g filter="url(#hangGlow)">
      {/* Web thread coming from top to feet (80, 0) -> (80, 45) */}
      <line x1="80" y1="0" x2="80" y2="45" stroke="#00E5FF" strokeWidth="2" opacity="0.9" />
      <circle cx="80" cy="45" r="3" fill="#FFFFFF" />

      {/* Legs bent upwards attached to web */}
      {/* Right Leg */}
      <path d="M80 45 L60 80 L72 115 L85 85 Z" fill="url(#hangRed)" stroke="#3a0000" strokeWidth="1" />
      <path d="M72 115 L85 150 L100 145 L85 110 Z" fill="url(#hangBlue)" stroke="#00091A" strokeWidth="1" />

      {/* Left Leg */}
      <path d="M80 45 L100 80 L88 115 L75 85 Z" fill="url(#hangRed)" stroke="#3a0000" strokeWidth="1" />
      <path d="M88 115 L75 150 L60 145 L75 110 Z" fill="url(#hangBlue)" stroke="#00091A" strokeWidth="1" />

      {/* Torso (Upside Down) */}
      <path d="M65 145 Q80 140 95 145 Q102 185 92 195 Q80 200 68 195 Z" fill="url(#hangBlue)" stroke="#00091A" strokeWidth="1" />
      <path d="M72 145 Q80 142 88 145 L89 193 Q80 197 71 193 Z" fill="url(#hangRed)" stroke="#3a0000" strokeWidth="1" />

      {/* Spider Emblem on chest */}
      <path d="M80 165 L77 170 L80 174 L83 170 Z M80 165 L73 160 M80 170 L72 170 M80 170 L73 176 M80 165 L87 160 M80 170 L88 170 M80 170 L87 176" stroke="#050714" strokeWidth="1.5" />

      {/* Arms folded / resting on knees */}
      {/* Left Arm */}
      <path d="M68 150 L45 175 L55 190 L70 170 Z" fill="url(#hangRed)" stroke="#3a0000" strokeWidth="1" />
      {/* Right Arm */}
      <path d="M92 150 L115 175 L105 190 L90 170 Z" fill="url(#hangRed)" stroke="#3a0000" strokeWidth="1" />

      {/* Head upside down */}
      <ellipse cx="80" cy="220" rx="16" ry="20" fill="url(#hangRed)" stroke="#3a0000" strokeWidth="1.5" />

      {/* Spider Eyes upside down */}
      {/* Left Eye */}
      <path d="M68 215 Q75 210 78 220 Q73 226 67 222 Z" fill="#FFFFFF" stroke="#050714" strokeWidth="2" />
      {/* Right Eye */}
      <path d="M92 215 Q85 210 82 220 Q87 226 93 222 Z" fill="#FFFFFF" stroke="#050714" strokeWidth="2" />
    </g>
  </svg>
);

/**
 * Background Spider Web Pattern SVG for Modal.
 */
export const SpiderWebPatternSVG: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.12" stroke="#E30022" strokeWidth="1.2" fill="none">
      <circle cx="200" cy="200" r="30" />
      <circle cx="200" cy="200" r="65" />
      <circle cx="200" cy="200" r="105" />
      <circle cx="200" cy="200" r="150" />
      <circle cx="200" cy="200" r="195" />

      <line x1="200" y1="0" x2="200" y2="400" />
      <line x1="0" y1="200" x2="400" y2="200" />
      <line x1="60" y1="60" x2="340" y2="340" />
      <line x1="340" y1="60" x2="60" y2="340" />
      <line x1="120" y1="15" x2="280" y2="385" />
      <line x1="280" y1="15" x2="120" y2="385" />
    </g>
  </svg>
);

/**
 * SpiderCatchBurstSVG - High energy Marvel comic action burst ("THWIP!", "GOTCHA!").
 */
export const SpiderCatchBurstSVG: React.FC<{ className?: string }> = ({ className = "w-48 h-48" }) => (
  <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Spider-Man Catch Action Burst">
    <defs>
      <linearGradient id="burstRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF2E4D" />
        <stop offset="100%" stopColor="#E30022" />
      </linearGradient>
      <linearGradient id="burstGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE066" />
        <stop offset="100%" stopColor="#F2C100" />
      </linearGradient>

      <filter id="burstGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <g filter="url(#burstGlow)">
      {/* Dynamic Comic Web Starburst Rays */}
      <polygon
        points="150,20 175,95 255,45 205,120 290,150 205,180 255,255 175,205 150,280 125,205 45,255 95,180 10,150 95,120 45,45 125,95"
        fill="url(#burstGold)"
        stroke="#E30022"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Inner Web Net */}
      <circle cx="150" cy="150" r="70" fill="url(#burstRed)" stroke="#FFFFFF" strokeWidth="3" />
      <g stroke="#00E5FF" strokeWidth="2" opacity="0.7" fill="none">
        <circle cx="150" cy="150" r="45" />
        <circle cx="150" cy="150" r="25" />
        <line x1="150" y1="80" x2="150" y2="220" />
        <line x1="80" y1="150" x2="220" y2="150" />
        <line x1="100" y1="100" x2="200" y2="200" />
        <line x1="200" y1="100" x2="100" y2="200" />
      </g>

      {/* Bold Comic Text: THWIP! */}
      <text
        x="150"
        y="142"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="44"
        fontWeight="900"
        fill="#FFFFFF"
        stroke="#050714"
        strokeWidth="3"
        textAnchor="middle"
        letterSpacing="2"
      >
        THWIP!
      </text>

      <text
        x="150"
        y="178"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="22"
        fontWeight="800"
        fill="#FFE066"
        stroke="#050714"
        strokeWidth="2"
        textAnchor="middle"
        letterSpacing="3"
      >
        GOTCHA!
      </text>
    </g>
  </svg>
);

