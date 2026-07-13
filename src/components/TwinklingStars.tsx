'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function TwinklingStars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<{ id: number; left: string; top: string; size: number; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const count = isTouchDevice ? 20 : 45;
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${(i * 7919 + 7) % 100}%`,
      top: `${(i * 4973 + 13) % 100}%`,
      size: ((i * 3 + 1) % 15) / 10 + 1.2,
      delay: `${(i * 6271 + 3) % 6}s`,
      duration: `${(i * 5381 + 7) % 8 + 5}s`
    }));
    setStars(items);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        container.style.display = entry.isIntersecting ? 'block' : 'none';
        const driftingStars = container.querySelectorAll('.drifting-twinkle-star');
        const state = entry.isIntersecting ? 'running' : 'paused';
        driftingStars.forEach(s => {
          (s as HTMLElement).style.animationPlayState = state;
        });
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 2
      }}
    >
      <style>{`
        @keyframes starDrift {
          0% {
            transform: translate(0, 0) scale(0.85);
            opacity: 0.25;
          }
          50% {
            transform: translate(15px, -15px) scale(1.15);
            opacity: 0.85;
          }
          100% {
            transform: translate(30px, -30px) scale(0.85);
            opacity: 0.25;
          }
        }
        .drifting-twinkle-star {
          position: absolute;
          background-color: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        }
      `}</style>
      {stars.map((star) => (
        <div
          key={star.id}
          className="drifting-twinkle-star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `starDrift ${star.duration} infinite ease-in-out`,
            animationDelay: star.delay
          }}
        />
      ))}
    </div>
  );
}
