import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Destination {
  title: string;       // Destination Name (e.g. Dubai, Malaysia...)
  region: string;      // Region (e.g. Middle East, Southeast Asia...)
  countryName: string; // Bold Country Name (e.g. United Arab Emirates, Malaysia...)
  heading: string;     // Large Editorial Heading
  description: string; // Short Description
  highlights: string[];// Feature Pills
  image: string;       // Image URL
}

const destinations: Destination[] = [
  {
    title: "Dubai",
    region: "Middle East",
    countryName: "United Arab Emirates",
    heading: "Modern Skylines & Desert Safaris",
    description: "Experience a world where futuristic glass skyscrapers rise directly from ancient desert sands, curating the ultimate heights of luxury leisure and private safaris.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Malaysia",
    region: "Southeast Asia",
    countryName: "Malaysia",
    heading: "Vibrant Cultures & Rainforest Escapes",
    description: "Discover a rich tapestry of history, modern capital luxury, and pristine ancient rainforest canopies home to unique biodiversity.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Thailand",
    region: "Southeast Asia",
    countryName: "Thailand",
    heading: "Golden Temples & Tropical Islands",
    description: "Immerse yourself in the warm hospitality of golden temple cities and white sand archipelago islands with tailored beachfront luxury.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Singapore",
    region: "Southeast Asia",
    countryName: "Singapore",
    heading: "Futuristic Gardens & Cosmopolitan Charm",
    description: "Walk through the world's most advanced architectural nature displays, leading Michelin-starred dining, and premium lifestyle ports.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Bali",
    region: "Southeast Asia",
    countryName: "Bali",
    heading: "Sacred Temples & Pristine Beaches",
    description: "Reconnect in the spiritual capital of volcanic lake vistas, iconic terraced valleys, and private pool luxury villas.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Kenya",
    region: "East Africa",
    countryName: "Kenya",
    heading: "Untamed Wildlife & Savannah Reserves",
    description: "Witness the great wilderness migration on the plains of Masai Mara, pairing raw nature with five-star luxury tented camp reserves.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Vietnam",
    region: "Southeast Asia",
    countryName: "Vietnam",
    heading: "Historic Cities & Dramatic Karst Bays",
    description: "Cruise the emerald waters of Ha Long Bay and explore French colonial cities, combining rich historic heritage with luxury maritime travel.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop"
  }
];

const getFlag = (title: string) => {
  switch (title) {
    case "Dubai": return "🇦🇪";
    case "Malaysia": return "🇲🇾";
    case "Thailand": return "🇹🇭";
    case "Singapore": return "🇸🇬";
    case "Bali": return "🇮🇩";
    case "Kenya": return "🇰🇪";
    case "Vietnam": return "🇻🇳";
    default: return "";
  }
};

const getDestinationAltText = (title: string) => {
  const mapping: Record<string, string> = {
    'Dubai': 'Luxury travel in Dubai with Travinno Trusted DMC',
    'Kenya': 'Kenya safari destination managed by Travinno Trusted DMC',
    'Thailand': 'Premium Thailand holiday experiences by Travinno Trusted DMC',
    'Vietnam': 'Bespoke Vietnam tours and luxury cruises with Travinno Trusted DMC',
    'Singapore': 'Singapore destination management services by Travinno Trusted DMC',
    'Malaysia': 'Destination management services in Malaysia with Travinno Trusted DMC',
    'Bali': 'Luxury holidays in Bali by Travinno Trusted DMC'
  };
  return mapping[title] || `Premium travel experiences in ${title} by Travinno Trusted DMC`;
};

