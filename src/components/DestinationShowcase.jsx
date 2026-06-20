import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DESTINATIONS_DATA = [
  {
    code: 'DXB',
    name: 'Dubai',
    quote: 'Where luxury meets innovation.',
    date: 'APR 12, 2026',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    description: 'Discover soaring skyscrapers, pristine beaches, and desert dining.',
    notes: 'The view from the Burj at sunset is surreal. Golden light bounces off steel and glass, stretching all the way to the desert horizon. Tonight we dine at a private camp in the dunes under the stars.',
    coordinates: '25.2048° N / 55.2708° E',
    sketch: 'M 30,85 L 90,85 M 60,85 V 20 M 60,30 C 75,35 90,50 90,65 C 90,75 75,80 60,85 M 60,25 C 45,30 35,45 35,60 C 35,72 45,80 60,85'
  },
  {
    code: 'NBO',
    name: 'Kenya',
    quote: 'Experience the heart of African wilderness.',
    date: 'MAY 04, 2026',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
    description: 'Immerse your groups in wildlife safaris and premium savanna camps.',
    notes: 'Woke up at 5 AM to the call of the wild. Watched a pride of lions move silhouetted against the rising blood-orange sun. The air is crisp, carrying the scent of red earth and dry savanna.',
    coordinates: '1.2921° S / 36.8219° E',
    sketch: 'M 60,85 V 60 M 60,60 C 50,55 35,50 30,40 C 25,30 35,22 60,32 C 85,22 95,30 90,40 C 85,50 70,55 60,60 M 30,38 C 22,28 35,15 60,25 C 85,15 98,28 90,38'
  },
  {
    code: 'BKK',
    name: 'Thailand',
    quote: 'A perfect blend of culture and tropical beauty.',
    date: 'OCT 18, 2026',
    image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1200&auto=format&fit=crop',
    description: 'Vibrant floating markets and white-sand retreats.',
    notes: 'The scent of jasmine and street food fills the humid night air. Visited Wat Arun at dusk; the spires look like ancient porcelain lace. A longtail boat ride down Chao Phraya river completes a magical day.',
    coordinates: '13.7563° N / 100.5018° E',
    sketch: 'M 25,80 L 95,80 M 35,80 V 55 L 60,30 L 85,55 V 80 M 60,30 V 15 M 30,55 C 25,50 15,55 10,65 M 90,55 C 95,50 105,55 110,65'
  },
  {
    code: 'HAN',
    name: 'Vietnam',
    quote: 'Timeless traditions with modern energy.',
    date: 'NOV 23, 2026',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop',
    description: 'Cruise through limestone pillars and lantern-lit ancient trading towns.',
    notes: 'Old Quarter is a maze of sensory wonders. Sipped strong egg coffee in a quiet colonial courtyard while rain fell on tiles. Tomorrow we board the junk boat into the emerald maze of Ha Long Bay.',
    coordinates: '21.0285° N / 105.8542° E',
    sketch: 'M 20,70 L 60,30 L 100,70 Z M 20,70 C 40,73 80,73 100,70 M 60,30 V 71'
  },
  {
    code: 'SIN',
    name: 'Singapore',
    quote: "The world's most refined urban destination.",
    date: 'DEC 09, 2026',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop',
    description: 'Lush gardens under bio-domes and high-end culinary stages.',
    notes: 'Felt like stepping into the future at Gardens by the Bay. Giant bio-domes house rare orchids under massive glass vaults. The city runs like clockwork, yet feels lush, green, and completely alive.',
    coordinates: '1.3521° N / 103.8198° E',
    sketch: 'M 50,85 C 50,65 55,55 60,45 C 65,35 70,35 65,25 C 60,15 50,20 45,30 C 45,40 48,50 45,60 M 45,60 C 40,63 35,67 38,75 M 38,75 C 40,80 45,83 50,85'
  },
  {
    code: 'KUL',
    name: 'Malaysia',
    quote: 'Nature, culture and cosmopolitan elegance.',
    date: 'JAN 15, 2027',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop',
    description: 'Historic rainforest walks and the sleek Twin Towers skyline.',
    notes: 'Walked the skybridge between the twin giants today. The contrast between ancient rainforests and hyper-modern towers defines this place. Visited Batu Caves; the steps are a rainbow under massive cliffs.',
    coordinates: '3.1390° N / 101.6869° E',
    sketch: 'M 35,85 V 25 L 45,15 V 85 M 45,35 H 75 M 65,85 V 25 L 75,15 V 85 M 45,45 H 75 M 45,55 H 75 M 45,65 H 75'
  },
  {
    code: 'DPS',
    name: 'Bali',
    quote: 'The island where every journey becomes unforgettable.',
    date: 'MAR 02, 2027',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
    description: 'Emerald terraced valleys and private luxury wellness sanctuaries.',
    notes: 'Woke to the sound of temple bells in Ubud. Emerald rice fields ripple in the breeze. Ubud feels like a sanctuary where time stands still and the spirit heals. Dinner by the river was candlelight and water flow.',
    coordinates: '8.4095° S / 115.1889° E',
    sketch: 'M 25,85 V 20 L 45,30 V 85 M 75,85 V 20 L 55,30 V 85 M 20,85 H 80 M 25,35 H 45 M 55,35 H 75 M 25,50 H 45 M 55,50 H 75'
  }
];

