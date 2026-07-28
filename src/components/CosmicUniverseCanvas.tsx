import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
  vx: number;
  vy: number;
}

interface Comet {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  color: string;
  active: boolean;
}

export const CosmicUniverseCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          active: true,
        };
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Starfield Setup
    let stars: Star[] = [];
    const starColors = ['#ffffff', '#a5f3fc', '#fef08a', '#e9d5ff', '#38bdf8'];

    const initStars = () => {
      stars = [];
      const starCount = width < 768 ? 120 : 250;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.7 + 0.5,
          baseAlpha: Math.random() * 0.5 + 0.2,
          twinkleSpeed: Math.random() * 0.03 + 0.008,
          phase: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
        });
      }
    };

    initStars();

    // Shooting Comets Setup
    const comets: Comet[] = [];
    let lastCometSpawn = Date.now();
    const cometColors = ['#ec4899', '#38bdf8', '#a855f7', '#34d399'];

    const spawnComet = () => {
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.2; // ~45 deg downward right
      const startX = Math.random() * width * 0.8;
      const startY = Math.random() * height * 0.4;
      comets.push({
        x: startX,
        y: startY,
        length: Math.random() * 70 + 80,
        speed: Math.random() * 8 + 6,
        angle,
        alpha: 1,
        color: cometColors[Math.floor(Math.random() * cometColors.length)],
        active: true,
      });
    };

    // Atomic Electron Orbit Params
    let orbitTime = 0;

    // Main Canvas Render Loop
    const render = () => {
      orbitTime += 0.015;
      ctx.clearRect(0, 0, width, height);

      // --- LAYER 1: Deep Nebula Ambient Core Glow ---
      const timeSec = Date.now() * 0.0005;
      const neb1X = width * 0.2 + Math.sin(timeSec) * 40;
      const neb1Y = height * 0.3 + Math.cos(timeSec * 0.8) * 30;
      const grad1 = ctx.createRadialGradient(neb1X, neb1Y, 10, neb1X, neb1Y, Math.max(width, height) * 0.45);
      grad1.addColorStop(0, 'rgba(168, 85, 247, 0.08)');
      grad1.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const neb2X = width * 0.8 + Math.cos(timeSec * 0.7) * 50;
      const neb2Y = height * 0.75 + Math.sin(timeSec * 0.9) * 40;
      const grad2 = ctx.createRadialGradient(neb2X, neb2Y, 10, neb2X, neb2Y, Math.max(width, height) * 0.4);
      grad2.addColorStop(0, 'rgba(6, 182, 212, 0.07)');
      grad2.addColorStop(0.5, 'rgba(129, 140, 248, 0.03)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // --- LAYER 2: Twinkling Stars & Subtle Drift ---
      const mouse = mouseRef.current;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen boundaries
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Magnetic push effect near cursor
        if (mouse.active) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100 && dist > 0) {
            const force = (100 - dist) / 100;
            star.x += (dx / dist) * force * 0.8;
            star.y += (dy / dist) * force * 0.8;
          }
        }

        const alpha = star.baseAlpha + Math.sin(orbitTime * star.twinkleSpeed * 40 + star.phase) * 0.25;
        const clampedAlpha = Math.max(0.1, Math.min(1, alpha));

        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = clampedAlpha;
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.restore();
      }

      // --- LAYER 3: Interactive Constellation Grid Overlay ---
      if (mouse.active) {
        const maxDist = 140;
        const nearbyStars: Star[] = [];

        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            nearbyStars.push(star);
            const lineAlpha = (1 - dist / maxDist) * 0.6;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = 'rgba(56, 189, 248, ' + lineAlpha + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
          }
        }

        // Interconnect nearby stars with constellation web
        for (let i = 0; i < nearbyStars.length; i++) {
          for (let j = i + 1; j < nearbyStars.length; j++) {
            const s1 = nearbyStars[i];
            const s2 = nearbyStars[j];
            const dx = s1.x - s2.x;
            const dy = s1.y - s2.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 90) {
              const webAlpha = (1 - d / 90) * 0.35;
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(s1.x, s1.y);
              ctx.lineTo(s2.x, s2.y);
              ctx.strokeStyle = 'rgba(168, 85, 247, ' + webAlpha + ')';
              ctx.lineWidth = 0.8;
              ctx.stroke();
              ctx.restore();
            }
          }
        }
      }

      // --- LAYER 4: Shooting Comets ---
      const now = Date.now();
      if (now - lastCometSpawn > 4500 + Math.random() * 2500) {
        spawnComet();
        lastCometSpawn = now;
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        if (!c.active) continue;

        c.x += Math.cos(c.angle) * c.speed;
        c.y += Math.sin(c.angle) * c.speed;
        c.alpha -= 0.012;

        if (c.alpha <= 0 || c.x > width + 100 || c.y > height + 100) {
          c.active = false;
          comets.splice(i, 1);
          continue;
        }

        const tailX = c.x - Math.cos(c.angle) * c.length;
        const tailY = c.y - Math.sin(c.angle) * c.length;

        const cometGrad = ctx.createLinearGradient(c.x, c.y, tailX, tailY);
        cometGrad.addColorStop(0, c.color);
        cometGrad.addColorStop(1, 'transparent');

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = cometGrad;
        ctx.globalAlpha = Math.max(0, c.alpha);
        ctx.lineWidth = 2;
        ctx.stroke();

        // Glowing Comet Head
        ctx.beginPath();
        ctx.arc(c.x, c.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = c.color;
        ctx.fill();
        ctx.restore();
      }

      // --- LAYER 5: Atomic Rutherford/Bohr Orbit System ---
      // Position atomic nucleus nicely at top-right area
      const atomX = width > 1024 ? width * 0.88 : width * 0.82;
      const atomY = height < 800 ? 140 : 180;
      const a = width < 768 ? 65 : 95; // Semi-major axis
      const b = width < 768 ? 25 : 36; // Semi-minor axis

      // Draw Central Pulsating Nucleus
      const pulse = Math.sin(orbitTime * 2) * 2;
      ctx.save();
      // Outer ripple
      ctx.beginPath();
      ctx.arc(atomX, atomY, 14 + pulse, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.fill();

      // Inner core
      ctx.beginPath();
      ctx.arc(atomX, atomY, 7, 0, Math.PI * 2);
      ctx.fillStyle = '#38bdf8';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#38bdf8';
      ctx.fill();
      ctx.restore();

      // 3 Tilted Orbit Ring Ellipses (0deg, 60deg, 120deg)
      const orbitAngles = [0, (Math.PI / 3), (2 * Math.PI / 3)];
      const electronColors = ['#38bdf8', '#a855f7', '#ec4899'];
      const electronSpeeds = [1.2, -1.0, 1.5];

      for (let k = 0; k < orbitAngles.length; k++) {
        const phi = orbitAngles[k];
        const color = electronColors[k];
        const speed = electronSpeeds[k];

        // Draw dashed orbit ring ellipse
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(atomX, atomY, a, b, phi, 0, Math.PI * 2);
        ctx.setLineDash([4, 6]);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();

        // Calculate electron position via parametric formula
        const theta = orbitTime * speed + (k * Math.PI / 1.5);
        const ex = atomX + a * Math.cos(theta) * Math.cos(phi) - b * Math.sin(theta) * Math.sin(phi);
        const ey = atomY + a * Math.cos(theta) * Math.sin(phi) + b * Math.sin(theta) * Math.cos(phi);

        // Draw Electron Particle with glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Floating Physics & Math Formula Badges (Layer 4 Motion DOM)
  const formulas = [
    { text: 'E = mc²', top: '15%', left: '8%', delay: 0 },
    { text: 'iħ (∂Ψ/∂t) = ĤΨ', top: '35%', right: '7%', delay: 1.5 },
    { text: '∇ × E = -∂B/∂t', top: '65%', left: '5%', delay: 0.8 },
    { text: 'ħ = 6.626 × 10⁻³⁴ J·s', top: '82%', right: '10%', delay: 2.2 },
    { text: 'F = G (m₁m₂ / r²)', top: '48%', left: '85%', delay: 1.0 },
    { text: 'eⁱᵖⁱ + 1 = 0', top: '78%', left: '18%', delay: 2.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating Physics & Math Badges Overlay */}
      {formulas.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute hidden md:block px-3 py-1.5 rounded-full font-mono text-xs bg-slate-950/40 border border-cyan-500/20 text-cyan-300/70 backdrop-blur-md shadow-lg select-none"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          initial={{ y: 0, opacity: 0.4 }}
          animate={{
            y: [-12, 12, -12],
            rotate: [-3, 3, -3],
            opacity: [0.4, 0.75, 0.4],
          }}
          transition={{
            duration: 7 + idx,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
        >
          <span className="text-cyan-400 font-semibold mr-1">⚛</span>
          {item.text}
        </motion.div>
      ))}
    </div>
  );
};
