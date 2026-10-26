import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  onClick?: () => void;
  enableZeroGFloat?: boolean;
  floatDelay?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 8,
  glowColor = 'rgba(0, 240, 255, 0.12)',
  onClick,
  enableZeroGFloat = false,
  floatDelay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.2 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normX = clientX / rect.width - 0.5;
    const normY = clientY / rect.height - 0.5;

    x.set(normX);
    y.set(normY);

    setGlarePos({
      x: (clientX / rect.width) * 100,
      y: (clientY / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={
        enableZeroGFloat && !isHovered
          ? {
              y: [0, -6, 0],
              transition: {
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: floatDelay,
              },
            }
          : { y: 0 }
      }
      style={{
        perspective: 1200,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
    >
      {/* Specular Glare / Reflection Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, ${glowColor}, transparent 70%)`,
        }}
      />

      {children}
    </motion.div>
  );
};
