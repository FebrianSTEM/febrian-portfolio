import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { CosmicEngine } from '../CosmicEngine';

describe('CosmicEngine', () => {
  let canvas: HTMLCanvasElement;
  let engine: CosmicEngine;

  beforeEach(() => {
    canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 768;
    engine = new CosmicEngine(canvas);
  });

  afterEach(() => {
    if (engine) {
      engine.destroy();
    }
  });

  it('should initialize engine with correct canvas dimensions and star particles', () => {
    engine.init();
    const dims = engine.getDimensions();
    expect(dims.width).toBe(1024);
    expect(dims.height).toBe(768);

    const stars = engine.getStars();
    expect(stars.length).toBeGreaterThan(0);
    expect(stars[0]).toHaveProperty('x');
    expect(stars[0]).toHaveProperty('y');
    expect(stars[0]).toHaveProperty('radius');
  });

  it('should start and stop the animation render loop', () => {
    expect(engine.isEngineRunning()).toBe(false);
    engine.start();
    expect(engine.isEngineRunning()).toBe(true);
    engine.stop();
    expect(engine.isEngineRunning()).toBe(false);
  });

  it('should spawn comets', () => {
    expect(engine.getComets().length).toBe(0);
    engine.spawnComet();
    expect(engine.getComets().length).toBe(1);
    const comet = engine.getComets()[0];
    expect(comet.active).toBe(true);
    expect(comet.speed).toBeGreaterThan(0);
  });

  it('should handle mouse and touch position updates', () => {
    engine.init();
    expect(engine.getMouse().active).toBe(false);

    engine.setMousePosition(200, 300, true);
    expect(engine.getMouse().x).toBe(200);
    expect(engine.getMouse().y).toBe(300);
    expect(engine.getMouse().active).toBe(true);

    engine.handleMouseLeave();
    expect(engine.getMouse().active).toBe(false);
  });

  it('should resize canvas smoothly without wiping stars completely', () => {
    engine.init();
    const initialStars = engine.getStars();
    const initialCount = initialStars.length;
    const firstStarPos = { x: initialStars[0].x, y: initialStars[0].y };

    // Simulate window resize
    window.innerWidth = 1280;
    window.innerHeight = 900;
    engine.handleResize();

    const resizedStars = engine.getStars();
    expect(resizedStars.length).toBeGreaterThanOrEqual(initialCount);
    // Star 0 position should be scaled, not re-randomized from scratch
    expect(resizedStars[0].x).toBeCloseTo(firstStarPos.x * (1280 / 1024), 0);
  });

  it('should execute render cycle cleanly when running', () => {
    engine.start();
    expect(() => engine.render()).not.toThrow();
  });

  it('should detach event listeners and stop running on destroy', () => {
    engine.start();
    expect(engine.isEngineRunning()).toBe(true);
    engine.destroy();
    expect(engine.isEngineRunning()).toBe(false);
  });
});
