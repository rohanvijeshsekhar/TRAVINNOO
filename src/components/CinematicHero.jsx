"use client";

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { db } from '../lib/db';
import Link from 'next/link';

// Use smaller Unsplash images on mobile — 2400px originals are ~400 KB each
const IS_MOBILE = typeof window !== 'undefined'
  ? window.matchMedia('(hover: none) and (pointer: coarse)').matches
  : false;
const IMG_WIDTH = IS_MOBILE ? 800 : 2400;

const getDestinationAltText = (name) => {
  const cleanName = name.replace(' Duplicate', '');
  const mapping = {
    'Dubai': 'Luxury travel in Dubai with Travinno Trusted DMC',
    'Kenya': 'Kenya safari destination managed by Travinno Trusted DMC',
    'Thailand': 'Premium Thailand holiday experiences by Travinno Trusted DMC',
    'Vietnam': 'Bespoke Vietnam tours and luxury cruises with Travinno Trusted DMC',
    'Singapore': 'Singapore destination management services by Travinno Trusted DMC',
    'Malaysia': 'Destination management services in Malaysia with Travinno Trusted DMC',
    'Bali': 'Luxury holidays in Bali by Travinno Trusted DMC'
  };
  return mapping[cleanName] || `Premium travel experiences in ${cleanName} by Travinno Trusted DMC`;
};