export default function InteractiveSelector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const currentActiveRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Preload all destination images on mount to prevent layout/network lag during scrolling
  useEffect(() => {
    destinations.forEach((dest) => {
      const img = new Image();
      img.src = dest.image;
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const cards = cardRefs.current;

    // Set up GSAP context for proper lifecycle cleanup in React
    const ctx = gsap.context(() => {
      // Reset initial card styles programmatically
      cards.forEach((card, idx) => {
        if (!card) return;
        if (idx === 0) {
          gsap.set(card, { y: "0px", opacity: 1, scale: 1 });
        } else {
          gsap.set(card, { y: "100vh", opacity: 1, scale: 1 });
        }
      });

      // Define timeline bound directly to ScrollTrigger scrub (Apple-grade smoothness)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=1400vh", // Increased container height for longer scroll distance
          pin: true,
          anticipatePin: 1, // Smooths pinning on touch/mobile devices
          scrub: 1.5, // Slower catch-up delay for smooth, steady, and unhurried transition
          invalidateOnRefresh: true, // Recalculate on refresh
          onUpdate: (self) => {
            const progress = self.progress;
            const t = progress * 5.0; // Mapped to the total timeline transitions
            
            // Determine active index based on timeline boundary thresholds
            let activeIdx = 0;
            if (t < 0.5) activeIdx = 0;
            else if (t < 1.3) activeIdx = 1;
            else if (t < 2.1) activeIdx = 2;
            else if (t < 2.9) activeIdx = 3;
            else if (t < 3.7) activeIdx = 4;
            else if (t < 4.5) activeIdx = 5;
            else activeIdx = 6;

            // React State Gating: ONLY trigger state updates when active card index changes (6 times total)
            if (activeIdx !== currentActiveRef.current) {
              currentActiveRef.current = activeIdx;
              setActiveIndex(activeIdx);
            }
          }
        }
      });

      // Overlapping transitions (step = 0.8, duration = 1.0)
      const transitionDuration = 1.0;
      const step = 0.8;
      const checkMobile = window.innerWidth < 1024;

      for (let i = 1; i < 7; i++) {
        const startPos = (i - 1) * step;

        // 1. Outgoing Card (i-1) - moves up slightly, scales down slightly
        if (cards[i - 1]) {
          if (checkMobile) {
            // Keep the outgoing card fully visible and stationary on mobile (prevents rushing/flashing)
            tl.to(cards[i - 1], {
              opacity: 1,
              duration: transitionDuration,
            }, startPos);
          } else {
            tl.to(cards[i - 1], {
              y: "-30px",
              scale: 0.97,
              duration: transitionDuration,
              ease: "power1.inOut"
            }, startPos);
          }
        }

        // 2. Incoming Card (i) - slides up to 0px
        if (cards[i]) {
          tl.fromTo(cards[i],
            { y: "100vh", scale: 1 },
            { 
              y: "0px", 
              scale: 1, 
              duration: transitionDuration, 
              ease: "power1.inOut",
              force3D: true // Promote layer to GPU compositor
            },
            startPos
          );
        }
      }
    }, containerRef);

    // Refresh ScrollTrigger to ensure position parameters are exact
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert(); // Reverts timelines and kills ScrollTriggers
      currentActiveRef.current = 0;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="destinations-stack-section"
      style={{
        position: 'relative',
        height: '100vh', // Clean 100vh height for pinning
        backgroundColor: 'transparent',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <style>{`
        .destinations-sticky-viewport {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          padding: 0;
        }

        .destinations-grid-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
          mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 95%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 95%);
        }

        .destinations-cards-container {
          position: relative;
          width: 92%;
          height: 72vh; /* Reduced height by 15-20% for a wider cinematic feel */
          max-height: 720px;
          min-height: 520px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }

        /* Redesigned Card Styling matching the editorial reference */
        .destination-card {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #050505;
          border: 1px solid #181818;
          border-radius: 32px; /* Rounded corners: 32px */
          box-sizing: border-box;
          padding: 0; /* Removed overall padding so image can touch edges */
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden; /* Clip image corners automatically */
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          transform-style: preserve-3d;
        }

        /* LEFT SIDE (45%) */
        .card-left-panel {
          width: 45%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          padding: 40px 0 40px 48px; /* Reduced vertical padding */
          z-index: 5;
        }

        .left-panel-content {
          max-width: 85%; /* Content width limited to 85% */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* RIGHT SIDE (55%) */
        .card-right-panel {
          width: 55%;
          height: 100%;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          z-index: 2;
        }

        .destination-image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .destination-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 1;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Subtle image hover zoom */
        .destination-card:hover .destination-img {
          transform: scale(1.03);
        }

        /* Typography & Spacing hierarchy */
        .dest-number-label {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px; /* Tighter layout spacing */
        }

        .dest-number-label .red-accent {
          color: #C1121F;
          font-weight: 700;
        }

        .dest-meta-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 12px; /* Tighter layout spacing */
        }

        .dest-region-label {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .dest-country-heading {
          margin: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          line-height: 1;
        }

        .dest-country-name-script {
          font-family: 'Allura', cursive;
          background: linear-gradient(to bottom, #F5F2EC 20%, #E8A7A7 60%, #C1121F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          font-size: 2.2rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          line-height: 1;
          text-transform: none;
        }

        .dest-flag-span {
          font-size: 1.5rem;
          vertical-align: middle;
        }

        .dest-editorial-heading {
          font-family: var(--font-heading); /* Canela */
          font-size: clamp(2rem, 2.8vw, 3rem); /* Slightly smaller for cinematic ratio */
          font-weight: 500;
          line-height: 1.15;
          color: #F5F2EC;
          margin: 0 0 16px 0; /* Tighter layout spacing */
          letter-spacing: 0.01em;
        }

        .dest-editorial-description {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          line-height: 1.6;
          color: rgba(245, 242, 236, 0.7);
          margin: 0 0 20px 0; /* Tighter layout spacing */
          font-weight: 400;
        }

        /* Feature Pills Styling */
        .dest-feature-pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px; /* Tighter layout spacing */
        }

        .dest-feature-pill {
          display: inline-block;
          padding: 6px 14px;
          border: 1px solid #1c1c1c;
          background-color: #0d0d0d;
          color: rgba(245, 242, 236, 0.8);
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 500;
          border-radius: 100px;
          cursor: default;
          transition: border-color 0.25s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .dest-feature-pill:hover {
          border-color: #C1121F;
        }

        /* Explore Button Styling */
        .dest-button-container {
          display: flex;
        }

        .dest-explore-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border: 1px solid #282828;
          background-color: #000000;
          color: #F5F2EC;
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 100px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .dest-explore-button .btn-arrow {
          transition: transform 0.3s ease;
        }

        .dest-explore-button:hover {
          border-color: #C1121F;
          box-shadow: 0 0 15px rgba(193, 18, 31, 0.25);
          color: #FFFFFF;
        }

        .dest-explore-button:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Responsive Mobile Layout (Tablet and Mobile stack) */
        @media (max-width: 1023px) {
          .destinations-section {
            padding-top: 40px !important;
          }

          .destinations-stack-section {
            height: 100vh !important;
            height: 100dvh !important;
            padding: 0 !important;
          }

          .destinations-sticky-viewport {
            position: absolute !important;
            height: 100% !important;
            overflow: hidden !important;
            display: flex !important;
            justify-content: center !important;
            align-items: flex-start !important;
            padding-top: 96px !important;
            box-sizing: border-box !important;
          }

          .destinations-cards-container {
            width: 90% !important;
            height: 75vh !important;
            height: 75dvh !important;
            max-height: 640px !important;
            min-height: 480px !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            position: relative !important;
            gap: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }

          .destination-card {
            position: absolute !important;
            width: 100% !important;
            height: 100% !important;
            flex-direction: column-reverse !important;
            border-radius: 24px !important;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7) !important;
            will-change: transform, opacity;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            transform: translate3d(0, 0, 0);
            transform-style: preserve-3d;
          }

          .card-left-panel {
            width: 100% !important;
            height: 60% !important;
            padding: 24px 20px !important;
            justify-content: flex-start !important;
            z-index: 5;
          }

          .left-panel-content {
            max-width: 100% !important;
          }

          .card-right-panel {
            width: 100% !important;
            height: 40% !important;
            border-radius: 0;
          }

          .destination-image-wrapper {
            border-radius: 0;
          }

          .dest-editorial-heading {
            font-size: 1.35rem !important;
            margin-bottom: 8px !important;
            line-height: 1.2 !important;
          }

          .dest-country-heading {
            font-size: 1.25rem !important;
          }

          .dest-country-name-script {
            font-size: 1.75rem !important;
          }

          .dest-editorial-description {
            font-size: 0.82rem !important;
            line-height: 1.45 !important;
            margin-bottom: 8px !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }

          .dest-feature-pills-container {
            margin-bottom: 12px !important;
            gap: 6px !important;
          }

          .dest-feature-pill {
            padding: 4px 10px !important;
            font-size: 0.65rem !important;
          }

          .dest-explore-button {
            padding: 8px 20px !important;
            font-size: 0.72rem !important;
          }
          
          .dest-number-label {
            margin-bottom: 6px !important;
          }
          
          .dest-meta-container {
            margin-bottom: 6px !important;
            gap: 4px !important;
          }
        }
      `}</style>

      {/* Sticky view box */}
      <div className="destinations-sticky-viewport">
        {/* Subtle grid background */}
        <div className="destinations-grid-bg" />

        {/* Floating Stack Container */}
        <div className="destinations-cards-container">
          {destinations.map((dest, idx) => {
            return (
              <div
                key={`dest-card-${idx}`}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="destination-card"
                style={{
                  zIndex: idx + 1
                }}
              >
                {/* Left textual storytelling column */}
                <div className="card-left-panel">
                  <div className="left-panel-content">
                    <div className="dest-meta-container">
                      <span className="dest-region-label">{dest.region}</span>
                      <h4 className="dest-country-heading">
                        <span className="dest-country-name-script">{dest.countryName}</span>
                      </h4>
                    </div>

                    <h3 className="dest-editorial-heading">{dest.heading}</h3>
                    <p className="dest-editorial-description">{dest.description}</p>

                    <div className="dest-feature-pills-container">
                      {dest.highlights.map((highlight, hidx) => (
                        <span key={`high-${hidx}`} className="dest-feature-pill">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="dest-button-container">
                      <a href="#contact" className="dest-explore-button">
                        Explore Destination <span className="btn-arrow">→</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right photographic cinematic column */}
                <div className="card-right-panel">
                  <div className="destination-image-wrapper">
                    <img
                      ref={(el) => { imageRefs.current[idx] = el; }}
                      src={dest.image}
                      alt={getDestinationAltText(dest.title)}
                      className="destination-img"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
