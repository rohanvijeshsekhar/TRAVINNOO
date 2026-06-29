import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutJourney from '../AboutJourney';
import AboutStats from '../AboutStats';
import AboutPurpose from '../AboutPurpose';

function AboutIntroBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    const bgElement = bgRef.current;
    if (bgElement) {
      gsap.to(bgElement, {
        scrollTrigger: {
          trigger: bgElement.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        yPercent: -12,
        ease: "none"
      });
    }
  }, []);

  return (
    <div 
      ref={bgRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '115%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        backgroundColor: '#000000'
      }}
    >
      <style>{`
        @keyframes pulseRoute {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -40;
          }
        }
        @keyframes blinkPoint {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 0.95; transform: scale(1.2); }
        }
        @keyframes bgStarDrift {
          0% { transform: translateY(0) translateX(0) scale(0.8); opacity: 0.15; }
          50% { transform: translateY(-30px) translateX(15px) scale(1.1); opacity: 0.45; }
          100% { transform: translateY(-60px) translateX(30px) scale(0.8); opacity: 0.15; }
        }
      `}</style>

      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.85 }}
      >
        {/* World map landmass contours */}
        <path 
          d="M 300,200 Q 320,350 400,420 T 480,600 Q 520,700 480,850 Q 550,900 620,800 T 680,600 Q 640,400 750,300 T 680,100 Z" 
          stroke="rgba(245, 242, 236, 0.08)" 
          strokeWidth="1.2" 
          fill="none" 
        />
        <path 
          d="M 750,300 Q 850,200 1000,150 T 1300,100 Q 1450,150 1550,300 T 1600,600 Q 1500,750 1350,700 T 1000,800 Q 900,900 800,850 T 700,750 Z" 
          stroke="rgba(245, 242, 236, 0.08)" 
          strokeWidth="1.2" 
          fill="none" 
        />

        {/* Global contour loops */}
        <circle cx="100" cy="150" r="180" stroke="rgba(245, 242, 236, 0.05)" strokeWidth="0.8" />
        <circle cx="100" cy="150" r="240" stroke="rgba(245, 242, 236, 0.05)" strokeWidth="0.8" />
        <circle cx="100" cy="150" r="300" stroke="rgba(245, 242, 236, 0.05)" strokeWidth="0.8" />

        <circle cx="1800" cy="200" r="220" stroke="rgba(245, 242, 236, 0.05)" strokeWidth="0.8" />
        <circle cx="1800" cy="200" r="300" stroke="rgba(245, 242, 236, 0.05)" strokeWidth="0.8" />
        <circle cx="1800" cy="200" r="380" stroke="rgba(245, 242, 236, 0.05)" strokeWidth="0.8" />

        {/* Travel lines */}
        <path 
          d="M 200,450 Q 550,550 900,820" 
          stroke="rgba(245, 242, 236, 0.1)" 
          strokeWidth="1" 
          fill="none" 
        />
        <path 
          d="M 200,450 Q 900,300 1760,895" 
          stroke="rgba(245, 242, 236, 0.11)" 
          strokeWidth="1" 
          fill="none" 
        />

        {/* Active flight paths */}
        <path 
          d="M 200,450 Q 700,500 1510,580" 
          stroke="rgba(193, 18, 31, 0.48)" 
          strokeWidth="1.2" 
          strokeDasharray="6, 12" 
          fill="none"
          style={{ animation: 'pulseRoute 4s infinite linear' }}
        />
        <path 
          d="M 900,820 Q 1200,750 1760,895" 
          stroke="rgba(193, 18, 31, 0.44)" 
          strokeWidth="1.2" 
          strokeDasharray="6, 12" 
          fill="none"
          style={{ animation: 'pulseRoute 5s infinite linear' }}
        />

        {/* DUBAI SKYLINE */}
        <path 
          d="M 10,1080 L 80,1080 L 80,980 L 95,980 L 95,1080 M 110,1080 L 110,950 L 130,950 L 130,1080 M 140,1080 L 140,890 L 160,890 L 160,1080 M 175,1080 L 175,930 L 195,930 L 195,850 L 205,850 L 205,730 L 212,730 L 212,560 L 215,500 L 218,560 L 218,730 L 225,730 L 225,850 L 235,850 L 235,930 L 255,930 L 255,1080 M 270,1080 L 270,960 L 290,960 L 290,1080 M 310,1080 L 310,1020 L 330,1020 L 330,1080 Z" 
          stroke="rgba(245, 242, 236, 0.18)" 
          strokeWidth="1" 
          fill="none" 
        />
        <circle 
          cx="216.5" 
          cy="500" 
          r="2.5" 
          fill="#C1121F" 
          style={{ animation: 'blinkPoint 1.8s infinite ease-in-out', transformOrigin: '216.5px 500px' }} 
        />

        {/* PETRONAS TOWERS & MBS SINGAPORE */}
        <path 
          d="M 1480,1080 L 1480,820 L 1490,820 L 1490,750 L 1500,750 L 1500,680 L 1508,680 L 1508,580 L 1510,580 L 1510,680 L 1518,680 L 1518,750 L 1528,750 L 1528,820 L 1538,820 L 1538,1080 M 1578,1080 L 1578,820 L 1588,820 L 1588,750 L 1598,750 L 1598,680 L 1606,680 L 1606,580 L 1608,580 L 1608,680 L 1616,680 L 1616,750 L 1626,750 L 1626,820 L 1636,820 L 1636,1080 M 1528,800 L 1578,800 M 1528,790 L 1578,790" 
          stroke="rgba(245, 242, 236, 0.18)" 
          strokeWidth="1" 
          fill="none" 
        />
        <circle cx="1509" cy="580" r="2.5" fill="#C1121F" style={{ animation: 'blinkPoint 2.2s infinite ease-in-out', transformOrigin: '1509px 580px' }} />
        <circle cx="1607" cy="580" r="2.5" fill="#C1121F" style={{ animation: 'blinkPoint 2.2s infinite ease-in-out', transformOrigin: '1607px 580px' }} />

        <path 
          d="M 1680,1080 L 1680,900 L 1715,900 L 1715,1080 M 1740,1080 L 1740,900 L 1775,900 L 1775,1080 M 1800,1080 L 1800,900 L 1835,900 L 1835,1080 M 1660,895 L 1855,895 L 1835,880 L 1680,880 Z" 
          stroke="rgba(245, 242, 236, 0.18)" 
          strokeWidth="1" 
          fill="none" 
        />
        <circle cx="1840" cy="890" r="2" fill="#C1121F" style={{ animation: 'blinkPoint 2.5s infinite ease-in-out', transformOrigin: '1840px 890px' }} />

        {/* Abstract Travel Coordinates */}
        <text x="50" y="80" fill="rgba(245, 242, 236, 0.35)" fontFamily="monospace" fontSize="10" letterSpacing="1">25.2048° N, 55.2708° E</text>
        <text x="50" y="100" fill="rgba(245, 242, 236, 0.35)" fontFamily="monospace" fontSize="10" letterSpacing="1">DXB / INBOUND</text>

        <text x="1650" y="80" fill="rgba(245, 242, 236, 0.35)" fontFamily="monospace" fontSize="10" letterSpacing="1">1.3521° N, 103.8198° E</text>
        <text x="1650" y="100" fill="rgba(245, 242, 236, 0.35)" fontFamily="monospace" fontSize="10" letterSpacing="1">SIN / OUTBOUND</text>
      </svg>

      {/* Particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 1.5 + 1.2;
          const left = `${Math.random() * 95}%`;
          const top = `${Math.random() * 95}%`;
          const duration = `${Math.random() * 12 + 8}s`;
          const delay = `${Math.random() * 5}s`;
          return (
            <div 
              key={i}
              style={{
                position: 'absolute',
                left,
                top,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: 'rgba(245, 242, 236, 0.45)',
                borderRadius: '50%',
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)',
                animation: `bgStarDrift ${duration} infinite ease-in-out`,
                animationDelay: delay
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function ParallaxComponent() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 1.2
        }
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) {
        gsap.killTweensOf(triggerElement);
      }
    };
  }, []);

  return (
    <div className="parallax" ref={parallaxRef}>
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow"></div>
          <div data-parallax-layers className="parallax__layers">
            {/* Background Layer 1 - Unsplash mountain backdrop */}
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
              loading="eager"
              width="800"
              data-parallax-layer="1"
              alt=""
              aria-hidden="true"
              className="parallax__layer-img"
            />
            {/* Midground Layer 2 - Osmo transparent midground hills */}
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp"
              loading="eager"
              width="800"
              data-parallax-layer="2"
              alt=""
              aria-hidden="true"
              className="parallax__layer-img"
            />
            {/* Text Title Layer 3 */}
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title">JOURNEY</h2>
            </div>
            {/* Foreground Layer 4 - Osmo transparent foreground forest */}
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp"
              loading="eager"
              width="800"
              data-parallax-layer="4"
              alt=""
              aria-hidden="true"
              className="parallax__layer-img"
            />
          </div>
          <div className="parallax__fade"></div>
        </div>
      </section>

      {/* Editorial Content under header */}
      <section className="parallax__content">
        <AboutIntroBackground />
        <div style={{
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
          padding: '0 24px',
          color: '#FFFFFF',
          zIndex: 10
        }}>
          <h3 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            marginBottom: '40px',
            lineHeight: 1.2,
            letterSpacing: '-0.02em'
          }}>
            Experience Excellence in Travel with Travinno
          </h3>
          <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginBottom: '48px'
          }}>
            <p style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0
            }}>
              At Travinno, we specialize in crafting high-quality leisure and business travel experiences in the UAE, Thailand, and Kerala. As a Destination Management Company (DMC), we blend local expertise with international standards, curating top attractions, accommodations, and services for tailor-made travel solutions.
            </p>
            <p style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0
            }}>
              Our strength lies in partnerships with clients and a global network of hotels, best attractions, logistics and service providers—ensuring seamless, high-quality experiences. We prioritize individualized care, professionalism, and prompt service, addressing every request with dedication and attention to detail.
            </p>
            <p style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0
            }}>
            </p>
          </div>
        </div>
      </section>
      
      {/* Scroll-Linked Vertical Journey Timeline */}
      <AboutJourney />

      {/* Brand statistics & value proposition section */}
      <AboutStats />

      {/* Editorial Purpose, Mission & Vision section */}
      <AboutPurpose />
    </div>
  );
}
