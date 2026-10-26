import React, { useEffect, useRef } from 'react';
import { usePhysics } from '../context/PhysicsContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  color: string;
  pulseSpeed: number;
}

export const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isZeroG } = usePhysics();
  const mouseRef = useRef<{ x: number; y: number; radius: number }>({ x: -1000, y: -1000, radius: 140 });

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
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const colors = [
      'rgba(0, 240, 255, ',    // Cyan
      'rgba(139, 92, 246, ',   // Violet
      'rgba(255, 255, 255, ',   // White
      'rgba(56, 189, 248, ',   // Sky blue
    ];

    let particles: Particle[] = [];
    const count = Math.min(Math.floor((width * height) / 9000), 120);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 0.8;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const baseAlpha = Math.random() * 0.7 + 0.2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size,
          baseAlpha,
          alpha: baseAlpha,
          color,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        });
      }
    };

    initParticles();

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Background mesh ambient glow
      const grad1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.3,
        10,
        width * 0.2,
        height * 0.3,
        width * 0.5
      );
      grad1.addColorStop(0, 'rgba(0, 240, 255, 0.035)');
      grad1.addColorStop(1, 'rgba(6, 7, 11, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.7,
        10,
        width * 0.8,
        height * 0.7,
        width * 0.5
      );
      grad2.addColorStop(0, 'rgba(112, 0, 255, 0.045)');
      grad2.addColorStop(1, 'rgba(6, 7, 11, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (isZeroG) {
          // Zero-G smooth orbital drift
          p.x += p.vx + Math.sin(time + i) * 0.15;
          p.y += p.vy + Math.cos(time + i) * 0.15;

          // Wrap around edges
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        } else {
          // Gravity mode: particles have weight and fall downward
          p.vy += 0.06; // Gravity acceleration
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off floor
          if (p.y + p.size >= height) {
            p.y = height - p.size;
            p.vy = -p.vy * 0.65; // restitution
            p.vx *= 0.95;       // friction
          }
          // Bounce off walls
          if (p.x <= 0 || p.x >= width) {
            p.vx = -p.vx * 0.8;
          }
        }

        // Mouse repulsion
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRef.current.radius) {
          const force = (1 - dist / mouseRef.current.radius) * 4;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force;
          p.y -= Math.sin(angle) * force;
        }

        // Twinkle
        p.alpha = p.baseAlpha + Math.sin(time * 2 + i) * 0.2;
        p.alpha = Math.max(0.1, Math.min(1, p.alpha));

        // Draw star
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = p.size > 2 ? 8 : 4;
        ctx.shadowColor = p.color.includes('240') ? '#00F0FF' : '#7000FF';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Faint constellation links for closest neighbors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 85) {
            const linkAlpha = (1 - dist2 / 85) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${linkAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isZeroG]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};
