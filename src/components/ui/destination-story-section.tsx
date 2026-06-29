import React, { useEffect, useRef } from 'react';
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

const BASE = import.meta.env.BASE_URL;

const getFlagEmoji = (title: string) => {
  switch (title) {
    case "United Arab Emirates":
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

const destinations: Destination[] = [
  {
    title: "Dubai",
    region: "Middle East",
    countryName: "United Arab Emirates",
    heading: "Modern Skylines & Desert Safaris",
    description: "Experience a world where futuristic glass skyscrapers rise directly from ancient desert sands, curating the ultimate heights of luxury leisure and private safaris.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/dubai.webp`
  },
  {
    title: "Malaysia",
    region: "Southeast Asia",
    countryName: "Malaysia",
    heading: "Vibrant Cultures & Rainforest Escapes",
    description: "Discover a rich tapestry of history, modern capital luxury, and pristine ancient rainforest canopies home to unique biodiversity.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/malaysia.webp`
  },
  {
    title: "Thailand",
    region: "Southeast Asia",
    countryName: "Thailand",
    heading: "Golden Temples & Tropical Islands",
    description: "Immerse yourself in the warm hospitality of golden temple cities and white sand archipelago islands with tailored beachfront luxury.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/thailand.webp`
  },
  {
    title: "Singapore",
    region: "Southeast Asia",
    countryName: "Singapore",
    heading: "Futuristic Gardens & Cosmopolitan Charm",
    description: "Walk through the world's most advanced architectural nature displays, leading Michelin-starred dining, and premium lifestyle ports.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/singapore.webp`
  },
  {
    title: "Bali",
    region: "Southeast Asia",
    countryName: "Bali",
    heading: "Sacred Temples & Pristine Beaches",
    description: "Reconnect in the spiritual capital of volcanic lake vistas, iconic terraced valleys, and private pool luxury villas.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/bali.webp`
  },
  {
    title: "Kenya",
    region: "East Africa",
    countryName: "Kenya",
    heading: "Untamed Wildlife & Savannah Reserves",
    description: "Witness the great wilderness migration on the plains of Masai Mara, pairing raw nature with five-star luxury tented camp reserves.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/kenya.webp`
  },
  {
    title: "Vietnam",
    region: "Southeast Asia",
    countryName: "Vietnam",
    heading: "Historic Cities & Dramatic Karst Bays",
    description: "Cruise the emerald waters of Ha Long Bay and explore French colonial cities, combining rich historic heritage with luxury maritime travel.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/vietnam.webp`
  }
];

export default function DestinationStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx: any;
    let rafId1 = 0;
    let rafId2 = 0;
    let loaderListener: any;

    const initScrollTrigger = () => {
      const container = containerRef.current;
      const viewport = viewportRef.current;
      if (!container || !viewport) return;

      const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
      const textContainers = textContainerRefs.current.filter((t): t is HTMLDivElement => t !== null);
      if (cards.length === 0) return;

      // ─── Visual Viewport Measure Source of Truth ──────────────────────────
      const getVH = () => window.innerHeight;

      ctx = gsap.context(() => {
        const isMobile = window.innerWidth < 1024;

        // Set initial state: Card 0 visible at y:0, others visible but translated offscreen below (y:getVH())
        cards.forEach((card, idx) => {
          gsap.set(card, {
            y: idx === 0 ? 0 : () => getVH(),
            opacity: 1,
            scale: 1,
            visibility: 'visible'
          });
          if (textContainers[idx]) {
            const children = textContainers[idx].querySelectorAll('.story-animate-el');
            if (idx === 0) {
              gsap.set(children, { y: 0, opacity: 1 });
            } else {
              gsap.set(children, { y: 40, opacity: 0 });
            }
          }
        });

        // ─── Unified Timeline & ScrollTrigger ─────────────────────────────
        const transitionDuration = 1.0;
        const holdDuration = 0.2; // Speed up scroll transitions
        const totalDurationPerCard = transitionDuration + holdDuration;
        
        // End calculation based on dynamic layout scale - reduced to 0.6x to make transitions scroll faster
        const scrollDistance = () => getVH() * (cards.length - 1) * 0.6;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${scrollDistance()}`,
            pin: viewport,
            pinSpacing: true,
            scrub: 1.2, // Reduced scrub lag for faster feedback
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });

        // Loop cards to create smooth sequential cinematic card stack transitions
        for (let i = 1; i < cards.length; i++) {
          const startPos = (i - 1) * totalDurationPerCard;
          const yOffset = isMobile ? 24 : 40; // Maintain 8-12% visible margin responsive to screen height

          if (isMobile) {
            // Mobile: Card slides upward and stops at a static stacked offset (i * yOffset)
            // Existing cards 0 to i-1 remain fixed and never move again.
            tl.fromTo(cards[i],
              { y: () => getVH(), scale: 1, opacity: 1 },
              {
                y: i * yOffset,
                scale: 1,
                opacity: 1,
                duration: transitionDuration,
                ease: "power2.inOut"
              },
              startPos
            );
          } else {
            // Desktop: Shift all previously stacked cards upward by yOffset
            for (let j = 0; j < i; j++) {
              const finalY = -(i - j) * yOffset;
              const finalScale = 1 - (i - j) * 0.02;

              tl.to(cards[j], {
                y: finalY,
                scale: finalScale,
                duration: transitionDuration,
                ease: "power2.inOut"
              }, startPos);
            }

            // Incoming card (i) slides to y: 0
            tl.fromTo(cards[i],
              { y: () => getVH(), scale: 1, opacity: 1 },
              {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: transitionDuration,
                ease: "power2.inOut"
              },
              startPos
            );
          }

          if (textContainers[i]) {
            const incomingTexts = textContainers[i].querySelectorAll('.story-animate-el');
            tl.fromTo(incomingTexts,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: transitionDuration * 0.9,
                ease: "power2.out"
              },
              startPos + 0.15
            );
          }

          // Card hold phase before next transition starts
          tl.to({}, { duration: holdDuration });
        }

      }, containerRef);

      // Defer execution until the browser's painting thread stabilizes
      rafId1 = requestAnimationFrame(() => {
        rafId2 = requestAnimationFrame(() => {
          ScrollTrigger.refresh(true);
        });
      });
    };

    const checkAndInit = () => {
      const loader = document.querySelector('.fullscreen-loader');
      if (loader) {
        loaderListener = () => {
          window.removeEventListener('travinnoLoaderComplete', loaderListener);
          if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(initScrollTrigger);
          } else {
            initScrollTrigger();
          }
        };
        window.addEventListener('travinnoLoaderComplete', loaderListener);
      } else {
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(initScrollTrigger);
        } else {
          initScrollTrigger();
        }
      }
    };

    checkAndInit();

    return () => {
      if (loaderListener) {
        window.removeEventListener('travinnoLoaderComplete', loaderListener);
      }
      cancelAnimationFrame(rafId1);
      cancelAnimationFrame(rafId2);
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="destinations-story-section"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'transparent',
        boxSizing: 'border-box'
      }}
    >
      <style>{`
        .destinations-story-viewport {
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100dvh;
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
          height: 72vh;
          max-height: 720px;
          min-height: 520px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }

        .destinations-story-card {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #0B0B0B;
          border: 1px solid #181818;
          border-radius: 32px;
          box-sizing: border-box;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85);
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translate3d(0, 100vh, 0);
          -webkit-mask-image: -webkit-radial-gradient(white, black);
        }

        .destinations-story-card:first-child {
          transform: translate3d(0, 0, 0);
        }

        /* LEFT SIDE (45%) */
        .card-left-panel {
          width: 45%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          padding: 40px 0 40px 48px;
          z-index: 5;
        }

        .left-panel-content {
          max-width: 85%;
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

        .destinations-story-card:hover .destination-img {
          transform: scale(1.03);
        }

        /* Typography & Spacing hierarchy */
        .dest-meta-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 12px;
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
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 2.6vw, 2.8rem);
          font-weight: 500;
          line-height: 1.15;
          color: #F5F2EC;
          margin: 0 0 16px 0;
          letter-spacing: 0.01em;
        }

        .dest-editorial-description {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          line-height: 1.6;
          color: rgba(245, 242, 236, 0.7);
          margin: 0 0 20px 0;
          font-weight: 400;
        }

        /* Feature Pills Styling */
        .dest-feature-pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
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
            padding: 40px 16px 0 16px !important;
          }

          .destinations-heading-container {
            margin-bottom: 20px !important;
          }

          .destinations-story-viewport {
            position: relative;
            width: 100%;
            height: 100vh;
            height: 100dvh;
            overflow: hidden;
            display: flex !important;
            justify-content: center !important;
            align-items: flex-start !important;
            padding-top: 15px !important;
            box-sizing: border-box !important;
          }

          .destinations-cards-container {
            width: 90% !important;
            height: 480px !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            position: relative !important;
            gap: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }

          .destinations-story-card {
            position: absolute !important;
            width: 100% !important;
            height: 100% !important;
            flex-direction: column-reverse !important;
            background: #0B0B0B !important;
            border: 1px solid #181818 !important;
            border-radius: 24px !important;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7) !important;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            -webkit-mask-image: -webkit-radial-gradient(white, black) !important;
          }

          .card-left-panel {
            width: 100% !important;
            height: 62% !important;
            padding: 16px 16px !important;
            justify-content: flex-start !important;
            z-index: 5;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }

          .left-panel-content {
            max-width: 100% !important;
          }

          .card-right-panel {
            width: 100% !important;
            height: 38% !important;
            border-radius: 24px 24px 0 0 !important;
            overflow: hidden !important;
            border: none !important;
          }

          .destination-image-wrapper {
            border-radius: 24px 24px 0 0 !important;
            overflow: hidden !important;
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
            margin-bottom: 6px !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }

          .dest-feature-pills-container {
            margin-bottom: 8px !important;
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

      {/* Immersive Sticky Viewport */}
      <div ref={viewportRef} className="destinations-story-viewport">
        {/* Subtle grid background */}
        <div className="destinations-grid-bg" />

        {/* Floating Stack Container */}
        <div className="destinations-cards-container">
          {destinations.map((dest, idx) => (
            <div
              key={`dest-story-${idx}`}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="destinations-story-card"
              style={{ zIndex: idx + 1 }}
            >
              {/* Left textual storytelling column */}
              <div className="card-left-panel">
                <div
                  ref={(el) => { textContainerRefs.current[idx] = el; }}
                  className="left-panel-content"
                >
                  <div className="story-animate-el dest-meta-container">
                    <span className="dest-region-label">{dest.region}</span>
                    <h4 className="dest-country-heading">
                      <span className="dest-country-name-script">{dest.countryName}</span>
                    </h4>
                  </div>

                  <h3 className="story-animate-el dest-editorial-heading">{dest.heading}</h3>
                  <p className="story-animate-el dest-editorial-description">{dest.description}</p>

                  <div className="story-animate-el dest-feature-pills-container">
                    {dest.highlights.map((highlight, hidx) => (
                      <span key={`high-${hidx}`} className="dest-feature-pill">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="story-animate-el dest-button-container">
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
                    src={dest.image}
                    alt={dest.countryName}
                    loading={idx < 2 ? 'eager' : 'lazy'}
                    className="destination-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
