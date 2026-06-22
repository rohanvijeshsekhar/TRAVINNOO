import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackgroundVideo from './BackgroundVideo';
import ScrollIndicator from './ScrollIndicator';

// Curated high-resolution luxury travel editorial photography
const SERVICES_DATA = [
  {
    id: '01',
    title: 'Leisure Travel',
    description: 'Create unforgettable leisure journeys through thoughtfully curated itineraries, luxury accommodations and authentic local experiences.',
    highlights: [
      'Tailor-made holidays',
      'Luxury resorts',
      'Honeymoons',
      'Family vacations'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    cta: 'Explore Leisure Travel'
  },
  {
    id: '02',
    title: 'Group Tours',
    description: 'Expertly managed group travel experiences for educational institutions, leisure groups, corporate retreats and special interest tours.',
    highlights: [
      'Group logistics',
      'Tour management',
      'Dedicated coordinators',
      'Flexible itineraries'
    ],
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1600&auto=format&fit=crop',
    cta: 'Explore Group Tours'
  },
  {
    id: '03',
    title: 'MICE & Events',
    description: 'Delivering professional destination management for meetings, incentives, conferences and international events.',
    highlights: [
      'Conference management',
      'Venue sourcing',
      'Incentive travel',
      'Event logistics'
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
    cta: 'Explore MICE & Events'
  },
  {
    id: '04',
    title: 'Corporate Travel',
    description: 'Business travel solutions designed for efficiency, reliability and comfort.',
    highlights: [
      'Executive travel',
      'VIP assistance',
      'Accommodation',
      'Transfers'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    cta: 'Explore Corporate Travel'
  },
  {
    id: '05',
    title: 'Ground Handling',
    description: 'Reliable destination operations ensuring every arrival, transfer and departure runs flawlessly.',
    highlights: [
      'Airport assistance',
      'Meet & Greet',
      'Transportation',
      'Operations support'
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop',
    cta: 'Explore Ground Handling'
  },
  {
    id: '06',
    title: 'Luxury Experiences',
    description: 'Exclusive travel experiences crafted for discerning travellers seeking extraordinary moments.',
    highlights: [
      'Private yachts',
      'Helicopter tours',
      'Fine dining',
      'Bespoke experiences'
    ],
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1600&auto=format&fit=crop',
    cta: 'Explore Luxury Experiences'
  }
];

const DIVIDERS = [
  'Travel is personal.',
  'Every journey deserves precision.',
  'Luxury begins long before departure.',
  'Experiences remembered long after returning home.',
  'Where local expertise meets global standards.'
];

const PILLARS = [
  'Local Expertise',
  'Global Standards',
  'Personalised Service',
  '24/7 Operational Support',
  'Reliable Partner Network',
  'Tailor-Made Experiences'
];

const PROCESS_STEPS = [
  { num: '01', name: 'Enquiry' },
  { num: '02', name: 'Planning' },
  { num: '03', name: 'Confirmation' },
  { num: '04', name: 'Arrival' },
  { num: '05', name: 'Experience' },
  { num: '06', name: 'Support' }
];

const PARTNERS = [
  'AMAN', 'FOUR SEASONS', 'RITZ-CARLTON', 'EMIRATES',
  'MANDARIN ORIENTAL', 'ROSEWOOD', 'ONE&ONLY', 'SINGAPORE AIRLINES'
];

const faderTransition = { duration: 1.2, ease: [0.25, 1, 0.5, 1] };

// Subcomponent: Individual Service Row with Parallax Image and Elegant Hovers
function ServiceChapter({ service, idx }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Parallax scroll binding
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transform
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const isLeftImage = idx % 2 === 0;

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: isLeftImage ? 'row' : 'row-reverse',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '6%',
        width: '100%',
        minHeight: '85vh',
        padding: '100px 0',
        position: 'relative'
      }}
    >
      {/* Image container with Parallax & Hover scale */}
      <div
        className="chapter-image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          flex: '1 1 50%',
          minWidth: '320px',
          height: '580px',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          backgroundColor: '#111116'
        }}
      >
        <motion.div
          style={{
            y,
            width: '100%',
            height: '120%',
            position: 'absolute',
            top: '-10%',
            left: 0
          }}
        >
          <img
            src={service.image}
            alt={service.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.02)' : 'scale(1.0)',
              transition: 'transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          />
        </motion.div>
        
        {/* Hover Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000000',
            opacity: isHovered ? 0.35 : 0.15,
            transition: 'opacity 1.0s cubic-bezier(0.25, 1, 0.5, 1)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Copy Content Column */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={faderTransition}
        style={{
          flex: '1 1 40%',
          minWidth: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '24px',
          padding: '20px 0'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'rgba(245, 242, 236, 0.4)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 500
          }}
        >
          SERVICE {service.id}
        </span>

        <div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: '#F5F2EC',
              margin: 0
            }}
          >
            {service.title}
          </h2>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.02rem',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.7)',
            margin: 0,
            fontWeight: 300
          }}
        >
          {service.description}
        </p>

        {/* Highlights List */}
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {service.highlights.map((highlight) => (
            <li
              key={highlight}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontWeight: 400
              }}
            >
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-red)' }} />
              {highlight}
            </li>
          ))}
        </ul>

        {/* CTA Explore Link */}
        <div style={{ marginTop: '12px' }}>
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              opacity: isHovered ? 1.0 : 0.6,
              transition: 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            {service.cta} &rarr;
          </a>
        </div>
      </motion.div>
    </div>
  );
}