const DistressedStamp = ({ code, date, active }) => {
  const logoPath = "M 78.80,88.83 L 77.99,89.92 L 76.90,91.00 L 76.09,92.08 L 75.00,92.62 L 73.91,93.17 L 72.83,93.44 L 71.74,93.71 L 70.65,93.98 L 69.57,93.98 L 68.48,94.25 L 67.39,94.25 L 66.30,93.98 L 65.22,93.71 L 64.13,93.44 L 63.04,92.90 L 61.96,92.08 L 61.14,91.00 L 60.60,89.92 L 60.33,88.83 L 60.05,87.75 L 59.78,86.67 L 59.78,85.58 L 59.78,84.50 L 59.78,83.42 L 59.78,82.33 L 59.78,81.25 L 59.78,80.17 L 59.78,79.08 L 59.78,78.00 L 59.78,76.92 L 59.78,75.83 L 59.78,74.75 L 59.78,73.67 L 59.78,72.58 L 59.78,71.50 L 59.78,70.42 L 59.78,69.33 L 59.78,68.25 L 59.78,67.17 L 59.78,66.08 L 59.78,65.00 L 59.78,63.92 L 59.78,62.83 L 59.78,61.75 L 59.78,60.67 L 59.78,59.58 L 60.05,58.50 L 61.14,58.50 L 62.23,58.50 L 63.32,58.50 L 64.40,58.50 L 65.49,58.50 L 66.58,58.50 L 67.66,58.50 L 68.75,58.50 L 69.84,58.50 L 70.92,58.50 L 72.01,58.50 L 73.10,58.50 L 74.18,58.50 L 75.27,58.50 L 76.36,58.23 L 76.36,57.15 L 76.36,56.06 L 76.36,54.98 L 76.36,53.90 L 76.36,52.81 L 76.36,51.73 L 76.36,50.65 L 76.36,49.56 L 76.36,48.48 L 76.36,47.40 L 76.36,46.31 L 76.36,45.23 L 76.36,44.15 L 75.27,43.88 L 74.18,43.88 L 73.10,43.88 L 72.01,43.88 L 70.92,43.88 L 69.84,43.88 L 68.75,43.88 L 67.66,43.88 L 66.58,43.88 L 65.49,43.88 L 64.40,43.88 L 63.32,43.88 L 62.23,43.88 L 61.14,43.88 L 60.05,43.88 L 59.78,42.79 L 59.78,41.71 L 59.78,40.62 L 59.78,39.54 L 59.78,38.46 L 59.78,37.38 L 59.78,36.29 L 59.78,35.21 L 59.78,34.12 L 59.78,33.04 L 59.78,31.96 L 59.78,30.88 L 59.78,29.79 L 59.78,28.71 L 59.51,27.62 L 58.42,27.62 L 57.34,27.62 L 56.25,27.62 L 55.16,27.62 L 54.08,27.62 L 52.99,27.62 L 51.90,27.62 L 50.82,27.62 L 49.73,27.62 L 48.64,27.62 L 47.55,27.62 L 46.47,27.62 L 45.38,27.62 L 44.29,27.62 L 43.21,27.62 L 42.12,27.62 L 41.03,27.62 L 40.22,28.17 L 40.22,29.25 L 40.22,30.33 L 40.22,31.42 L 40.22,32.50 L 40.22,33.58 L 40.22,34.67 L 40.22,35.75 L 40.22,36.83 L 40.22,37.92 L 40.22,39.00 L 40.22,40.08 L 40.22,41.17 L 40.22,42.25 L 40.22,43.33 L 40.22,44.42 L 40.22,45.50 L 40.22,46.58 L 40.22,47.67 L 40.22,48.75 L 40.22,49.83 L 40.22,50.92 L 40.22,52.00 L 40.22,53.08 L 40.22,54.17 L 40.22,55.25 L 40.22,56.33 L 40.22,57.42 L 40.22,58.50 L 40.22,59.58 L 40.22,60.67 L 40.22,61.75 L 40.22,62.83 L 40.22,63.92 L 40.22,65.00 L 40.22,66.08 L 40.22,67.17 L 40.22,68.25 L 40.22,69.33 L 40.22,70.42 L 40.22,71.50 L 40.22,72.58 L 40.22,73.67 L 40.22,74.75 L 40.22,75.83 L 40.22,76.92 L 40.22,78.00 L 40.22,79.08 L 40.22,80.17 L 40.22,81.25 L 40.22,82.33 L 40.22,83.42 L 40.22,84.50 L 40.22,85.58 L 40.22,86.67 L 40.22,87.75 L 40.49,88.83 L 40.49,89.92 L 40.76,91.00 L 40.76,92.08 L 41.03,93.17 L 41.30,94.25 L 41.58,95.33 L 42.12,96.42 L 42.66,97.50 M 42.66,97.50 L 43.48,99.12 L 44.57,100.75 L 45.92,102.38 L 47.28,103.73 L 48.91,105.08 L 50.54,106.17 L 52.17,106.98 L 53.80,107.52 L 55.43,108.06 L 57.07,108.60 L 58.15,109.15 L 56.52,110.50 L 54.89,111.85 L 53.26,113.48 L 51.63,114.83 L 50.00,116.19 L 48.37,115.10 L 46.74,113.48 L 45.11,112.12 L 43.48,110.50 L 41.85,109.15 L 40.22,107.52 L 38.59,106.17 L 36.96,104.54 L 35.33,103.19 L 33.70,101.56 L 32.07,100.21 L 30.43,98.58 L 28.80,96.96 L 27.17,95.33 L 25.54,93.71 L 23.91,92.08 L 22.55,90.46 L 20.92,88.83 L 19.57,87.21 L 18.21,85.58 L 17.12,83.96 L 15.76,82.33 L 14.67,80.71 L 13.59,79.08 L 12.50,77.46 L 11.68,75.83 L 10.87,74.21 L 10.05,72.58 L 9.24,70.96 L 8.70,69.33 L 8.15,67.71 L 7.61,66.08 L 7.34,64.46 L 7.07,62.83 L 6.79,61.21 L 6.52,59.58 L 6.52,57.96 L 6.52,56.33 L 6.52,54.71 L 6.52,53.08 L 6.79,51.46 L 7.07,49.83 L 7.34,48.21 L 7.61,46.58 L 8.15,44.96 L 8.70,43.33 L 9.24,41.71 L 9.78,40.08 L 10.60,38.46 L 11.41,36.83 L 12.23,35.21 L 13.32,33.58 L 14.40,31.96 L 15.76,30.33 L 17.12,28.71 L 18.48,27.08 L 20.11,25.73 L 21.74,24.10 L 23.37,23.02 L 25.00,21.67 L 26.63,20.58 L 28.26,19.77 L 29.89,18.69 L 31.52,18.15 L 33.15,17.33 L 34.78,16.79 L 36.41,15.98 L 38.04,15.71 L 39.67,15.17 L 41.30,14.90 L 42.93,14.62 L 44.57,14.35 L 45.92,14.08 L 47.55,14.08 L 49.18,14.08 L 50.82,14.08 L 52.45,14.08 L 54.08,14.08 L 55.71,14.35 L 57.34,14.62 L 58.97,14.90 L 60.60,15.44 L 62.23,15.71 L 63.86,16.25 L 65.49,16.79 L 67.12,17.60 L 68.75,18.15 L 70.38,18.96 L 72.01,20.04 L 73.64,20.85 L 75.27,21.94 L 76.90,23.29 L 78.53,24.65 L 80.16,26.00 L 81.79,27.62 L 83.15,29.25 L 84.51,30.88 L 85.60,32.50 L 86.68,34.12 L 87.77,35.75 L 88.59,37.38 L 89.40,39.00 L 90.22,40.62 L 90.76,42.25 L 91.30,43.88 L 91.85,45.50 L 92.12,47.12 L 92.66,48.75 L 92.93,50.38 L 92.93,52.00 L 93.21,53.62 L 93.21,55.25 L 93.21,56.88 L 93.21,58.50 L 93.21,60.12 L 92.93,61.75 L 92.66,63.38 L 92.39,65.00 L 91.85,66.62 L 91.30,68.25 L 90.76,69.88 L 90.22,71.50 L 89.40,73.12 L 88.59,74.75 L 87.77,76.38 L 86.96,78.00 L 85.87,79.62 L 84.78,81.25 L 83.70,82.88 L 82.34,84.50 L 81.25,86.12 L 79.89,87.75 L 79.08,88.56";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.8, rotate: -40 }}
      animate={active ? { opacity: 0.85, scale: 1, rotate: -12 } : { opacity: 0, scale: 1.8, rotate: -40 }}
      transition={{ 
        opacity: { duration: 0.4 },
        scale: { type: "spring", stiffness: 140, damping: 14, delay: 0.25 },
        rotate: { type: "spring", stiffness: 140, damping: 14, delay: 0.25 }
      }}
      style={{
        position: 'absolute',
        bottom: '25px',
        right: '25px',
        width: '95px',
        height: '95px',
        borderRadius: '50%',
        border: '3px double #C1121F',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#C1121F',
        fontFamily: 'monospace',
        userSelect: 'none',
        pointerEvents: 'none',
        filter: 'url(#stamp-ink-bleed)',
      }}
    >
      <span style={{ fontSize: '6px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', lineHeight: 1, marginTop: '2px' }}>ENTRY</span>
      <div style={{ width: '50px', height: '1px', borderBottom: '1px dashed #C1121F', margin: '2px 0' }} />
      <span style={{ fontSize: '18px', fontWeight: '900', letterSpacing: '0.5px', lineHeight: 1 }}>{code}</span>
      
      {/* Subtly integrated Travinno Logo */}
      <svg
        viewBox="0 0 100 130"
        style={{
          width: '12px',
          height: '15px',
          display: 'block',
          fill: '#C1121F',
          margin: '2px 0'
        }}
      >
        <path d={logoPath} fillRule="evenodd" />
      </svg>

      <div style={{ width: '50px', height: '1px', borderBottom: '1px dashed #C1121F', margin: '2px 0' }} />
      <span style={{ fontSize: '7.5px', fontWeight: 'bold', letterSpacing: '1px', lineHeight: 1 }}>{date}</span>
    </motion.div>
  );
};