export default function CinematicHero() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [destinations, setDestinations] = useState(() => {
    const slides = db.getHeroSlides();
    if (slides.length > 0) {
      const loopSlide = {
        ...slides[0],
        name: `${slides[0].name} Duplicate`,
        duration: 1.8,
        effect: { scaleStart: 1.05, scaleEnd: 1.0686, xStart: 0, xEnd: 0, yStart: 0, yEnd: 0 }
      };
      return [...slides, loopSlide];
    }
    return [];
  });
  const [isMobileView, setIsMobileView] = useState(false);
  
  const slideRefs = useRef([]);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  const timelineRef = useRef(null);
  const rootRef = useRef(null);

  const resolveImgPath = (src) => {
    if (!src) return '';
    if (src.startsWith('data:') || src.startsWith('http')) return src;
    const clean = src.startsWith('/') ? src.slice(1) : src;
    return `/demo/${clean}`;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleUpdate = () => {
      const updated = db.getHeroSlides();
      if (updated.length > 0) {
        const loopSlide = {
          ...updated[0],
          name: `${updated[0].name} Duplicate`,
          duration: 1.8,
          effect: { scaleStart: 1.05, scaleEnd: 1.0686, xStart: 0, xEnd: 0, yStart: 0, yEnd: 0 }
        };
        setDestinations([...updated, loopSlide]);
      }
    };
    window.addEventListener('travinno-db-update', handleUpdate);
    return () => window.removeEventListener('travinno-db-update', handleUpdate);
  }, []);

  // Pause timeline when off-screen to save CPU/GPU resources
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !imagesLoaded) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (timelineRef.current) {
          if (entry.isIntersecting) {
            timelineRef.current.play();
          } else {
            timelineRef.current.pause();
          }
        }
      },
      { threshold: 0.05 }
    );
    
    observer.observe(el);
    return () => observer.disconnect();
  }, [imagesLoaded]);

  // Setup DOM arrays
  slideRefs.current = [];
  imageRefs.current = [];
  textRefs.current = [];

  const addToSlideRefs = (el) => { if (el && !slideRefs.current.includes(el)) slideRefs.current.push(el); };
  const addToImageRefs = (el) => { if (el && !imageRefs.current.includes(el)) imageRefs.current.push(el); };
  const addToTextRefs = (el) => { if (el && !textRefs.current.includes(el)) textRefs.current.push(el); };

  // Preload the first hero image; reset imagesLoaded whenever source changes so GSAP rebuilds
  useEffect(() => {
    if (destinations.length === 0) return;

    // Reset so GSAP timeline rebuilds with correct image (desktop vs mobile)
    setImagesLoaded(false);

    const firstSlide = destinations[0];
    const firstImageUrl = resolveImgPath(
      isMobileView
        ? (firstSlide.mobileImage || firstSlide.desktopImage)
        : (firstSlide.desktopImage || firstSlide.mobileImage)
    );
    const imgObj = new window.Image();
    imgObj.src = firstImageUrl;

    const onLoaded = () => setImagesLoaded(true);
    imgObj.onload = onLoaded;
    imgObj.onerror = onLoaded;
  }, [destinations, isMobileView]);

  // GSAP Coordinated Loop Timeline
  useEffect(() => {
    if (!imagesLoaded || destinations.length === 0) return;

    // Reset slide and text elements initially
    gsap.set(slideRefs.current, { opacity: 0 });
    gsap.set(textRefs.current, { opacity: 0, y: 15 });

    // Slide 0 and text 0 visible initially
    gsap.set(slideRefs.current[0], { opacity: 1 });
    gsap.set(textRefs.current[0], { opacity: 1, y: 0 });

    const tl = gsap.timeline({
      repeat: -1,
      onComplete: () => {
        // Loop back seamlessly to Slide 0's post-transition state (t = 1.8s)
        tl.play(1.8);
      }
    });

    const transitionTime = 1.8; // Coexist dissolves for 1.8s
    let currentTime = 0;

    destinations.forEach((dest, idx) => {
      const isLast = idx === destinations.length - 1;
      const duration = dest.duration || 4.0;
      const movementDuration = duration + transitionTime; // overlap duration

      const effect = dest.effect || { scaleStart: 1.05, scaleEnd: 1.11, xStart: 0, xEnd: 0, yStart: 0, yEnd: 0 };

      // If slide has no translation movement (e.g. Dubai, Kenya which relied on zoom-only),
      // assign a subtle diagonal drift so they still feel alive like the other slides.
      const hasTranslation = (effect.xStart !== effect.xEnd) || (effect.yStart !== effect.yEnd);
      const panXStart = hasTranslation ? effect.xStart : -2;
      const panXEnd   = hasTranslation ? effect.xEnd   :  2;
      const panYStart = hasTranslation ? effect.yStart : -1;
      const panYEnd   = hasTranslation ? effect.yEnd   :  1;

      // Keep scale constant — compute the minimum to avoid revealing container edges during pan.
      const maxX = Math.max(Math.abs(panXStart), Math.abs(panXEnd));
      const maxY = Math.max(Math.abs(panYStart), Math.abs(panYEnd));
      const constantScale = 1 + 2 * (Math.max(maxX, maxY) / 100);

      // Set up image movement timeline with constant scale
      tl.fromTo(imageRefs.current[idx],
        { 
          scale: constantScale, 
          xPercent: panXStart, 
          yPercent: panYStart 
        },
        { 
          scale: constantScale, 
          xPercent: panXEnd, 
          yPercent: panYEnd, 
          duration: isLast ? transitionTime : movementDuration, 
          ease: 'none' 
        },
        currentTime
      );

      // Slide opacity dissolve
      tl.fromTo(slideRefs.current[idx], 
        { opacity: 0 }, 
        { opacity: 1, duration: transitionTime, ease: 'power1.inOut' }, 
        currentTime
      );

      // Slide Text title animation (do not animate text on the duplicate wrapping slide)
      if (!isLast) {
        tl.fromTo(textRefs.current[idx], 
          { y: 15, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 
          currentTime + 0.4
        );
        tl.to(textRefs.current[idx], 
          { y: -15, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 
          currentTime + duration
        );
      }

      // Hide slide when next transition finishes
      if (!isLast) {
        tl.to(slideRefs.current[idx], { opacity: 0, duration: 0 }, currentTime + movementDuration);
      }

      currentTime += duration;
    });

    timelineRef.current = tl;

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [imagesLoaded, destinations]);

  return (
    <div
      ref={rootRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#050505',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {/* Background Images Layers (Living Photographs) */}
      {imagesLoaded &&
        destinations.map((dest, idx) => (
          <div
            key={`${dest.name}-${idx}`}
            ref={addToSlideRefs}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: idx === 0 ? 1 : 0,
              zIndex: 1,
              overflow: 'hidden'
            }}
          >
            <img
              ref={addToImageRefs}
              src={resolveImgPath(isMobileView ? (dest.mobileImage || dest.desktopImage) : (dest.desktopImage || dest.mobileImage))}
              alt={getDestinationAltText(dest.name)}
              loading={idx === 0 ? "eager" : "lazy"}
              {...(idx === 0 ? { fetchPriority: "high" } : { decoding: "async" })}
              width="1920"
              height="1080"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transformOrigin: 'center center',
                willChange: 'transform'
              }}
            />
          </div>
        ))}

      {/* Centered Editorial Overlay Content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '90%',
          maxWidth: '1200px'
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.35rem, 4.0vw, 2.9rem)',
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#F5F2EC',
            margin: '0 0 16px 0',
            lineHeight: 1.2,
            textShadow: '0 2px 14px rgba(0, 0, 0, 0.45)',
            whiteSpace: 'nowrap'
          }}
        >
          Curators Of Extraordinary Journeys
        </h1>

        {/* Transitioning Active Destination name */}
        <div
          style={{
            position: 'relative',
            height: '40px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 0 35px 0'
          }}
        >
          {imagesLoaded &&
            destinations.map((dest, idx) => (
              <span
                key={`text-${dest.name}-${idx}`}
                ref={addToTextRefs}
                style={{
                  position: 'absolute',
                  fontFamily: "'General Sans', 'Inter', sans-serif",
                  fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
                  fontWeight: 500,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: '#F5F2EC',
                  opacity: idx === 0 ? 1 : 0,
                  transform: idx === 0 ? 'translateY(0px)' : 'translateY(15px)',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
                }}
              >
                {dest.name.endsWith(' Duplicate') ? dest.name.replace(' Duplicate', '') : dest.name}
              </span>
            ))}
        </div>

        {/* Fixed Explore CTA Outline Button */}
        <div style={{ pointerEvents: 'auto' }}>
          <Link
            href="/destinations"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '2.2px',
              textTransform: 'uppercase',
              color: '#F5F2EC',
              background: 'transparent',
              border: '1px solid #F5F2EC',
              padding: '16px 36px',
              borderRadius: '0px',
              textDecoration: 'none',
              transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F5F2EC';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#F5F2EC';
            }}
          >
            Explore Destinations &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
