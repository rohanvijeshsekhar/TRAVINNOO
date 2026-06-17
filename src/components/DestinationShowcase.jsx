import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const destinationsData = [
  {
    name: 'Dubai',
    description: 'A futuristic metropolis blending ultra-luxury with timeless Arabian heritage.',
    image: 'images/dubai.png'
  },
  {
    name: 'Kenya',
    description: 'Unrivaled wilderness and majestic wildlife encounters in the heart of Africa.',
    image: 'images/kenya.png'
  },
  {
    name: 'Thailand',
    description: 'Breathtaking tropical island sanctuaries and rich cultural tapestries.',
    image: 'images/thailand.png'
  },
  {
    name: 'Vietnam',
    description: 'A journey through historic landscapes, vibrant culture, and serene natural beauty.',
    image: 'images/vietnam.png'
  },
  {
    name: 'Singapore',
    description: 'A dynamic garden city fusing cutting-edge innovation with diverse cultures.',
    image: 'images/singapore.png'
  },
  {
    name: 'Malaysia',
    description: 'A vibrant melting pot of pristine rainforests, beaches, and modern skylines.',
    image: 'images/malaysia.png'
  },
  {
    name: 'Bali',
    description: 'An enchanting island of spiritual tranquility, dramatic coastlines, and wellness.',
    image: 'images/bali.png'
  }
];

export default function DestinationShowcase() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const introRef = useRef(null);
  const bgRefs = useRef([]);
  const textRefs = useRef([]);

  // Initialize arrays
  bgRefs.current = [];
  textRefs.current = [];

  const addToBgRefs = (el) => {
    if (el && !bgRefs.current.includes(el)) {
      bgRefs.current.push(el);
    }
  };

  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create ScrollTrigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=700%',
          scrub: 1.5,
          pin: true,
          anticipatePin: 1
        }
      });

      // Step 0: Fade out Intro
      tl.to(introRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.8,
        ease: 'power2.inOut'
      });

      // Step 1 to N: Sequential crossfade for destinations
      destinationsData.forEach((dest, idx) => {
        const bgEl = bgRefs.current[idx];
        const textEl = textRefs.current[idx];

        if (bgEl && textEl) {
          // Fade in background and text
          tl.to(bgEl, {
            opacity: 1,
            scale: 1.02,
            duration: 1.2,
            ease: 'power2.inOut'
          }, '-=0.4')
          .to(textEl, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out'
          }, '<')
          // Hold the current destination
          .to({}, { duration: 1.2 });

          // If not the last item, fade it out before the next enters
          if (idx < destinationsData.length - 1) {
            tl.to(textEl, {
              opacity: 0,
              y: -40,
              duration: 0.8,
              ease: 'power2.in'
            })
            .to(bgEl, {
              opacity: 0,
              duration: 1.2,
              ease: 'power2.inOut'
            }, '<');
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="showcase-section" id="destinations">
      <div ref={stickyRef} className="showcase-sticky-container">
        {/* Background layer */}
        <div className="showcase-bg-container">
          {destinationsData.map((dest, idx) => (
            <div
              key={`bg-${idx}`}
              ref={addToBgRefs}
              className="showcase-bg-item"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}${dest.image})`
              }}
            />
          ))}
          <div className="showcase-bg-overlay" />
        </div>

        {/* Foreground Content layer */}
        <div className="showcase-content-container">
          {/* Intro Slide */}
          <div ref={introRef} className="showcase-slide-intro">
            <span className="showcase-intro-label">START YOUR JOURNEY</span>
            <h2 className="showcase-intro-heading">Discover the Extraordinary</h2>
            <p className="showcase-intro-desc">
              Discover destinations where culture, adventure, luxury and unforgettable experiences come together through local expertise and seamless destination management.
            </p>
          </div>

          {/* Destination Slides */}
          {destinationsData.map((dest, idx) => (
            <div
              key={`dest-${idx}`}
              ref={addToTextRefs}
              className="showcase-slide-dest"
            >
              <h3 className="showcase-dest-name">{dest.name}</h3>
              <p className="showcase-dest-desc">{dest.description}</p>
              <a
                href={`#explore-${dest.name.toLowerCase()}`}
                className="showcase-explore-link"
                onClick={(e) => {
                  e.preventDefault();
                  const contactEl = document.getElementById('contact');
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Destination <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
