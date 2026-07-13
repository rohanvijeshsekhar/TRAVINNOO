"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackgroundSlider({ destinations, activeIndex }) {
  const currentDest = destinations[activeIndex];

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0B1220',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {/* Background Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeIndex}
          initial={{ 
            opacity: 0, 
            scale: 1.15, 
            filter: 'blur(15px)',
            x: '-1.5%',
            y: '-1%'
          }}
          animate={{ 
            opacity: 1, 
            scale: 1.05, 
            filter: 'blur(0px)',
            x: '1%',
            y: '0.5%'
          }}
          exit={{ 
            opacity: 0, 
            scale: 1.0, 
            filter: 'blur(10px)',
            transition: { duration: 1.8, ease: [0.25, 1, 0.5, 1] } 
          }}
          transition={{
            opacity: { duration: 1.8, ease: 'easeInOut' },
            scale: { duration: 6.5, ease: 'linear' },
            x: { duration: 6.5, ease: 'linear' },
            y: { duration: 6.5, ease: 'linear' },
            filter: { duration: 1.5, ease: 'easeOut' }
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${currentDest.image})`,
            transformOrigin: 'center center'
          }}
        />
      </AnimatePresence>

      {/* Atmospheric Overlays */}
      <div className="cinematic-overlay" />
      <div className="vignette-overlay" />
      <div className="glow-overlay" />
    </div>
  );
}