const CoffeeRingStain = () => {
  return (
    <svg viewBox="0 0 200 200" style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '130px', height: '130px', opacity: 0.05, pointerEvents: 'none', transform: 'rotate(25deg)' }} className="coffee-ring-overlay">
      <circle cx="100" cy="100" r="75" fill="none" stroke="#5a4a35" strokeWidth="4" strokeDasharray="300 20 40 10 100 30" />
      <circle cx="100" cy="100" r="72" fill="none" stroke="#5a4a35" strokeWidth="1" strokeDasharray="50 150 120 40" />
      <path d="M 80 40 Q 60 70 80 100 T 120 150" fill="none" stroke="#5a4a35" strokeWidth="2" opacity="0.3" />
    </svg>
  );
};

const InkSplatStain = () => {
  return (
    <svg viewBox="0 0 100 100" style={{ position: 'absolute', top: '40px', right: '30px', width: '40px', height: '40px', opacity: 0.04, pointerEvents: 'none' }}>
      <circle cx="50" cy="50" r="7" fill="#5a4a35" />
      <circle cx="38" cy="46" r="2.5" fill="#5a4a35" />
      <circle cx="58" cy="58" r="2" fill="#5a4a35" />
      <circle cx="62" cy="40" r="1" fill="#5a4a35" />
      <circle cx="48" cy="62" r="0.8" fill="#5a4a35" />
    </svg>
  );
};

