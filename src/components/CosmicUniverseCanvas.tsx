import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CosmicEngine } from '../engines/CosmicEngine';

export const CosmicUniverseCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new CosmicEngine(canvas);
    engine.start();

    return () => {
      engine.destroy();
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
