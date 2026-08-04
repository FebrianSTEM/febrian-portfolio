import { vi } from 'vitest';

if (typeof window !== 'undefined') {
  HTMLCanvasElement.prototype.getContext = vi.fn().mockImplementation((contextId: string) => {
    if (contextId === '2d') {
      return {
        clearRect: vi.fn(),
        createRadialGradient: vi.fn().mockReturnValue({
          addColorStop: vi.fn(),
        }),
        createLinearGradient: vi.fn().mockReturnValue({
          addColorStop: vi.fn(),
        }),
        fillRect: vi.fn(),
        beginPath: vi.fn(),
        arc: vi.fn(),
        fill: vi.fn(),
        save: vi.fn(),
        restore: vi.fn(),
        moveTo: vi.fn(),
        lineTo: vi.fn(),
        stroke: vi.fn(),
        ellipse: vi.fn(),
        setLineDash: vi.fn(),
        fillStyle: '',
        strokeStyle: '',
        globalAlpha: 1,
        shadowBlur: 0,
        shadowColor: '',
        lineWidth: 1,
      };
    }
    return null;
  });

  window.scrollTo = vi.fn();
}