const CreaseOverlay = () => {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, transparent 45%, rgba(0,0,0,0.02) 48%, rgba(255,255,255,0.06) 50%, rgba(0,0,0,0.02) 52%, transparent 55%)',
      pointerEvents: 'none',
      zIndex: 15
    }} />
  );
};

const BackgroundChart = () => {
  return (
    <div className="passport-bg-charts">
      <svg viewBox="0 0 1920 1080" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
        <line x1="0" y1="200" x2="1920" y2="200" strokeDasharray="2,12" />
        <line x1="0" y1="800" x2="1920" y2="800" strokeDasharray="2,12" />
        <line x1="400" y1="0" x2="400" y2="1080" strokeDasharray="2,12" />
        <line x1="1500" y1="0" x2="1500" y2="1080" strokeDasharray="2,12" />
        <circle cx="960" cy="540" r="500" strokeDasharray="2,8" />
        <circle cx="960" cy="540" r="485" opacity="0.5" />
        <path d="M 150 300 Q 250 250 350 350 T 550 400 T 700 300 T 900 350 T 1100 450 T 1300 400 T 1500 500 T 1700 450" strokeDasharray="3,10" />
        <path d="M 120 450 Q 280 400 400 500 T 650 600 T 800 550 T 1000 680 T 1200 700 T 1450 780 T 1600 720 T 1800 650" strokeDasharray="3,10" />
        <path d="M 400 300 C 600 100 1000 100 1200 400" stroke="#C1121F" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.3" />
        <path d="M 600 700 C 800 500 1200 500 1400 800" stroke="#C1121F" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.3" />
        <g transform="translate(150, 850) scale(0.8)">
          <circle cx="0" cy="0" r="60" strokeDasharray="2,4" />
          <line x1="0" y1="-70" x2="0" y2="70" />
          <line x1="-70" y1="0" x2="70" y2="0" />
          <polygon points="0,0 -5,-10 0,-50" fill="#ffffff" opacity="0.2" />
          <polygon points="0,0 5,-10 0,-50" fill="#ffffff" opacity="0.4" />
        </g>
        <text x="70" y="100" fill="#ffffff" fontSize="10" fontFamily="monospace" letterSpacing="2">ROUTE PREVIEW: TRV-NAV-DISC</text>
        <text x="1750" y="100" fill="#ffffff" fontSize="10" fontFamily="monospace" letterSpacing="2">LAT 23° 26' N / LON 0° 0' E</text>
      </svg>
    </div>
  );
};

