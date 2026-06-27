import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Destination {
  title: string;
  region: string;
  countryName: string;
  heading: string;
  description: string;
  highlights: string[];
  image: string;
}

const destinations: Destination[] = [
  {
    title: "Dubai",
    region: "Middle East",
    countryName: "United Arab Emirates",
    heading: "Modern Skylines & Desert Safaris",
    description: "Experience a world where futuristic glass skyscrapers rise directly from ancient desert sands, curating the ultimate heights of luxury leisure and private safaris.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "/images/destinations/dubai.webp"
  },
  {
    title: "Malaysia",
    region: "Southeast Asia",
    countryName: "Malaysia",
    heading: "Vibrant Cultures & Rainforest Escapes",
    description: "Discover a rich tapestry of history, modern capital luxury, and pristine ancient rainforest canopies home to unique biodiversity.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "/images/destinations/malaysia.webp"
  },
  {
    title: "Thailand",
    region: "Southeast Asia",
    countryName: "Thailand",
    heading: "Golden Temples & Tropical Islands",
    description: "Immerse yourself in the warm hospitality of golden temple cities and white sand archipelago islands with tailored beachfront luxury.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "/images/destinations/thailand.webp"
  },
  {
    title: "Singapore",
    region: "Southeast Asia",
    countryName: "Singapore",
    heading: "Futuristic Gardens & Cosmopolitan Charm",
    description: "Walk through the world's most advanced architectural nature displays, leading Michelin-starred dining, and premium lifestyle ports.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "/images/destinations/singapore.webp"
  },
  {
    title: "Bali",
    region: "Southeast Asia",
    countryName: "Bali",
    heading: "Sacred Temples & Pristine Beaches",
    description: "Reconnect in the spiritual capital of volcanic lake vistas, iconic terraced valleys, and private pool luxury villas.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "/images/destinations/bali.webp"
  },
  {
    title: "Kenya",
    region: "East Africa",
    countryName: "Kenya",
    heading: "Untamed Wildlife & Savannah Reserves",
    description: "Witness the great wilderness migration on the plains of Masai Mara, pairing raw nature with five-star luxury tented camp reserves.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "/images/destinations/kenya.webp"
  },
  {
    title: "Vietnam",
    region: "Southeast Asia",
    countryName: "Vietnam",
    heading: "Historic Cities & Dramatic Karst Bays",
    description: "Cruise the emerald waters of Ha Long Bay and explore French colonial cities, combining rich historic heritage with luxury maritime travel.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: "/images/destinations/vietnam.webp"
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

export default function FlyHigherV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const starsContainerRef = useRef<HTMLDivElement>(null);

  // Starry sky background movement state
  const [stars] = useState(() => {
    // Detect mobile vs desktop once during initialization to size stars count
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const count = isMobile ? 20 : 45;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 1.2,
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 8 + 5}s`
    }));
  });

  // Pause star animations when the destinations section is scrolled off-screen
  useEffect(() => {
    const container = starsContainerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        container.style.display = entry.isIntersecting ? 'block' : 'none';
        const starsEl = container.querySelectorAll('.drifting-twinkle-star');
        const state = entry.isIntersecting ? 'running' : 'paused';
        starsEl.forEach(s => {
          (s as HTMLElement).style.animationPlayState = state;
        });
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    // Filter out null values to have a clean DOM nodes array
    const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
    if (cards.length === 0) return;

    // GSAP context ensures react double mount safety and clean revert on cleanup
    const ctx = gsap.context(() => {
      // Set initial state of cards programmatically
      cards.forEach((card, idx) => {
        if (idx === 0) {
          gsap.set(card, { y: "0px", opacity: 1, scale: 1 });
        } else {
          gsap.set(card, { y: "100vh", opacity: 1, scale: 1 });
        }
      });

      // Construct exactly ONE timeline linked to exactly ONE ScrollTrigger instance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=1400vh",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1.5,
          invalidateOnRefresh: true
        }
      });

      const transitionDuration = 1.0;
      const step = 0.8;
      const checkMobile = window.innerWidth < 1024;

      for (let i = 1; i < cards.length; i++) {
        const startPos = (i - 1) * step;

        // Scale down outgoing deck item (i-1)
        if (checkMobile) {
          tl.to(cards[i - 1], {
            opacity: 1,
            duration: transitionDuration
          }, startPos);
        } else {
          tl.to(cards[i - 1], {
            y: "-30px",
            scale: 0.97,
            duration: transitionDuration,
            ease: "power1.inOut"
          }, startPos);
        }

        // Slide up incoming deck item (i)
        tl.fromTo(cards[i],
          { y: "100vh", scale: 1 },
          {
            y: "0px",
            scale: 1,
            duration: transitionDuration,
            ease: "power1.inOut",
            force3D: true
          },
          startPos
        );
      }

      // Add final holding buffer for Vietnam slide
      tl.to({}, { duration: 0.8 });
    }, containerRef);

    // Call ScrollTrigger refresh exactly ONCE to guarantee stable layout offsets
    ScrollTrigger.refresh(true);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      id="destinations"
      className="home-destinations-fade-wrap destinations-section"
      style={{
        backgroundColor: '#050505',
        padding: '100px 24px 0 24px',
        position: 'relative',
        zIndex: 5,
        overflow: 'hidden'
      }}
    >
      {/* Background Reddish-Orange-Black Gradient with Static Check Pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(245, 242, 236, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 242, 236, 0.05) 1px, transparent 1px), radial-gradient(circle at 50% 20%, rgba(193, 18, 31, 0.14) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(230, 80, 20, 0.03) 0%, transparent 60%)',
          backgroundSize: '100px 100px, 100px 100px, auto, auto',
          backgroundRepeat: 'repeat, repeat, no-repeat, no-repeat',
          backgroundColor: '#050505',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Twinkling & Drifting Stars — paused via IntersectionObserver when off-screen */}
      <div 
        ref={starsContainerRef}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          overflow: 'hidden', 
          pointerEvents: 'none', 
          zIndex: 2 
        }}
      >
        <style>{`
          @keyframes starDrift {
            0% {
              transform: translate(0, 0) scale(0.85);
              opacity: 0.25;
            }
            50% {
              transform: translate(15px, -15px) scale(1.15);
              opacity: 0.85;
            }
            100% {
              transform: translate(30px, -30px) scale(0.85);
              opacity: 0.25;
            }
          }
          .drifting-twinkle-star {
            position: absolute;
            background-color: #ffffff;
            border-radius: 50%;
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
          }
        `}</style>
        {stars.map((star) => (
          <div
            key={star.id}
            className="drifting-twinkle-star"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `starDrift ${star.duration} infinite ease-in-out`,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      {/* Top Smooth Blend Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '160px',
          background: 'linear-gradient(to bottom, #050505 0%, transparent 100%)',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      />

      {/* Bottom Smooth Blend Overlay */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '160px',
          background: 'linear-gradient(to top, #050505 0%, transparent 100%)',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      />

      <div className="destinations-heading-container" style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center', boxSizing: 'border-box', padding: '0 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            border: '1px solid rgba(193, 18, 31, 0.15)',
            borderRadius: '100px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            color: 'rgba(255, 255, 255, 0.85)',
            marginBottom: '12px',
            background: 'rgba(193, 18, 31, 0.05)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#C1121F',
              borderRadius: '50%',
              display: 'inline-block'
            }}
          />
          Fly Higher
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: '0.02em',
            color: '#F5F2EC',
            margin: '0 0 16px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <span>Beyond Every</span>
          <span className="journey-allura-text" style={{ marginTop: '4px' }}>Borders</span>
        </h2>
      </div>

      <div className="destinations-cards-wrapper" style={{ position: 'relative', zIndex: 10 }}>
        <div
          ref={containerRef}
          className="destinations-stack-section"
          style={{
            position: 'relative',
            height: '100vh',
            height: '100dvh',
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
              height: 72vh;
              max-height: 720px;
              min-height: 520px;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 2;
            }

            .destination-card {
              position: absolute;
              width: 100%;
              height: 100%;
              background: #050505;
              border: 1px solid #181818;
              border-radius: 32px;
              box-sizing: border-box;
              padding: 0;
              display: flex;
              align-items: center;
              justify-content: space-between;
              overflow: hidden;
              box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
              will-change: transform, opacity;
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
              transform: translate3d(0, 0, 0);
              transform-style: preserve-3d;
            }

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

            .destination-card:hover .destination-img {
              transform: scale(1.03);
            }

            .dest-number-label {
              font-family: var(--font-sans);
              font-size: 0.75rem;
              font-weight: 600;
              color: rgba(255, 255, 255, 0.35);
              letter-spacing: 2px;
              text-transform: uppercase;
              margin-bottom: 12px;
            }

            .dest-number-label .red-accent {
              color: #C1121F;
              font-weight: 700;
            }

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
              font-size: clamp(2rem, 2.8vw, 3rem);
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
                const isFirst = idx === 0;
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
                        <div className="dest-number-label">
                          <span className="red-accent">0{idx + 1}</span> / 07
                        </div>
                        <div className="dest-meta-container">
                          <span className="dest-region-label">{dest.region}</span>
                          <h4 className="dest-country-heading">
                            <span className="dest-country-name-script">{dest.countryName}</span>
                            <span className="dest-flag-span">{getFlag(dest.title)}</span>
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
                          src={dest.image}
                          alt={getDestinationAltText(dest.title)}
                          loading={isFirst ? "eager" : "lazy"}
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
      </div>
    </div>
  );
}
