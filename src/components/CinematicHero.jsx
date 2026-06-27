import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

// Use smaller Unsplash images on mobile — 2400px originals are ~400 KB each
const IS_MOBILE = typeof window !== 'undefined'
  ? window.matchMedia('(hover: none) and (pointer: coarse)').matches
  : false;
const IMG_WIDTH = IS_MOBILE ? 800 : 2400;

const DESTINATIONS = [
  {
    name: 'Dubai',
    duration: 4.0,
    image: `${import.meta.env.BASE_URL}images/hero/uae.webp`,
    // Push-in zoom (scale 1.05 to 1.11, centered)
    effect: { scaleStart: 1.05, scaleEnd: 1.11, xStart: 0, xEnd: 0, yStart: 0, yEnd: 0 }
  },
  {
    name: 'Kenya',
    duration: 3.6,
    image: `${import.meta.env.BASE_URL}images/hero/kenya.webp`,
    // Pull-back zoom (scale 1.11 to 1.05, centered)
    effect: { scaleStart: 1.11, scaleEnd: 1.05, xStart: 0, xEnd: 0, yStart: 0, yEnd: 0 }
  },
  {
    name: 'Thailand',
    duration: 4.2,
    image: `${import.meta.env.BASE_URL}images/hero/thailand.webp`,
    // Horizontal drift (xPercent -3% to +3% to prevent edges leakage under scale 1.10)
    effect: { scaleStart: 1.10, scaleEnd: 1.16, xStart: -3, xEnd: 3, yStart: 0, yEnd: 0 }
  },
  {
    name: 'Malaysia',
    duration: 3.8,
    image: `${import.meta.env.BASE_URL}images/hero/malaysia.webp`,
    // Vertical drift (yPercent -3% to +3% under scale 1.10)
    effect: { scaleStart: 1.10, scaleEnd: 1.16, xStart: 0, xEnd: 0, yStart: -3, yEnd: 3 }
  },
  {
    name: 'Singapore',
    duration: 4.4,
    image: `${import.meta.env.BASE_URL}images/hero/singapore.webp`,
    // Diagonal push (scale 1.08 to 1.14, x -2% to 2%, y -2% to 2%)
    effect: { scaleStart: 1.08, scaleEnd: 1.14, xStart: -2, xEnd: 2, yStart: -2, yEnd: 2 }
  },
  {
    name: 'Vietnam',
    duration: 3.7,
    image: `${import.meta.env.BASE_URL}images/hero/vietnam.webp`,
    // Pull-back horizontal drift (scale 1.14 to 1.08, x 2% to -2%)
    effect: { scaleStart: 1.14, scaleEnd: 1.08, xStart: 2, xEnd: -2, yStart: 0, yEnd: 0 }
  },
  {
    name: 'Bali',
    duration: 5.0,
    image: `${import.meta.env.BASE_URL}images/hero/bali.webp`,
    // Diagonal drift (scale 1.10 static, x -2% to 2%, y 2% to -2%)
    effect: { scaleStart: 1.10, scaleEnd: 1.10, xStart: -2, xEnd: 2, yStart: 2, yEnd: -2 }
  },
  {
    name: 'Dubai Duplicate',
    duration: 1.8, // Duration of the transition block
    image: `${import.meta.env.BASE_URL}images/hero/uae.webp`,
    // First slide start condition at loop wrap (scale starts at 1.05 and ends at scale after 1.8s, which is 1.0686)
    effect: { scaleStart: 1.05, scaleEnd: 1.0686, xStart: 0, xEnd: 0, yStart: 0, yEnd: 0 }
  }
];

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
  const slideRefs = useRef([]);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  const timelineRef = useRef(null);
  const rootRef = useRef(null);

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

  // Preload only the first hero image; lazy-load the remaining ones
  useEffect(() => {
    const firstImageUrl = DESTINATIONS[0].image;
    const imgObj = new Image();
    imgObj.src = firstImageUrl;
    
    const onLoaded = () => {
      setImagesLoaded(true);
    };
    
    imgObj.onload = onLoaded;
    imgObj.onerror = onLoaded;
  }, []);

  // GSAP Coordinated Loop Timeline
  useEffect(() => {
    if (!imagesLoaded) return;

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

    // Slide 0: Dubai (T = 4.0s, movement = 5.8s)
    tl.fromTo(imageRefs.current[0],
      { scale: 1.05, xPercent: 0, yPercent: 0 },
      { scale: 1.11, xPercent: 0, yPercent: 0, duration: 5.8, ease: 'none' },
      0
    );
    // initial entrance fade (duration 1.8s)
    tl.fromTo(slideRefs.current[0], { opacity: 0 }, { opacity: 1, duration: transitionTime, ease: 'power1.inOut' }, 0);
    tl.fromTo(textRefs.current[0], { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.5);
    // text exit at 4.0
    tl.to(textRefs.current[0], { y: -15, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 4.0);
    // instant opacity reset when next slide is fully opaque
    tl.to(slideRefs.current[0], { opacity: 0, duration: 0 }, 5.8);

    // Slide 1: Kenya (T = 3.6s, movement = 5.4s)
    tl.fromTo(imageRefs.current[1],
      { scale: 1.11, xPercent: 0, yPercent: 0 },
      { scale: 1.05, xPercent: 0, yPercent: 0, duration: 5.4, ease: 'none' },
      4.0
    );
    tl.fromTo(slideRefs.current[1], { opacity: 0 }, { opacity: 1, duration: transitionTime, ease: 'power1.inOut' }, 4.0);
    tl.fromTo(textRefs.current[1], { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 4.4);
    // text exit at 7.6
    tl.to(textRefs.current[1], { y: -15, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 7.6);
    tl.to(slideRefs.current[1], { opacity: 0, duration: 0 }, 9.4);

    // Slide 2: Thailand (T = 4.2s, movement = 6.0s)
    tl.fromTo(imageRefs.current[2],
      { scale: 1.10, xPercent: -3, yPercent: 0 },
      { scale: 1.16, xPercent: 3, yPercent: 0, duration: 6.0, ease: 'none' },
      7.6
    );
    tl.fromTo(slideRefs.current[2], { opacity: 0 }, { opacity: 1, duration: transitionTime, ease: 'power1.inOut' }, 7.6);
    tl.fromTo(textRefs.current[2], { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 8.0);
    // text exit at 11.8
    tl.to(textRefs.current[2], { y: -15, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 11.8);
    tl.to(slideRefs.current[2], { opacity: 0, duration: 0 }, 13.6);

    // Slide 3: Malaysia (T = 3.8s, movement = 5.6s)
    tl.fromTo(imageRefs.current[3],
      { scale: 1.10, xPercent: 0, yPercent: -3 },
      { scale: 1.16, xPercent: 0, yPercent: 3, duration: 5.6, ease: 'none' },
      11.8
    );
    tl.fromTo(slideRefs.current[3], { opacity: 0 }, { opacity: 1, duration: transitionTime, ease: 'power1.inOut' }, 11.8);
    tl.fromTo(textRefs.current[3], { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 12.2);
    // text exit at 15.6
    tl.to(textRefs.current[3], { y: -15, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 15.6);
    tl.to(slideRefs.current[3], { opacity: 0, duration: 0 }, 17.4);

    // Slide 4: Singapore (T = 4.4s, movement = 6.2s)
    tl.fromTo(imageRefs.current[4],
      { scale: 1.08, xPercent: -2, yPercent: -2 },
      { scale: 1.14, xPercent: 2, yPercent: 2, duration: 6.2, ease: 'none' },
      15.6
    );
    tl.fromTo(slideRefs.current[4], { opacity: 0 }, { opacity: 1, duration: transitionTime, ease: 'power1.inOut' }, 15.6);
    tl.fromTo(textRefs.current[4], { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 16.0);
    // text exit at 20.0
    tl.to(textRefs.current[4], { y: -15, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 20.0);
    tl.to(slideRefs.current[4], { opacity: 0, duration: 0 }, 21.8);

    // Slide 5: Vietnam (T = 3.7s, movement = 5.5s)
    tl.fromTo(imageRefs.current[5],
      { scale: 1.14, xPercent: 2, yPercent: 0 },
      { scale: 1.08, xPercent: -2, yPercent: 0, duration: 5.5, ease: 'none' },
      20.0
    );
    tl.fromTo(slideRefs.current[5], { opacity: 0 }, { opacity: 1, duration: transitionTime, ease: 'power1.inOut' }, 20.0);
    tl.fromTo(textRefs.current[5], { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 20.4);
    // text exit at 23.7
    tl.to(textRefs.current[5], { y: -15, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 23.7);
    tl.to(slideRefs.current[5], { opacity: 0, duration: 0 }, 25.5);

    // Slide 6: Bali (T = 5.0s, movement = 6.8s)
    tl.fromTo(imageRefs.current[6],
      { scale: 1.10, xPercent: -2, yPercent: 2 },
      { scale: 1.10, xPercent: 2, yPercent: -2, duration: 6.8, ease: 'none' },
      23.7
    );
    tl.fromTo(slideRefs.current[6], { opacity: 0 }, { opacity: 1, duration: transitionTime, ease: 'power1.inOut' }, 23.7);
    tl.fromTo(textRefs.current[6], { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 24.1);
    // text exit at 28.7
    tl.to(textRefs.current[6], { y: -15, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 28.7);
    tl.to(slideRefs.current[6], { opacity: 0, duration: 0 }, 30.5);

    // Slide 7: Dubai Duplicate (Fade-in transition over 1.8s)
    tl.fromTo(imageRefs.current[7],
      { scale: 1.05, xPercent: 0, yPercent: 0 },
      { scale: 1.0686, xPercent: 0, yPercent: 0, duration: 1.8, ease: 'none' },
      28.7
    );
    tl.fromTo(slideRefs.current[7], { opacity: 0 }, { opacity: 1, duration: transitionTime, ease: 'power1.inOut' }, 28.7);
    tl.fromTo(textRefs.current[7], { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 29.1);

    timelineRef.current = tl;

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [imagesLoaded]);

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
        DESTINATIONS.map((dest, idx) => (
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
              src={dest.image}
              alt={getDestinationAltText(dest.name)}
              loading={idx === 0 ? "eager" : "lazy"}
              {...(idx === 0 ? { fetchpriority: "high" } : { decoding: "async" })}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transformOrigin: 'center center',
                willChange: 'transform',
                // Cinematic colour grading treatment: slightly increased contrast, slightly reduced saturation
                // Skip multi-property filter on mobile — 8 simultaneous GPU texture blits
                filter: IS_MOBILE ? 'none' : 'contrast(1.08) saturate(0.88)'
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
            DESTINATIONS.map((dest, idx) => (
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
                {dest.name === 'Dubai Duplicate' ? 'Dubai' : dest.name}
              </span>
            ))}
        </div>

        {/* Fixed Explore CTA Outline Button */}
        <div style={{ pointerEvents: 'auto' }}>
          <a
            href="#destinations"
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
          </a>
        </div>
      </div>
    </div>
  );
}