const BackgroundIllustrations = () => {
  return (
    <div className="destinations-bg-illustrations">
      <svg
        viewBox="0 0 1920 1080"
        fill="none"
        stroke="#F3EEE6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%" }}
      >
        {/* LEFT SIDE: Kenya-inspired editorial sketch */}
        <g id="kenya-safari-sketch" strokeOpacity="0.15">
          {/* Mount Kilimanjaro silhouette */}
          <path d="M 80,680 Q 220,420 280,410 Q 320,405 380,410 T 520,680" />
          <path d="M 255,425 C 270,440 310,445 345,430 C 375,415 395,425 405,435" />
          <path d="M 230,470 Q 290,490 350,475 T 450,490" />
          <path d="M 200,530 Q 300,555 420,535" />
          <path d="M 440,580 L 485,550 L 530,680" />

          {/* Acacia Tree */}
          <path d="M 190,950 Q 210,850 180,720 Q 150,620 160,540" />
          <path d="M 205,950 Q 225,860 195,730 Q 165,630 178,540" />
          <path d="M 178,560 Q 120,520 80,500" />
          <path d="M 175,590 Q 230,550 290,530" />
          <path d="M 183,570 Q 190,480 200,430" />
          <path d="M 165,620 Q 130,590 100,585" />
          <path d="M 170,420 C 190,410 220,410 240,420 C 220,425 190,425 170,420 Z" />
          <path d="M 50,490 C 80,480 120,480 140,495 C 110,500 80,500 50,490 Z" />
          <path d="M 120,460 C 160,450 200,450 230,465 C 190,470 150,470 120,460 Z" />
          <path d="M 220,510 C 260,500 300,500 330,515 C 290,520 250,520 220,510 Z" />
          <path d="M 60,495 L 130,495" />
          <path d="M 130,465 L 210,465" />
          <path d="M 230,515 L 310,515" />
          <path d="M 180,425 L 230,425" />
          <path d="M 80,585 C 100,575 120,575 135,585" />

          {/* Elephant outline */}
          <path d="M 250,950 C 248,910 252,880 265,855 C 275,835 295,830 315,840 C 330,845 342,860 348,875 C 352,885 365,890 375,885 C 385,880 392,890 382,905 C 372,920 365,935 358,950 H 345 L 348,905 C 348,890 335,880 325,880 H 295 L 292,950 H 280 L 285,890 C 285,880 275,880 270,890 L 265,950 Z" />
          <path d="M 320,840 C 310,850 305,880 318,900 C 325,910 332,890 328,865" />
          <path d="M 352,885 Q 365,892 360,898" />
          <circle cx="339.5" cy="858" r="1.5" />

          {/* Giraffe outline */}
          <path d="M 110,950 L 115,870 L 118,840 C 112,810 120,800 130,800 L 145,760 L 155,670 Q 158,655 162,660 L 168,660 Q 172,662 168,668 L 162,674 L 152,780 Q 142,800 145,820 L 140,950 H 130 L 133,860 C 133,850 127,850 125,860 L 120,950 Z" />
          <path d="M 152,780 L 154,775 M 153,750 L 155,745 M 154,720 L 156,715 M 155,690 L 157,685" />
          <path d="M 115,820 Q 105,835 107,875" />
          <path d="M 125,830 Q 128,825 132,830 Z" />
          <path d="M 135,800 Q 138,795 142,800 Z" />
          <path d="M 148,740 Q 150,735 152,740 Z" />

          {/* Safari Jeep */}
          <circle cx="380" cy="935" r="15" />
          <circle cx="440" cy="935" r="15" />
          <path d="M 360,930 H 370 V 910 H 450 V 930 H 465 L 470,910 H 455 L 450,880 H 405 L 398,895 H 370 Z" />
          <path d="M 405,880 V 845 H 445 L 450,880" />
          <path d="M 400,845 H 452" />
          <circle cx="355" cy="898" r="12" />
          <path d="M 450,880 L 442,845" />
          <path d="M 436,860 L 440,865" />

          {/* Savannah Grass */}
          <path d="M 50,950 L 55,920 M 55,950 L 62,915 M 180,950 L 175,910 M 185,950 L 192,905 M 330,950 L 333,925 M 335,950 L 328,918 M 470,950 L 475,930 M 478,950 L 472,925" />

          {/* Hot air balloon */}
          <path d="M 375,150 C 350,150 335,175 360,210 L 368,230 H 382 L 390,210 C 415,175 400,150 375,150 Z" />
          <path d="M 368,230 L 372,245 H 378 L 382,230" />
          <path d="M 370,245 H 380 V 253 H 370 Z" />
          <path d="M 375,150 Q 365,185 375,230" />
          <path d="M 375,150 Q 385,185 375,230" />
          <path d="M 375,150 Q 350,185 369,230" />
          <path d="M 375,150 Q 400,185 381,230" />

          {/* Flying birds */}
          <path d="M 80,180 Q 90,170 100,180 Q 110,170 120,180" />
          <path d="M 130,200 Q 138,192 146,200 Q 154,192 162,200" />
          <path d="M 200,140 Q 206,134 212,140 Q 218,134 224,140" />
          <path d="M 240,165 Q 244,160 248,165 Q 252,160 256,165" />
        </g>

        {/* RIGHT SIDE: Singapore-inspired editorial sketch */}
        <g id="singapore-skyline-sketch" strokeOpacity="0.15">
          {/* Marina Bay Sands */}
          <path d="M 1530,820 L 1550,560 H 1570 L 1550,820" />
          <path d="M 1540,820 L 1557,560" />
          <path d="M 1600,820 L 1612,560 H 1632 L 1620,820" />
          <path d="M 1610,820 L 1620,560" />
          <path d="M 1670,820 L 1674,560 H 1694 L 1690,820" />
          <path d="M 1680,820 L 1682,560" />
          <path d="M 1510,560 L 1720,560 C 1735,560 1735,548 1715,548 L 1530,548 C 1515,548 1505,554 1510,560" />
          <path d="M 1512,554 H 1718" />

          {/* Merlion outline */}
          <path d="M 1405,820 Q 1430,815 1455,820" />
          <path d="M 1450,820 C 1460,800 1458,780 1448,765 C 1442,755 1438,745 1442,730 C 1438,715 1425,720 1412,725 C 1405,728 1400,735 1402,742 L 1395,745 L 1398,752 H 1405 L 1412,752 C 1418,765 1422,790 1426,820 Z" />
          <path d="M 1395,747 Q 1340,770 1355,830" />
          <path d="M 1396,750 Q 1345,775 1362,830" />
          <path d="M 1397,753 Q 1350,780 1368,830" />
          <path d="M 1430,775 Q 1440,770 1435,788" />

          {/* Supertree Grove */}
          <path d="M 1805,820 Q 1805,710 1785,640 H 1795 Q 1815,710 1815,820" />
          <path d="M 1785,640 L 1755,570 H 1825 L 1795,640" />
          <path d="M 1755,570 L 1795,640 M 1772,570 L 1790,640 M 1790,570 L 1790,640 M 1808,570 L 1792,640 M 1825,570 L 1795,640" />
          <path d="M 1755,570 L 1810,640 M 1825,570 L 1770,640" />
          <path d="M 1765,595 Q 1790,605 1815,595 M 1775,620 Q 1790,630 1805,620" />
          <path d="M 1700,630 Q 1740,635 1790,625" />
          <path d="M 1715,632 V 645 M 1735,634 V 645 M 1755,633 V 645 M 1775,630 V 645" />
          <path d="M 1745,820 Q 1745,745 1732,695 H 1738 Q 1750,745 1750,820" />
          <path d="M 1732,695 L 1712,645 H 1758 L 1738,695" />
          <path d="M 1712,645 L 1738,695 M 1758,645 L 1732,695" />

          {/* Singapore Skyline (Skyscrapers) */}
          <path d="M 1430,820 V 590 H 1452 V 820" />
          <path d="M 1465,820 V 530 L 1475,505 L 1485,530 V 820" />
          <path d="M 1495,820 V 580 H 1520 V 820" />
          <path d="M 1580,820 V 600 H 1600 V 820" />
          <path d="M 1635,820 V 570 L 1655,590 V 820" />
          <path d="M 1705,820 V 610 H 1730 V 820" />

          {/* Tropical palms */}
          <path d="M 1910,820 Q 1870,750 1850,680" />
          <path d="M 1850,680 Q 1810,680 1795,695" />
          <path d="M 1850,680 Q 1820,650 1812,630" />
          <path d="M 1850,680 Q 1855,635 1870,620" />
          <path d="M 1850,680 Q 1885,650 1905,665" />
          <path d="M 1850,680 Q 1890,705 1900,725" />

          {/* Small bay waves */}
          <path d="M 1350,830 C 1400,822 1450,835 1500,830 C 1550,822 1600,835 1650,830 C 1700,822 1750,835 1800,830 C 1850,822 1900,835 1950,830" />
          <path d="M 1380,845 C 1430,838 1480,850 1530,845 C 1580,838 1630,850 1680,845 C 1730,838 1780,850 1830,845 C 1880,838 1930,850 1980,845" />

          {/* Elegant Airplane above skyline */}
          <path d="M 1730,360 L 1795,330 C 1801,327 1803,322 1797,323 L 1725,352 Z" />
          <path d="M 1760,343 L 1750,315 H 1757 L 1770,337 Z" />
          <path d="M 1732,354 L 1720,335 H 1726 L 1737,352 Z" />
          <path d="M 1715,368 Q 1660,390 1580,410" />
        </g>
      </svg>
    </div>
  );
};

