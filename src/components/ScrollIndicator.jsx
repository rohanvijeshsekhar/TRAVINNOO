"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ delay: 1.5, duration: 1 }}
      style={{
        position: 'absolute',
        bottom: '4%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        zIndex: 10,
        pointerEvents: 'none'
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.65rem',
          fontWeight: 400,
          letterSpacing: '4px',
          color: 'var(--text-primary)',
          opacity: 0.8,
          textTransform: 'uppercase'
        }}
      >
        SCROLL
      </span>

      {/* Vertical Animated Line */}
      <div
        style={{
          width: '1px',
          height: '50px',
          background: 'rgba(255, 255, 255, 0.15)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <motion.div
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: [0.25, 1, 0.5, 1],
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '50%',
            background: 'var(--accent-red)', // Red scroll animator
            left: 0
          }}
        />
      </div>
    </motion.div>
  );
}
