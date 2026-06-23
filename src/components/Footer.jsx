import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const innerTPath = "M 78.80,88.83 L 77.99,89.92 L 76.90,91.00 L 76.09,92.08 L 75.00,92.62 L 73.91,93.17 L 72.83,93.44 L 71.74,93.71 L 70.65,93.98 L 69.57,93.98 L 68.48,94.25 L 67.39,94.25 L 66.30,93.98 L 65.22,93.71 L 64.13,93.44 L 63.04,92.90 L 61.96,92.08 L 61.14,91.00 L 60.60,89.92 L 60.33,88.83 L 60.05,87.75 L 59.78,86.67 L 59.78,85.58 L 59.78,84.50 L 59.78,83.42 L 59.78,82.33 L 59.78,81.25 L 59.78,80.17 L 59.78,79.08 L 59.78,78.00 L 59.78,76.92 L 59.78,75.83 L 59.78,74.75 L 59.78,73.67 L 59.78,72.58 L 59.78,71.50 L 59.78,70.42 L 59.78,69.33 L 59.78,68.25 L 59.78,67.17 L 59.78,66.08 L 59.78,65.00 L 59.78,63.92 L 59.78,62.83 L 59.78,61.75 L 59.78,60.67 L 59.78,59.58 L 60.05,58.50 L 61.14,58.50 L 62.23,58.50 L 63.32,58.50 L 64.40,58.50 L 65.49,58.50 L 66.58,58.50 L 67.66,58.50 L 68.75,58.50 L 69.84,58.50 L 70.92,58.50 L 72.01,58.50 L 73.10,58.50 L 74.18,58.50 L 75.27,58.50 L 76.36,58.23 L 76.36,57.15 L 76.36,56.06 L 76.36,54.98 L 76.36,53.90 L 76.36,52.81 L 76.36,51.73 L 76.36,50.65 L 76.36,49.56 L 76.36,48.48 L 76.36,47.40 L 76.36,46.31 L 76.36,45.23 L 76.36,44.15 L 75.27,43.88 L 74.18,43.88 L 73.10,43.88 L 72.01,43.88 L 70.92,43.88 L 69.84,43.88 L 68.75,43.88 L 67.66,43.88 L 66.58,43.88 L 65.49,43.88 L 64.40,43.88 L 63.32,43.88 L 62.23,43.88 L 61.14,43.88 L 60.05,43.88 L 59.78,42.79 L 59.78,41.71 L 59.78,40.62 L 59.78,39.54 L 59.78,38.46 L 59.78,37.38 L 59.78,36.29 L 59.78,35.21 L 59.78,34.12 L 59.78,33.04 L 59.78,31.96 L 59.78,30.88 L 59.78,29.79 L 59.78,28.71 L 59.51,27.62 L 58.42,27.62 L 57.34,27.62 L 56.25,27.62 L 55.16,27.62 L 54.08,27.62 L 52.99,27.62 L 51.90,27.62 L 50.82,27.62 L 49.73,27.62 L 48.64,27.62 L 47.55,27.62 L 46.47,27.62 L 45.38,27.62 L 44.29,27.62 L 43.21,27.62 L 42.12,27.62 L 41.03,27.62 L 40.22,28.17 L 40.22,29.25 L 40.22,30.33 L 40.22,31.42 L 40.22,32.50 L 40.22,33.58 L 40.22,34.67 L 40.22,35.75 L 40.22,36.83 L 40.22,37.92 L 40.22,39.00 L 40.22,40.08 L 40.22,41.17 L 40.22,42.25 L 40.22,43.33 L 40.22,44.42 L 40.22,45.50 L 40.22,46.58 L 40.22,47.67 L 40.22,48.75 L 40.22,49.83 L 40.22,50.92 L 40.22,52.00 L 40.22,53.08 L 40.22,54.17 L 40.22,55.25 L 40.22,56.33 L 40.22,57.42 L 40.22,58.50 L 40.22,59.58 L 40.22,60.67 L 40.22,61.75 L 40.22,62.83 L 40.22,63.92 L 40.22,65.00 L 40.22,66.08 L 40.22,67.17 L 40.22,68.25 L 40.22,69.33 L 40.22,70.42 L 40.22,71.50 L 40.22,72.58 L 40.22,73.67 L 40.22,74.75 L 40.22,75.83 L 40.22,76.92 L 40.22,78.00 L 40.22,79.08 L 40.22,80.17 L 40.22,81.25 L 40.22,82.33 L 40.22,83.42 L 40.22,84.50 L 40.22,85.58 L 40.22,86.67 L 40.22,87.75 L 40.49,88.83 L 40.49,89.92 L 40.76,91.00 L 40.76,92.08 L 41.03,93.17 L 41.30,94.25 L 41.58,95.33 L 42.12,96.42 L 42.66,97.50";
const outerPinPath = "M 42.66,97.50 L 43.48,99.12 L 44.57,100.75 L 45.92,102.38 L 47.28,103.73 L 48.91,105.08 L 50.54,106.17 L 52.17,106.98 L 53.80,107.52 L 55.43,108.06 L 57.07,108.60 L 58.15,109.15 L 56.52,110.50 L 54.89,111.85 L 53.26,113.48 L 51.63,114.83 L 50.00,116.19 L 48.37,115.10 L 46.74,113.48 L 45.11,112.12 L 43.48,110.50 L 41.85,109.15 L 40.22,107.52 L 38.59,106.17 L 36.96,104.54 L 35.33,103.19 L 33.70,101.56 L 32.07,100.21 L 30.43,98.58 L 28.80,96.96 L 27.17,95.33 L 25.54,93.71 L 23.91,92.08 L 22.55,90.46 L 20.92,88.83 L 19.57,87.21 L 18.21,85.58 L 17.12,83.96 L 15.76,82.33 L 14.67,80.71 L 13.59,79.08 L 12.50,77.46 L 11.68,75.83 L 10.87,74.21 L 10.05,72.58 L 9.24,70.96 L 8.70,69.33 L 8.15,67.71 L 7.61,66.08 L 7.34,64.46 L 7.07,62.83 L 6.79,61.21 L 6.52,59.58 L 6.52,57.96 L 6.52,56.33 L 6.52,54.71 L 6.52,53.08 L 6.79,51.46 L 7.07,49.83 L 7.34,48.21 L 7.61,46.58 L 8.15,44.96 L 8.70,43.33 L 9.24,41.71 L 9.78,40.08 L 10.60,38.46 L 11.41,36.83 L 12.23,35.21 L 13.32,33.58 L 14.40,31.96 L 15.76,30.33 L 17.12,28.71 L 18.48,27.08 L 20.11,25.73 L 21.74,24.10 L 23.37,23.02 L 25.00,21.67 L 26.63,20.58 L 28.26,19.77 L 29.89,18.69 L 31.52,18.15 L 33.15,17.33 L 34.78,16.79 L 36.41,15.98 L 38.04,15.71 L 39.67,15.17 L 41.30,14.90 L 42.93,14.62 L 44.57,14.35 L 45.92,14.08 L 47.55,14.08 L 49.18,14.08 L 50.82,14.08 L 52.45,14.08 L 54.08,14.08 L 55.71,14.35 L 57.34,14.62 L 58.97,14.90 L 60.60,15.44 L 62.23,15.71 L 63.86,16.25 L 65.49,16.79 L 67.12,17.60 L 68.75,18.15 L 70.38,18.96 L 72.01,20.04 L 73.64,20.85 L 75.27,21.94 L 76.90,23.29 L 78.53,24.65 L 80.16,26.00 L 81.79,27.62 L 83.15,29.25 L 84.51,30.88 L 85.60,32.50 L 86.68,34.12 L 87.77,35.75 L 88.59,37.38 L 89.40,39.00 L 90.22,40.62 L 90.76,42.25 L 91.30,43.88 L 91.85,45.50 L 92.12,47.12 L 92.66,48.75 L 92.93,50.38 L 92.93,52.00 L 93.21,53.62 L 93.21,55.25 L 93.21,56.88 L 93.21,58.50 L 93.21,60.12 L 92.93,61.75 L 92.66,63.38 L 92.39,65.00 L 91.85,66.62 L 91.30,68.25 L 90.76,69.88 L 90.22,71.50 L 89.40,73.12 L 88.59,74.75 L 87.77,76.38 L 86.96,78.00 L 85.87,79.62 L 84.78,81.25 L 83.70,82.88 L 82.34,84.50 L 81.25,86.12 L 79.89,87.75 L 79.08,88.56";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(245, 242, 236, 0.06)',
        padding: '90px 24px 60px 24px',
        overflow: 'hidden',
        zIndex: 10,
        boxSizing: 'border-box'
      }}
    >
      {/* Background Graphic Illustrations */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.8
        }}
      >
        {/* Glow Wash */}
        <div
          style={{
            position: 'absolute',
            bottom: '-25%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(193, 18, 31, 0.08) 0%, rgba(234, 28, 41, 0.02) 50%, transparent 100%)',
            filter: 'blur(80px)',
            pointerEvents: 'none'
          }}
        />

        {/* Large Decorative SVG logo and flight path network */}
        <svg
          viewBox="0 0 1000 600"
          style={{
            position: 'absolute',
            top: '5%',
            right: '-5%',
            width: '65%',
            height: '90%',
            display: 'block',
            strokeWidth: 0.6,
            stroke: 'rgba(245, 242, 236, 0.035)',
            fill: 'none',
          }}
        >
          {/* Grid lines */}
          <path d="M 100 0 L 100 600 M 300 0 L 300 600 M 500 0 L 500 600 M 700 0 L 700 600 M 900 0 L 900 600" strokeDasharray="3,6" stroke="rgba(245, 242, 236, 0.015)" />
          <path d="M 0 100 L 1000 100 M 0 250 L 1000 250 M 0 400 L 1000 400 M 0 550 L 1000 550" strokeDasharray="3,6" stroke="rgba(245, 242, 236, 0.015)" />

          {/* Compass layout rings */}
          <circle cx="750" cy="280" r="160" strokeDasharray="4,8" stroke="rgba(245, 242, 236, 0.02)" />
          <circle cx="750" cy="280" r="220" stroke="rgba(245, 242, 236, 0.01)" />
          <circle cx="750" cy="280" r="80" stroke="rgba(193, 18, 31, 0.05)" />

          {/* Bezier Flight paths connecting nodes with the Travinno pin */}
          <path d="M 150 150 Q 450 100 750 280" strokeDasharray="4,6" stroke="rgba(245, 242, 236, 0.08)" />
          <path d="M 220 420 Q 480 380 750 280" strokeDasharray="4,4" />
          <path d="M 400 40 Q 550 150 750 280" stroke="rgba(193, 18, 31, 0.12)" strokeWidth="0.8" />
          <path d="M 320 530 Q 600 420 750 280" strokeDasharray="2,5" />
          <path d="M 920 180 Q 840 220 750 280" strokeDasharray="4,6" />
          <path d="M 880 480 Q 800 380 750 280" stroke="rgba(245, 242, 236, 0.06)" />

          {/* Route target coordinates pins */}
          <circle cx="150" cy="150" r="2.5" fill="rgba(245, 242, 236, 0.25)" />
          <circle cx="220" cy="420" r="2.5" fill="rgba(245, 242, 236, 0.25)" />
          <circle cx="400" cy="40" r="2" fill="#C1121F" opacity="0.6" />
          <circle cx="320" cy="530" r="2.5" fill="rgba(245, 242, 236, 0.25)" />
          <circle cx="920" cy="180" r="2" fill="rgba(245, 242, 236, 0.2)" />
          <circle cx="880" cy="480" r="3" fill="#C1121F" opacity="0.5" />

          {/* Large wireframe scaled up Travinno Logo Pin in center of paths */}
          <g transform="translate(680, 180) scale(1.4)" style={{ opacity: 0.12 }}>
            {/* Evenodd Logo Path */}
            <path
              d={`${outerPinPath} ${innerTPath}`}
              fillRule="evenodd"
              fill="rgba(245, 242, 236, 0.08)"
              stroke="rgba(245, 242, 236, 0.35)"
              strokeWidth="0.5"
            />
            {/* Glowing outer aura */}
            <path
              d={outerPinPath}
              fill="none"
              stroke="#C1121F"
              strokeWidth="2"
              opacity="0.25"
              style={{ filter: 'drop-shadow(0px 0px 4px #C1121F)' }}
            />
          </g>
        </svg>

        {/* Big Backdrop Outline Typography */}
        <div
          style={{
            position: 'absolute',
            bottom: '-45px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(5.5rem, 15vw, 14.5rem)',
            fontWeight: 900,
            letterSpacing: '0.22em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(245, 242, 236, 0.022)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            zIndex: 1
          }}
        >
          TRAVINNO
        </div>
      </div>

      {/* Main Footer Directory (Inside Max Width Container) */}
      <div
        className="footer-directory-grid"
        style={{
          position: 'relative',
          maxWidth: '1240px',
          margin: '0 auto 60px auto',
          display: 'grid',
          gap: '40px',
          zIndex: 2
        }}
      >
        {/* Brand Information column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* SVG Logo */}
            <svg viewBox="0 0 100 130" style={{ width: '28px', height: '36px', display: 'block' }}>
              <path
                d={`${outerPinPath} ${innerTPath}`}
                fillRule="evenodd"
                fill="#C1121F"
                stroke="none"
              />
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '1.25rem',
                letterSpacing: '0.15em',
                color: '#F5F2EC',
                textTransform: 'uppercase'
              }}
            >
              TRAVINNO
            </span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.86rem',
              lineHeight: 1.6,
              color: 'rgba(245, 242, 236, 0.65)',
              margin: 0,
              maxWidth: '300px'
            }}
          >
            Orchestrating extraordinary luxury journeys, bespoke itineraries, and elite destination management services worldwide.
          </p>
          {/* Social Handles */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            {[
              { 
                icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                ), 
                href: 'https://instagram.com/travinno' 
              },
              { 
                icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                ), 
                href: 'https://linkedin.com/company/travinno' 
              },
              { 
                icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                ), 
                href: 'https://facebook.com/travinno' 
              },
              { 
                icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                ), 
                href: 'https://youtube.com/travinno' 
              }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(245, 242, 236, 0.08)',
                  color: 'rgba(245, 242, 236, 0.65)',
                  backgroundColor: 'rgba(245, 242, 236, 0.02)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F5F2EC';
                  e.currentTarget.style.backgroundColor = 'rgba(193, 18, 31, 0.15)';
                  e.currentTarget.style.borderColor = '#C1121F';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(193, 18, 31, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(245, 242, 236, 0.65)';
                  e.currentTarget.style.backgroundColor = 'rgba(245, 242, 236, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(245, 242, 236, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Destinations Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#F5F2EC',
              margin: 0
            }}
          >
            Destinations
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { name: 'Dubai & UAE', href: '#destinations' },
              { name: 'Malaysia', href: '#destinations' },
              { name: 'Thailand', href: '#destinations' },
              { name: 'Saudi Arabia', href: '#destinations' },
              { name: 'Maldives', href: '#destinations' },
              { name: 'Kerala (India)', href: '#destinations' }
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.84rem',
                    color: 'rgba(245, 242, 236, 0.55)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F5F2EC';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(245, 242, 236, 0.55)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#F5F2EC',
              margin: 0
            }}
          >
            Company
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { name: 'About Us', href: '#about' },
              { name: 'Our Expertise', href: '#services' },
              { name: 'Our Journey', href: '#journey' },
              { name: 'Why Travinno', href: '#why' },
              { name: 'Careers', href: '#company' },
              { name: 'Get in Touch', href: '#contact' }
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.84rem',
                    color: 'rgba(245, 242, 236, 0.55)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F5F2EC';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(245, 242, 236, 0.55)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Office details column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#F5F2EC',
              margin: 0
            }}
          >
            Contact & Hubs
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <MapPin size={15} style={{ color: '#C1121F', marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', lineHeight: 1.4, color: 'rgba(245, 242, 236, 0.65)' }}>
                <strong>Dubai (HQ):</strong> Level 15, The Gate District, DIFC, UAE
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <MapPin size={15} style={{ color: 'rgba(245, 242, 236, 0.4)', marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', lineHeight: 1.4, color: 'rgba(245, 242, 236, 0.55)' }}>
                <strong>Bangkok:</strong> Sukhumvit Road, Khlong Toei, Thailand
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <MapPin size={15} style={{ color: 'rgba(245, 242, 236, 0.4)', marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', lineHeight: 1.4, color: 'rgba(245, 242, 236, 0.55)' }}>
                <strong>New Delhi:</strong> Connaught Place, New Delhi, India
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px', borderTop: '1px solid rgba(245, 242, 236, 0.05)', paddingTop: '10px' }}>
              <a
                href="mailto:hello@travinno.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  color: 'rgba(245, 242, 236, 0.75)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C1121F'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245, 242, 236, 0.75)'}
              >
                <Mail size={14} /> hello@travinno.com
              </a>
              <a
                href="tel:+97141234567"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  color: 'rgba(245, 242, 236, 0.75)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C1121F'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245, 242, 236, 0.75)'}
              >
                <Phone size={14} /> +971 4 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright & back to top */}
      <div
        style={{
          position: 'relative',
          maxWidth: '1240px',
          margin: '0 auto',
          paddingTop: '24px',
          borderTop: '1px solid rgba(245, 242, 236, 0.05)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          zIndex: 2
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.78rem',
            color: 'rgba(245, 242, 236, 0.4)'
          }}
        >
          &copy; {new Date().getFullYear()} TRAVINNO. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((text, idx) => (
            <a
              key={idx}
              href="#company"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                color: 'rgba(245, 242, 236, 0.4)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#F5F2EC'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245, 242, 236, 0.4)'}
            >
              {text}
            </a>
          ))}
        </div>

        {/* Back To Top Button */}
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              backgroundColor: '#050505',
              border: '1px solid rgba(245, 242, 236, 0.1)',
              color: '#F5F2EC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 999,
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)'
            }}
            whileHover={{
              backgroundColor: '#C1121F',
              borderColor: '#C1121F',
              boxShadow: '0px 0px 15px rgba(193, 18, 31, 0.6)',
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </div>
    </footer>
  );
}
