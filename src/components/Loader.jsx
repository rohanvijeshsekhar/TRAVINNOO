import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  // Lock scroll during loader
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4.2, duration: 0.3, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (onComplete) {
          onComplete();
        }
      }}
      className="fullscreen-loader"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#050505',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      <style>{`
        .loader-progress-track {
          width: 200px;
          height: 2.5px;
          background-color: #1a1a1a;
          border-radius: 100px;
          overflow: hidden;
          position: relative;
        }
        @media (max-width: 768px) {
          .loader-progress-track {
            width: 150px;
          }
        }
      `}</style>

      {/* Thin Horizontal Progress Bar Track */}
      <div className="loader-progress-track">
        {/* Progress Fill */}
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: ['0%', '15%', '45%', '85%', '90%', '100%'] }}
          transition={{
            times: [0, 0.15, 0.45, 0.75, 0.9, 1.0],
            duration: 4.2,
            ease: "easeInOut"
          }}
          style={{
            height: '100%',
            backgroundColor: '#C1121F',
            borderRadius: '100px'
          }}
        />
      </div>
    </motion.div>
  );
}