// Subcomponent: Typographic Dividers
function EditorialDivider({ text }) {
  return (
    <section
      style={{
        width: '100%',
        height: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: '0 8%'
      }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.85, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={faderTransition}
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 5.5vw, 4.8rem)',
          fontWeight: 500,
          lineHeight: 1.15,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          color: '#F5F2EC',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: 0
        }}
      >
        {text}
      </motion.h3>
    </section>
  );
}

export default function ServicesPage() {
  const marqueeContainerRef = useRef(null);

  // Initialize GSAP register ScrollTrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger on mount
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#050505',
        color: '#F5F2EC',
        width: '100%',
        minHeight: '100vh',
        fontFamily: 'var(--font-sans)',
        overflowX: 'hidden'
      }}
    >
      <style>{`
        /* Process Step Layout adjustments */
        @media (max-width: 768px) {
          .process-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 48px !important;
            padding-left: 10% !important;
            padding-right: 10% !important;
          }
          .process-line {
            width: 1px !important;
            height: 80% !important;
            top: 20px !important;
            left: calc(10% + 15px) !important;
            transform: none !important;
          }
          .process-step {
            flex-direction: row !important;
            gap: 24px !important;
            align-items: center !important;
            text-align: left !important;
          }
        }

        /* Continuous Marquee styles */
        @keyframes marquee-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content-container {
          display: flex;
          white-space: nowrap;
          animation: marquee-scroll 28s linear infinite;
        }
        .marquee-container-element:hover .marquee-content-container {
          animation-play-state: paused;
        }

        /* Custom typography layout classes */
        .chapter-image-container img {
          will-change: transform;
        }
      `}</style>

      {/* SECTION 01 — HERO */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Cinematic Video Background */}
        <BackgroundVideo src={`${import.meta.env.BASE_URL}video/0615.mp4`} />

        {/* 40% Contrast Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />

        {/* Hero Copy */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
            maxWidth: '900px',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={faderTransition}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 9vw, 6.5rem)',
              fontWeight: 500,
              lineHeight: 1.0,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#F5F2EC',
              margin: 0
            }}
          >
            SERVICES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '680px',
              margin: 0,
              fontWeight: 300,
              letterSpacing: '0.5px'
            }}
          >
            Destination management, thoughtfully crafted from arrival to departure.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* SECTION 02 — INTRODUCTION */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#0B0B0B',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(193, 18, 31, 0.06) 0%, transparent 70%)',
          padding: '180px 8%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={faderTransition}
          style={{
            maxWidth: '720px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: '#F5F2EC',
              margin: 0
            }}
          >
            Designed Around Every Journey
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: 300,
              margin: 0
            }}
          >
            At Travinno, every journey begins with understanding people. From tailor-made leisure escapes and corporate travel to destination events and ground operations, our services are designed to deliver seamless experiences with local expertise and international standards.
          </p>
        </motion.div>
      </section>

      {/* SECTION 03 — SERVICES & EDITORIAL DIVIDERS */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#000000',
          padding: '0 8%'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Service 01 */}
          <ServiceChapter service={SERVICES_DATA[0]} idx={0} />
          
          {/* Divider 1 */}
          <EditorialDivider text={DIVIDERS[0]} />

          {/* Service 02 */}
          <ServiceChapter service={SERVICES_DATA[1]} idx={1} />
          
          {/* Divider 2 */}
          <EditorialDivider text={DIVIDERS[1]} />

          {/* Service 03 */}
          <ServiceChapter service={SERVICES_DATA[2]} idx={2} />
          
          {/* Divider 3 */}
          <EditorialDivider text={DIVIDERS[2]} />

          {/* Service 04 */}
          <ServiceChapter service={SERVICES_DATA[3]} idx={3} />
          
          {/* Divider 4 */}
          <EditorialDivider text={DIVIDERS[3]} />

          {/* Service 05 */}
          <ServiceChapter service={SERVICES_DATA[4]} idx={4} />
          
          {/* Divider 5 */}
          <EditorialDivider text={DIVIDERS[4]} />

          {/* Service 06 */}
          <ServiceChapter service={SERVICES_DATA[5]} idx={5} />

        </div>
      </section>

      {/* WHY TRAVINNO */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#050505',
          padding: '160px 8%',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={faderTransition}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: 'rgba(245, 242, 236, 0.45)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '60px'
            }}
          >
            Why Travinno
          </motion.h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 4.5vw, 3.4rem)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  color: '#F5F2EC',
                  textAlign: 'center',
                  lineHeight: 1.2
                }}
              >
                {pillar}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#000000',
          padding: '160px 8%',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={faderTransition}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: 'rgba(245, 242, 236, 0.45)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '100px'
            }}
          >
            OUR PROCESS
          </motion.h2>

          {/* Process flow timeline container */}
          <div style={{ position: 'relative', width: '100%' }}>
            
            {/* Horizontal timeline connecting line */}
            <motion.div
              className="process-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '20px',
                left: '8%',
                right: '8%',
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                transformOrigin: 'left center',
                zIndex: 1
              }}
            />

            <div
              className="process-row"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                position: 'relative',
                zIndex: 2
              }}
            >
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.name}
                  className="process-step"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    flex: '1 1 0px'
                  }}
                >
                  {/* Step indicator node */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#000000',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 600
                    }}
                  >
                    {step.num}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      letterSpacing: '1px'
                    }}
                  >
                    {step.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNERS */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#0B0B0B',
          padding: '100px 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8%', marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: 'rgba(245, 242, 236, 0.45)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: 0
            }}
          >
            TRUSTED PARTNERS
          </h2>
        </div>

        {/* Infinite Loop Marquee Container */}
        <div
          className="marquee-container-element"
          ref={marqueeContainerRef}
          style={{
            overflow: 'hidden',
            width: '100%',
            display: 'flex',
            position: 'relative'
          }}
        >
          <div className="marquee-content-container">
            {/* Render 4 sets of the partners list to support seamless large viewport scrolls */}
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
              <span
                key={`${partner}-${idx}`}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  fontWeight: 500,
                  letterSpacing: '6px',
                  textTransform: 'uppercase',
                  color: 'rgba(245, 242, 236, 0.25)',
                  margin: '0 60px',
                  display: 'inline-block',
                  cursor: 'default',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.25)'}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#050505',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(193, 18, 31, 0.07) 0%, transparent 60%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 8%',
          position: 'relative'
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '36px'
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={faderTransition}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#F5F2EC',
              margin: 0
            }}
          >
            Let's Create Extraordinary Journeys Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...faderTransition, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.85)',
              margin: 0,
              fontWeight: 300
            }}
          >
            Whether you're a travel agency, corporate partner or tour operator, Travinno is ready to deliver seamless destination experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...faderTransition, delay: 0.3 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '12px'
            }}
          >
            {/* Primary Button */}
            <a
              href="#contact"
              className="start-conv-btn"
              style={{
                padding: '16px 36px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: '1px solid #FFFFFF',
                borderRadius: '0px',
                textDecoration: 'none',
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#000000';
              }}
            >
              Start a Conversation
            </a>

            {/* Secondary Button */}
            <a
              href="#destinations"
              className="explore-dest-btn"
              style={{
                padding: '16px 36px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '0px',
                textDecoration: 'none',
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              Explore Destinations
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
