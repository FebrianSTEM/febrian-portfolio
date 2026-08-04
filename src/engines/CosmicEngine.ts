export interface Star {
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

export interface Comet {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  color: string;
  active: boolean;
}

export interface MouseState {
  x: number;
  y: number;
  active: boolean;
}

export class CosmicEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private width: number;
  private height: number;
  private stars: Star[] = [];
  private comets: Comet[] = [];
  private mouse: MouseState = { x: -1000, y: -1000, active: false };
  private orbitTime: number = 0;
  private lastCometSpawn: number = Date.now();
  private animationFrameId: number | null = null;
  private isRunning: boolean = false;

  private starColors = ['#ffffff', '#a5f3fc', '#fef08a', '#e9d5ff', '#38bdf8'];
  private cometColors = ['#ec4899', '#38bdf8', '#a855f7', '#34d399'];
  private electronColors = ['#38bdf8', '#a855f7', '#ec4899'];
  private electronSpeeds = [1.2, -1.0, 1.5];
  private orbitAngles = [0, Math.PI / 3, (2 * Math.PI) / 3];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width = (typeof window !== 'undefined' && window.innerWidth) ? window.innerWidth : 1024;
    this.height = canvas.height = (typeof window !== 'undefined' && window.innerHeight) ? window.innerHeight : 768;

    this.handleResize = this.handleResize.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.render = this.render.bind(this);
  }

  public init(): void {
    this.attachEventListeners();
    this.initStars();
  }

  public start(): void {
    if (this.isRunning) return;
    this.init();
    this.isRunning = true;
    this.render();
  }

  public stop(): void {
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      if (typeof cancelAnimationFrame === 'function') {
        cancelAnimationFrame(this.animationFrameId);
      }
      this.animationFrameId = null;
    }
  }

  public destroy(): void {
    this.stop();
    this.detachEventListeners();
  }

  public handleResize(): void {
    const oldWidth = this.width;
    const oldHeight = this.height;
    const newWidth = (typeof window !== 'undefined' && window.innerWidth) ? window.innerWidth : 1024;
    const newHeight = (typeof window !== 'undefined' && window.innerHeight) ? window.innerHeight : 768;

    this.width = this.canvas.width = newWidth;
    this.height = this.canvas.height = newHeight;

    if (this.stars.length === 0) {
      this.initStars();
      return;
    }

    // Scale existing star positions smoothly instead of resetting completely
    const scaleX = oldWidth > 0 ? newWidth / oldWidth : 1;
    const scaleY = oldHeight > 0 ? newHeight / oldHeight : 1;

    for (const star of this.stars) {
      star.x = Math.max(0, Math.min(newWidth, star.x * scaleX));
      star.y = Math.max(0, Math.min(newHeight, star.y * scaleY));
    }

    const targetCount = newWidth < 768 ? 120 : 250;
    if (this.stars.length < targetCount) {
      const diff = targetCount - this.stars.length;
      for (let i = 0; i < diff; i++) {
        this.stars.push({
          x: Math.random() * newWidth,
          y: Math.random() * newHeight,
          radius: Math.random() * 1.7 + 0.5,
          baseAlpha: Math.random() * 0.5 + 0.2,
          twinkleSpeed: Math.random() * 0.03 + 0.008,
          phase: Math.random() * Math.PI * 2,
          color: this.starColors[Math.floor(Math.random() * this.starColors.length)],
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
        });
      }
    } else if (this.stars.length > targetCount) {
      this.stars.length = targetCount;
    }
  }

  public handleMouseMove(e: MouseEvent): void {
    this.mouse = {
      x: e.clientX,
      y: e.clientY,
      active: true,
    };
  }

  public handleMouseLeave(): void {
    this.mouse.active = false;
  }

  public handleTouchMove(e: TouchEvent): void {
    if (e.touches && e.touches.length > 0) {
      this.mouse = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        active: true,
      };
    }
  }

  public handleTouchEnd(): void {
    this.mouse.active = false;
  }

  private attachEventListeners(): void {
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('mousemove', this.handleMouseMove as EventListener);
    window.addEventListener('mouseleave', this.handleMouseLeave);
    window.addEventListener('touchstart', this.handleTouchMove as EventListener, { passive: true });
    window.addEventListener('touchmove', this.handleTouchMove as EventListener, { passive: true });
    window.addEventListener('touchend', this.handleTouchEnd as EventListener, { passive: true });
  }

  private detachEventListeners(): void {
    if (typeof window === 'undefined') return;
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('mousemove', this.handleMouseMove as EventListener);
    window.removeEventListener('mouseleave', this.handleMouseLeave);
    window.removeEventListener('touchstart', this.handleTouchMove as EventListener);
    window.removeEventListener('touchmove', this.handleTouchMove as EventListener);
    window.removeEventListener('touchend', this.handleTouchEnd as EventListener);
  }

  public initStars(): void {
    this.stars = [];
    const starCount = this.width < 768 ? 120 : 250;
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.7 + 0.5,
        baseAlpha: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.008,
        phase: Math.random() * Math.PI * 2,
        color: this.starColors[Math.floor(Math.random() * this.starColors.length)],
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      });
    }
  }

  public spawnComet(): void {
    const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2;
    const startX = Math.random() * this.width * 0.8;
    const startY = Math.random() * this.height * 0.4;
    this.comets.push({
      x: startX,
      y: startY,
      length: Math.random() * 70 + 80,
      speed: Math.random() * 8 + 6,
      angle,
      alpha: 1,
      color: this.cometColors[Math.floor(Math.random() * this.cometColors.length)],
      active: true,
    });
  }

  public render(): void {
    if (!this.isRunning || !this.ctx) return;
    const ctx = this.ctx;

    this.orbitTime += 0.015;
    ctx.clearRect(0, 0, this.width, this.height);

    // --- LAYER 1: Deep Nebula Ambient Core Glow ---
    const timeSec = Date.now() * 0.0005;
    const neb1X = this.width * 0.2 + Math.sin(timeSec) * 40;
    const neb1Y = this.height * 0.3 + Math.cos(timeSec * 0.8) * 30;
    const grad1 = ctx.createRadialGradient(
      neb1X,
      neb1Y,
      10,
      neb1X,
      neb1Y,
      Math.max(this.width, this.height) * 0.45
    );
    if (grad1 && typeof grad1.addColorStop === 'function') {
      grad1.addColorStop(0, 'rgba(168, 85, 247, 0.08)');
      grad1.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, this.width, this.height);
    }

    const neb2X = this.width * 0.8 + Math.cos(timeSec * 0.7) * 50;
    const neb2Y = this.height * 0.75 + Math.sin(timeSec * 0.9) * 40;
    const grad2 = ctx.createRadialGradient(
      neb2X,
      neb2Y,
      10,
      neb2X,
      neb2Y,
      Math.max(this.width, this.height) * 0.4
    );
    if (grad2 && typeof grad2.addColorStop === 'function') {
      grad2.addColorStop(0, 'rgba(6, 182, 212, 0.07)');
      grad2.addColorStop(0.5, 'rgba(129, 140, 248, 0.03)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, this.width, this.height);
    }

    // --- LAYER 2: Twinkling Stars & Subtle Drift ---
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
      star.x += star.vx;
      star.y += star.vy;

      if (star.x < 0) star.x = this.width;
      if (star.x > this.width) star.x = 0;
      if (star.y < 0) star.y = this.height;
      if (star.y > this.height) star.y = 0;

      if (this.mouse.active) {
        const dx = star.x - this.mouse.x;
        const dy = star.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100;
          star.x += (dx / dist) * force * 0.8;
          star.y += (dy / dist) * force * 0.8;
        }
      }

      const alpha =
        star.baseAlpha +
        Math.sin(this.orbitTime * star.twinkleSpeed * 40 + star.phase) * 0.25;
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
    if (this.mouse.active) {
      const maxDist = 140;
      const nearbyStars: Star[] = [];

      for (let i = 0; i < this.stars.length; i++) {
        const star = this.stars[i];
        const dx = star.x - this.mouse.x;
        const dy = star.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          nearbyStars.push(star);
          const lineAlpha = (1 - dist / maxDist) * 0.6;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(this.mouse.x, this.mouse.y);
          ctx.strokeStyle = 'rgba(56, 189, 248, ' + lineAlpha + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }
      }

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
    if (now - this.lastCometSpawn > 4500 + Math.random() * 2500) {
      this.spawnComet();
      this.lastCometSpawn = now;
    }

    for (let i = this.comets.length - 1; i >= 0; i--) {
      const c = this.comets[i];
      if (!c.active) continue;

      c.x += Math.cos(c.angle) * c.speed;
      c.y += Math.sin(c.angle) * c.speed;
      c.alpha -= 0.012;

      if (c.alpha <= 0 || c.x > this.width + 100 || c.y > this.height + 100) {
        c.active = false;
        this.comets.splice(i, 1);
        continue;
      }

      const tailX = c.x - Math.cos(c.angle) * c.length;
      const tailY = c.y - Math.sin(c.angle) * c.length;

      const cometGrad = ctx.createLinearGradient(c.x, c.y, tailX, tailY);
      if (cometGrad && typeof cometGrad.addColorStop === 'function') {
        cometGrad.addColorStop(0, c.color);
        cometGrad.addColorStop(1, 'transparent');
      }

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = cometGrad;
      ctx.globalAlpha = Math.max(0, c.alpha);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(c.x, c.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 10;
      ctx.shadowColor = c.color;
      ctx.fill();
      ctx.restore();
    }

    // --- LAYER 5: Atomic Rutherford/Bohr Orbit System ---
    const atomX = this.width > 1024 ? this.width * 0.88 : this.width * 0.82;
    const atomY = this.height < 800 ? 140 : 180;
    const a = this.width < 768 ? 65 : 95;
    const b = this.width < 768 ? 25 : 36;

    const pulse = Math.sin(this.orbitTime * 2) * 2;
    ctx.save();
    ctx.beginPath();
    ctx.arc(atomX, atomY, 14 + pulse, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(atomX, atomY, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#38bdf8';
    ctx.fill();
    ctx.restore();

    for (let k = 0; k < this.orbitAngles.length; k++) {
      const phi = this.orbitAngles[k];
      const color = this.electronColors[k];
      const speed = this.electronSpeeds[k];

      ctx.save();
      ctx.beginPath();
      if (typeof ctx.ellipse === 'function') {
        ctx.ellipse(atomX, atomY, a, b, phi, 0, Math.PI * 2);
      }
      if (typeof ctx.setLineDash === 'function') {
        ctx.setLineDash([4, 6]);
      }
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      const theta = this.orbitTime * speed + (k * Math.PI) / 1.5;
      const ex =
        atomX +
        a * Math.cos(theta) * Math.cos(phi) -
        b * Math.sin(theta) * Math.sin(phi);
      const ey =
        atomX +
        a * Math.cos(theta) * Math.sin(phi) +
        b * Math.sin(theta) * Math.cos(phi);

      ctx.save();
      ctx.beginPath();
      ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = color;
      ctx.fill();
      ctx.restore();
    }

    if (this.isRunning && typeof requestAnimationFrame === 'function') {
      this.animationFrameId = requestAnimationFrame(this.render);
    }
  }

  // Getters & helpers for testing and inspection
  public getStars(): Star[] {
    return this.stars;
  }

  public getComets(): Comet[] {
    return this.comets;
  }

  public getMouse(): MouseState {
    return this.mouse;
  }

  public getDimensions(): { width: number; height: number } {
    return { width: this.width, height: this.height };
  }

  public isEngineRunning(): boolean {
    return this.isRunning;
  }

  public setMousePosition(x: number, y: number, active: boolean = true): void {
    this.mouse = { x, y, active };
  }
}
