import { interpolateColor } from "~/utils/color";

interface ParticleOptions {
  particleSize?: number;
  particleDensity?: number;
  startColor?: string;
  endColor?: string;
}
// Particle class
export class Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  color: string;
  distance: number;

  constructor(x: number, y: number, options: ParticleOptions = {}) {
    const {
      particleSize = 2,
      particleDensity = 1,
      startColor = "#ffffff",
      endColor = "#000000",
    } = options;
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.size = Math.random() * particleSize + 2;
    this.density = Math.random() * particleDensity + 1;
    this.distance = 0;
    this.color = interpolateColor(startColor, endColor);
  }

  update(mouseX: number, mouseY: number, maxDistance: number) {
    // Calculate distance between mouse and particle
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);

    const forceDirectionX = dx / this.distance;
    const forceDirectionY = dy / this.distance;

    const force = (maxDistance - this.distance) / maxDistance;

    if (this.distance < maxDistance) {
      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;

      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (!ctx) return;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}
