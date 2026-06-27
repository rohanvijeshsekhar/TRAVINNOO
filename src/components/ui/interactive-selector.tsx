import React, { useLayoutEffect, useRef } from 'react';
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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
    if (cards.length === 0) return;

    // ─── iOS WebKit Fix 1 ───────────────────────────────────────────────────
    // Strip will-change and hardware-acceleration hints from every card.
    // On WebKit, will-change:transform causes the browser to promote elements
    // into independent compositing layers BEFORE GSAP pins the container.
    // When ScrollTrigger then sets position:fixed on the container, the
    // pre-promoted card layers do not re-composite correctly, producing the
    // "cards appear early" and "blank space" symptoms on real iPhones.
    // Removing these hints lets GSAP own the compositing lifecycle entirely.
    cards.forEach(card => {
      card.style.willChange = 'auto';
      card.style.transform = 'none';
      // Note: CSS transform-style:preserve-3d stays in the stylesheet but is
      // overridden here at runtime only on the element-level style.
    });

    // ─── iOS WebKit Fix 2 ───────────────────────────────────────────────────
    // Measure the VISUAL viewport in pixels.
    // On iOS Safari, CSS 1vh = layout viewport height (includes the address
    // bar chrome ~80px). window.innerHeight = VISUAL viewport (excludes it).
    // GSAP's scroll calculations use window.innerHeight internally, so every
    // distance we pass to GSAP must also use window.innerHeight — never "vh".
    const getVH = () => window.innerHeight;

    const ctx = gsap.context(() => {
      // Set initial positions using measured pixels, not "100vh" strings.
      // "100vh" on iOS Safari ≠ window.innerHeight, causing cards starting
      // below the visible screen to actually start INSIDE it.
      cards.forEach((card, idx) => {
        gsap.set(card, {
          y: idx === 0 ? 0 : () => getVH(),   // function form: re-evaluated on invalidateOnRefresh
          opacity: 1,
          scale: 1,
          force3D: true
        });
      });

      // ─── iOS WebKit Fix 3 ─────────────────────────────────────────────────
      // Pixel-based end calculation.
      // Original: end: "+=1400vh" — on iOS this resolved to 1400 * cssVH which
      // is 1400 * (layout viewport height) instead of 1400 * window.innerHeight.
      // Because iOS layout vh > visual vh, the ScrollTrigger "end" was computed
      // to be further than it should be, causing the pin to hold for too long
      // and producing the blank space at the bottom.
      //
      // New approach: calculate the exact scroll distance needed to transition
      // through every card at a fixed "200% of viewport" per transition, which
      // matches what the timeline duration/step ratio produces visually.
      // The function form means invalidateOnRefresh re-runs this on resize.
      const transitionDuration = 1.0;
      const step = 0.8;
      const holdBuffer = 0.8;   // matches tl.to({}, { duration: 0.8 }) at end
      const totalTimelineUnits = (cards.length - 1) * step + transitionDuration + holdBuffer;
      // scrollPixelsPerTimelineUnit: how many scroll pixels correspond to 1
      // unit of timeline time. We want each card transition to feel like
      // scrolling ~200px at scrub:1.5, matching original 1400vh/7cards feel
      // but computed from the measured visual viewport.
      const SCROLL_PER_UNIT = () => getVH() * 1.4;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          // Function form: recalculated by invalidateOnRefresh on every resize
          // or iOS orientation change. Avoids stale vh-based measurements.
          end: () => `+=${totalTimelineUnits * SCROLL_PER_UNIT()}`,
          pin: true,
          pinSpacing: true,
          // anticipatePin removed: on iOS native momentum scroll, anticipatePin
          // fires based on scroll velocity prediction which is unreliable with
          // WebKit's rubber-band physics, causing early pin engagement.
          scrub: 1.5,
          invalidateOnRefresh: true   // re-runs end() and all gsap.set() on resize
        }
      });

      const isMobile = window.innerWidth < 1024;

      for (let i = 1; i < cards.length; i++) {
        const startPos = (i - 1) * step;

        if (isMobile) {
          tl.to(cards[i - 1], {
            opacity: 1,
            duration: transitionDuration
          }, startPos);
        } else {
          tl.to(cards[i - 1], {
            y: -30,
            scale: 0.97,
            duration: transitionDuration,
            ease: 'power1.inOut'
          }, startPos);
        }

        // ─── iOS WebKit Fix 4 ─────────────────────────────────────────────
        // Replace fromTo "100vh" with function returning window.innerHeight px.
        // The fromTo from-value is re-evaluated by invalidateOnRefresh because
        // we use a function. On a vh string, invalidateOnRefresh cannot
        // recalculate it — the stale string is reused, which is why rotating
        // an iPhone and refreshing breaks the slide-in distance.
        tl.fromTo(cards[i],
          { y: () => getVH(), scale: 1 },
          {
            y: 0,
            scale: 1,
            duration: transitionDuration,
            ease: 'power1.inOut',
            force3D: true
          },
          startPos
        );
      }

      // Final hold buffer so Vietnam card stays visible before unpinning
      tl.to({}, { duration: holdBuffer });

    }, containerRef);

    // ─── iOS WebKit Fix 5 ───────────────────────────────────────────────────
    // Double requestAnimationFrame before ScrollTrigger.refresh().
    // On iOS Safari, a single rAF fires after DOM commit but before the
    // browser's rendering pipeline (compositing + GPU upload) completes.
    // Images may still be decoding their first frames. A second rAF guarantees
    // we are in the next rendering cycle where all layout and paint is stable.
    let rafId2 = 0;
    const rafId1 = requestAnimationFrame(() => {
      rafId2 = requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });
    });

    return () => {
      cancelAnimationFrame(rafId1);
      cancelAnimationFrame(rafId2);
      ctx.revert();
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
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
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

          .destinations-cards-wrapper {
            margin-top: -70px !important;
          }

          .destinations-stack-section {
            height: 100vh !important;
            height: 100dvh !important;
            padding: 0 !important;
          }

          .destinations-sticky-viewport {
            position: absolute;
            height: 100%;
            overflow: hidden;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            padding-top: 0 !important;
            box-sizing: border-box !important;
          }

          .destinations-cards-container {
            width: 90% !important;
            height: 66vh !important;
            height: 66dvh !important;
            max-height: 520px !important;
            min-height: 380px !important;
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
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }

          .card-left-panel {
            width: 100% !important;
            height: 62% !important;
            padding: 16px 16px !important;
            justify-content: flex-start !important;
            z-index: 5;
          }

          .left-panel-content {
            max-width: 100% !important;
          }

          .card-right-panel {
            width: 100% !important;
            height: 38% !important;
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
                      loading="eager"
                      decoding="async"
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
