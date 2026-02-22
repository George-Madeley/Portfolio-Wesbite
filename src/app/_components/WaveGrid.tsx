"use client";

import { alpha } from "@mui/material";
import { useEffect, useRef } from "react";
import { Particle } from "~/classes/Particle";

interface WaveGridProps {
  particleSize?: number;
  particleDensity?: number;
  startColor?: string;
  endColor?: string;
  maxDistance?: number;
  gridSize?: number;
  strokeStyle?: string;
}

export default function WaveGrid(props: WaveGridProps) {
  const particleSize = props.particleSize ?? 5;
  const particleDensity = props.particleDensity ?? 30;
  const startColor = props.startColor ?? "#fff";
  const endColor = props.endColor ?? "#000";
  const maxDistance = props.maxDistance ?? 100;
  const gridSize = props.gridSize ?? 30;
  const strokeStyle = props.strokeStyle ?? "rgb(180, 120, 255)";

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let devicePixelRatio: number;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;

      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    });

    // Create particle grid
    const particlesArray: Particle[] = [];

    function init() {
      particlesArray.length = 0;

      if (!canvas) return;

      const canvasWidth = canvas.width / devicePixelRatio;
      const canvasHeight = canvas.height / devicePixelRatio;

      const numX = Math.floor(canvasWidth / gridSize);
      const numY = Math.floor(canvasHeight / gridSize);

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2;
          const posY = y * gridSize + gridSize / 2;
          particlesArray.push(
            new Particle(posX, posY, {
              particleSize,
              particleDensity,
              startColor,
              endColor,
            })
          );
        }
      }
    }

    init();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse following
      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      // Draw connections
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mouseX, mouseY, maxDistance);
        particlesArray[i].draw(ctx);

        // Draw connections
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 30) {
            ctx.beginPath();
            ctx.strokeStyle = alpha(strokeStyle, 0.2 - distance / 150);
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("resize", init);
    };
  }, [
    endColor,
    gridSize,
    maxDistance,
    particleDensity,
    particleSize,
    startColor,
    strokeStyle,
  ]);

  return (
    <canvas
      className="w-full h-full"
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
      }}
    />
  );
}