export default function DestinationShowcase() {
  const containerRef = useRef(null);
  const sheetsRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [hoveredExplore, setHoveredExplore] = useState(false);

  sheetsRefs.current = [];

  // Handle responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP ScrollTrigger timeline for scroll lock and page turn syncing
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isDesktop) return; // Stacks vertically on mobile

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".map-route-section",
          start: "top top",
          end: `+=${DESTINATIONS_DATA.length * 90}vh`,
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              DESTINATIONS_DATA.length - 1,
              Math.floor(progress * DESTINATIONS_DATA.length)
            );
            setActiveIndex(index);
          }
        }
      });

      // Clear any initial state transformation perspective
      gsap.set(sheetsRefs.current, { transformPerspective: 1800 });

      // Animate each sheet's flip and curl
      sheetsRefs.current.forEach((sheetEl, i) => {
        if (!sheetEl) return;

        // 1. Flip rotateY from 0 to -180
        tl.to(sheetEl, {
          rotateY: -180,
          ease: "sine.inOut",
          duration: 1.0
        }, i);

        // 2. Adjust Z-index dynamically at the 90deg (halfway) point
        // Initially stacked N-i. After flipping, stacked i+1.
        tl.set(sheetEl, { zIndex: i + 1 }, i + 0.5);
      });
    });

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section className="map-route-section" id="destinations" ref={containerRef}>
      {/* SVG Distress Stamp Noise Filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="stamp-ink-bleed">
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <BackgroundChart />

      {/* Storytelling Canvas Illustrations */}
      {isDesktop && <BackgroundIllustrations />}

      {/* Section Header */}
      <div className="destinations-header-container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="destinations-pill"
          >
            <span className="destinations-pill-dot" />
            OUR DESTINATIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="destinations-heading"
          >
            <span>Collect</span>
            <span className="destinations-gradient-text">Memories</span>
          </motion.h2>
        </div>
      </div>

      {/* Main Luxury Open Journal Container */}
      <div className="passport-container">
        <motion.div 
          className="passport-book"
          animate={hoveredExplore ? { rotateX: 6, rotateY: -6, scale: 1.01 } : { rotateX: 0, rotateY: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Spine stitch lines & curved leather crease */}
          <div className="passport-spine" />

          {/* Underlay Left: Displays Destination 0 Visuals */}
          <div className="journal-underlay journal-underlay-left">
            <div className="journal-page journal-page-back" style={{ transform: 'none', position: 'relative' }}>
              <div className="journal-page-stitching margin-right" />
              <div className="page-paper-stitching" />
              
              <div className="journal-page-grid-layout">
                {/* Header */}
                <div className="journal-header-block">
                  <span className="journal-airport-code muted">{DESTINATIONS_DATA[0].code}</span>
                  <h3 className="journal-destination-name">{DESTINATIONS_DATA[0].name}</h3>
                  <span className="journal-coordinates-handwritten">{DESTINATIONS_DATA[0].coordinates}</span>
                </div>

                {/* Polaroid Visual */}
                <div className="journal-photo-polaroid">
                  <div className="photo-corner top-left" />
                  <div className="photo-corner top-right" />
                  <div className="photo-corner bottom-left" />
                  <div className="photo-corner bottom-right" />
                  <div className="image-viewport">
                    <img src={DESTINATIONS_DATA[0].image} alt={DESTINATIONS_DATA[0].name} className="page-destination-image" />
                  </div>
                </div>

                {/* Hand-drawn travel sketch outline */}
                <div className="journal-sketch-container">
                  <svg viewBox="0 0 120 120" fill="none" stroke="rgba(90, 74, 53, 0.22)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="pencil-sketch-svg">
                    <path d={DESTINATIONS_DATA[0].sketch} />
                  </svg>
                </div>
              </div>

              {/* Satisfying Distress Stamp Ink Press Animation */}
              <DistressedStamp 
                code={DESTINATIONS_DATA[0].code} 
                date={DESTINATIONS_DATA[0].date} 
                active={true}
              />
              <CoffeeRingStain />
            </div>
          </div>

          {/* Underlay Right inside cover lining */}
          <div className="journal-underlay journal-underlay-right">
            <div className="journal-page lining-page-right">
              <div className="lining-text">Collect Memories</div>
            </div>
          </div>
          
          {/* Rotating Sheets */}
          {DESTINATIONS_DATA.map((dest, idx) => {
            const nextDest = idx + 1 < DESTINATIONS_DATA.length ? DESTINATIONS_DATA[idx + 1] : null;

            return (
              <div 
                key={dest.code} 
                ref={el => sheetsRefs.current[idx] = el}
                className="journal-sheet"
                style={{
                  zIndex: DESTINATIONS_DATA.length - idx
                }}
              >
                <div className="journal-page-curl">
                  {/* Front Face: Right page displaying Destination i notes */}
                  <div className="journal-page journal-page-front">
                    <div className="journal-page-stitching margin-left" />
                    <div className="page-paper-stitching" />
                    
                    <div className="journal-page-grid-layout">
                      {/* Ruled lines and travel notes */}
                      <div className="journal-ruled-notes-block" style={{ marginTop: '20px' }}>
                        <span className="journal-date">{dest.date}</span>
                        <div className="ruled-lines-container">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <p className="journal-handwritten-text" style={{ padding: '0 4px', fontSize: '1.18rem', lineHeight: '23px' }}>
                          {dest.notes}
                        </p>
                      </div>

                      {/* Accent quote */}
                      <div style={{ marginTop: '16px', padding: '0 4px' }}>
                        <p className="journal-handwritten-text italic">“{dest.quote}”</p>
                      </div>

                      {/* Explore buttons */}
                      <div className="page-explore-btn-box" style={{ marginTop: 'auto' }}>
                        <a 
                          href="#contact"
                          className="page-explore-link"
                          onMouseEnter={() => setHoveredExplore(true)}
                          onMouseLeave={() => setHoveredExplore(false)}
                        >
                          Explore Destination <span>&rarr;</span>
                        </a>
                      </div>
                    </div>
                    <CreaseOverlay />
                  </div>
                  
                  {/* Back Face: Left page displaying Destination i + 1 visuals */}
                  <div className="journal-page journal-page-back">
                    <div className="journal-page-stitching margin-right" />
                    <div className="page-paper-stitching" />

                    {nextDest ? (
                      <div className="journal-page-grid-layout">
                        {/* Header with coordinates */}
                        <div className="journal-header-block">
                          <span className="journal-airport-code muted">{nextDest.code}</span>
                          <h3 className="journal-destination-name">{nextDest.name}</h3>
                          <span className="journal-coordinates-handwritten">{nextDest.coordinates}</span>
                        </div>

                        {/* Polaroid travel photo */}
                        <div className="journal-photo-polaroid">
                          <div className="photo-corner top-left" />
                          <div className="photo-corner top-right" />
                          <div className="photo-corner bottom-left" />
                          <div className="photo-corner bottom-right" />
                          <div className="image-viewport">
                            <img src={nextDest.image} alt={nextDest.name} className="page-destination-image" />
                          </div>
                        </div>

                        {/* Hand-drawn travel sketch outline */}
                        <div className="journal-sketch-container">
                          <svg viewBox="0 0 120 120" fill="none" stroke="rgba(90, 74, 53, 0.22)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="pencil-sketch-svg">
                            <path d={nextDest.sketch} />
                          </svg>
                        </div>

                        {/* Satisfying Distress Stamp Ink Press Animation */}
                        <DistressedStamp 
                          code={nextDest.code} 
                          date={nextDest.date} 
                          active={idx < activeIndex} // Stamps when the previous page has flipped (revealing nextDest visual on left)
                        />

                        {/* Stains & overlays */}
                        {idx % 3 === 0 && <InkSplatStain />}
                        {idx % 3 === 1 && <CoffeeRingStain />}
                      </div>
                    ) : (
                      <div className="lining-page-left" style={{ height: '100%' }}>
                        <div className="lining-text">Travinno Journal // End</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
