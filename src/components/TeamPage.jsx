import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock high-resolution royalty-free imagery matching Aman Resorts / luxury editorial aesthetics
const HERO_IMAGE = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920';
const LEADERS = [
  {
    name: 'Prinu Santhappan',
    position: 'Managing Director',
    bio: 'With over two decades of experience in the travel and hospitality industry, I am proud to lead a team of passionate professionals who are united by a shared vision of excellence, innovation, and genuine customer satisfaction.\n\nOur journey has been defined by strong partnerships – built on trust, mutual growth, and a commitment to delivering exceptional value. We believe that success is not achieved alone; it is the result of meaningful collaborations with our clients, partners, and stakeholders.\n\nAs we move forward, we remain dedicated to fostering these relationships, adapting to industry changes, and crafting innovative, affordable travel solutions that exceed expectations. Together, let’s continue to explore new horizons and create unforgettable experiences.\n\nThank you for your continued trust and support. We look forward to many more successful partnerships ahead.',
    image: import.meta.env.BASE_URL + 'images/founder.png',
    objectPosition: '50% 0%'
  }
];

const TEAM_MEMBERS = [
  {
    name: 'Geetha Biju',
    position: 'Sr. Manager (Finance)',
    image: import.meta.env.BASE_URL + 'images/specialist_1.png',
    height: '420px'
  },
  {
    name: 'Manu Prasad',
    position: 'Head of Operations',
    image: import.meta.env.BASE_URL + 'images/specialist_2.png',
    height: '300px'
  },
  {
    name: 'Anuraj VS',
    position: 'Business Development Head (India)',
    image: import.meta.env.BASE_URL + 'images/specialist_3.png',
    height: '450px'
  },
  {
    name: 'Kavitha Prinu',
    position: 'Manager Sales (Group)',
    image: import.meta.env.BASE_URL + 'images/specialist_4.png',
    height: '380px'
  },
  {
    name: 'Neethu Dilver',
    position: 'Manager FIT (Indian Operations)',
    image: import.meta.env.BASE_URL + 'images/specialist_5.png',
    height: '280px'
  },
  {
    name: 'Sree Rekha M',
    position: 'Asst. Manager (Product & Contracting)',
    image: import.meta.env.BASE_URL + 'images/specialist_6.png',
    height: '400px'
  },
  {
    name: 'Godson KJ',
    position: 'Asst. Manager - Groups',
    image: import.meta.env.BASE_URL + 'images/specialist_7.png',
    height: '360px'
  },
  {
    name: 'Vishnu VB',
    position: 'Visa Department Head',
    image: import.meta.env.BASE_URL + 'images/specialist_8.png',
    height: '420px'
  },
  {
    name: 'Violah Cherotich',
    position: 'Business Development Manager (Africa)',
    image: import.meta.env.BASE_URL + 'images/specialist_9.png',
    height: '320px'
  }
];

const GLOBAL_LOCATIONS = [
  'Dubai',
  'Thailand',
  'India',
  'Kenya',
  'Malaysia',
  'Vietnam',
  'Singapore'
];

const FINAL_TEAM_IMAGE = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920';

const faderTransition = { duration: 1.2, ease: [0.25, 1, 0.5, 1] };

export default function TeamPage() {
  const [hoveredLeader, setHoveredLeader] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div 
      style={{ 
        backgroundColor: '#000000', 
        color: '#FFFFFF', 
        width: '100%', 
        minHeight: '100vh',
        overflowX: 'hidden',
        fontFamily: '"SF Pro Display", "Satoshi", sans-serif'
      }}
    >
      <style>{`
        .masonry-grid {
          column-count: 3;
          column-gap: 40px;
        }
        @media (max-width: 960px) {
          .masonry-grid {
            column-count: 2;
            column-gap: 24px;
          }
        }
        @media (max-width: 600px) {
          .masonry-grid {
            column-count: 1;
            column-gap: 0px;
          }
        }
        .glass-box {
          flex: 1 1 200px;
          max-width: 220px;
          padding: 24px 20px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
        }
        .glass-box:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 255, 255, 0.03);
        }
      `}</style>

      {/* 1. HERO SECTION (calm, cinematic, full screen) */}
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
        {/* Background Team Photograph */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        />
        
        {/* 40% Black Overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 2
          }}
        />

        {/* Centered Content */}
        <div 
          style={{
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
            maxWidth: '800px',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px'
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={faderTransition}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#F7F5F2',
              margin: 0
            }}
          >
            THE PEOPLE<br/>BEHIND<br/>EVERY JOURNEY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '620px',
              margin: 0,
              fontWeight: 400
            }}
          >
            Behind every unforgettable journey is a passionate team of travel specialists, destination experts and professionals committed to delivering exceptional experiences across every destination we serve.
          </motion.p>
        </div>

        {/* Subtle Scroll Indicator */}
        <div 
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span 
            style={{
              fontFamily: 'monospace',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '3px',
              textTransform: 'uppercase'
            }}
          >
            Scroll
          </span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '24px',
              backgroundColor: 'rgba(255,255,255,0.3)'
            }}
          />
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION (minimal editorial) */}
      <section 
        style={{
          width: '100%',
          backgroundColor: '#050505',
          padding: '160px 8%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={faderTransition}
          style={{
            maxWidth: '700px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.15rem, 3vw, 1.45rem)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 300,
              margin: 0
            }}
          >
            Travel is ultimately about people.
          </p>
          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.15rem, 3vw, 1.45rem)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 300,
              margin: 0
            }}
          >
            Every itinerary, every experience and every unforgettable journey begins with a team that believes in genuine hospitality, local expertise and meaningful relationships.
          </p>
          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.15rem, 3vw, 1.45rem)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 300,
              margin: 0
            }}
          >
            At Travinno, our people are the heart of everything we create.
          </p>
        </motion.div>
      </section>

      {/* 3. LEADERSHIP SECTION (alternating profile layouts) */}
      <section 
        style={{
          width: '100%',
          backgroundColor: '#050505',
          padding: '40px 8% 120px 8%',
          display: 'flex',
          flexDirection: 'column',
          gap: '160px'
        }}
      >
        {LEADERS.map((leader, idx) => {
          const isLeftImage = idx % 2 === 0;
          return (
            <div 
              key={leader.name}
              style={{
                display: 'flex',
                flexDirection: isLeftImage ? 'row' : 'row-reverse',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '8%',
                width: '100%'
              }}
            >
              {/* Leader Portrait */}
              <div 
                style={{
                  flex: '1 1 45%',
                  minWidth: '320px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredLeader(idx)}
                onMouseLeave={() => setHoveredLeader(null)}
              >
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  style={{
                    width: '100%',
                    height: '560px',
                    objectFit: 'cover',
                    objectPosition: leader.objectPosition || 'center',
                    borderRadius: '24px',
                    transform: hoveredLeader === idx ? 'scale(1.02)' : 'scale(1.0)',
                    transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                />
              </div>

              {/* Leader Content */}
              <div 
                style={{
                  flex: '1 1 45%',
                  minWidth: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  padding: '20px 0'
                }}
              >
                {leader.years && (
                  <span 
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      color: 'var(--accent-red)',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    {leader.years}
                  </span>
                )}
                
                <div>
                  <h2 
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 800,
                      color: '#F7F5F2',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    {leader.name}
                  </h2>
                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.5)',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      margin: '4px 0 0 0',
                      fontWeight: 700
                    }}
                  >
                    {leader.position}
                  </p>
                </div>

                <div 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.05rem',
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.65)',
                    fontWeight: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  {leader.bio.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx} style={{ margin: 0 }}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. OUR TEAM (premium masonry gallery grid) */}
      <section 
        style={{
          width: '100%',
          backgroundColor: '#050505',
          padding: '120px 8%',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <h2 
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#F7F5F2',
              marginBottom: '60px',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}
          >
            OUR SPECIALISTS
          </h2>

          <div className="masonry-grid">
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={member.name}
                onMouseEnter={() => setHoveredMember(idx)}
                onMouseLeave={() => setHoveredMember(null)}
                style={{ 
                  marginBottom: '40px', 
                  breakInside: 'avoid', 
                  cursor: 'pointer' 
                }}
              >
                {/* Image Wrap */}
                <div 
                  style={{ 
                    overflow: 'hidden', 
                    borderRadius: '16px', 
                    backgroundColor: '#111116' 
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{
                      width: '100%',
                      height: member.height,
                      objectFit: 'cover',
                      objectPosition: '50% 0%',
                      filter: hoveredMember === idx ? 'grayscale(0%)' : 'grayscale(100%)',
                      transform: hoveredMember === idx ? 'scale(1.03)' : 'scale(1.0)',
                      transition: 'filter 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
                    }}
                  />
                </div>

                {/* Fade-in text on hover */}
                <div 
                  style={{
                    marginTop: '16px',
                    opacity: hoveredMember === idx ? 1.0 : 0.0,
                    transform: hoveredMember === idx ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                >
                  <h4 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#F7F5F2',
                      margin: 0
                    }}
                  >
                    {member.name}
                  </h4>
                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.6)',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      margin: '2px 0 0 0'
                    }}
                  >
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. GLOBAL TEAM LOCATIONS */}
      <section 
        style={{
          width: '100%',
          backgroundColor: '#050505',
          background: 'radial-gradient(circle at 50% 50%, rgba(193, 18, 31, 0.06) 0%, #050505 80%)',
          padding: '100px 8%',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Glassmorphic Background Blur Blobs */}
        <div 
          style={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(219, 58, 49, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '15%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(230, 185, 120, 0.06) 0%, rgba(0, 0, 0, 0) 70%)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: '40%',
            left: '45%',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <h2 
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '1rem',
              fontWeight: 800,
              color: '#F7F5F2',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '40px'
            }}
          >
            OUR GLOBAL TEAM
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', width: '100%' }}>
            {/* Row 1: First 4 locations */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%', flexWrap: 'wrap' }}>
              {GLOBAL_LOCATIONS.slice(0, 4).map((loc) => (
                <div key={loc} className="glass-box">
                  <span 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.05rem',
                      fontWeight: 500,
                      letterSpacing: '1px',
                      color: '#FFFFFF'
                    }}
                  >
                    {loc}
                  </span>
                </div>
              ))}
            </div>

            {/* Row 2: Next 3 locations */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%', flexWrap: 'wrap' }}>
              {GLOBAL_LOCATIONS.slice(4).map((loc) => (
                <div key={loc} className="glass-box">
                  <span 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.05rem',
                      fontWeight: 500,
                      letterSpacing: '1px',
                      color: '#FFFFFF'
                    }}
                  >
                    {loc}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. TEAM STATISTICS */}
      <section 
        style={{
          width: '100%',
          backgroundColor: '#050505',
          padding: '120px 8%',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '40px', 
            alignItems: 'center', 
            margin: '0 auto', 
            maxWidth: '500px' 
          }}
        >
          {/* Stat 1 */}
          <div style={{ textAlign: 'center' }}>
            <h3 
              style={{ 
                fontFamily: "'Oswald', sans-serif", 
                fontSize: 'clamp(4rem, 8vw, 5.5rem)', 
                fontWeight: 800, 
                color: '#F7F5F2', 
                margin: 0,
                lineHeight: 1.0
              }}
            >
              70+
            </h3>
            <p 
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.8rem', 
                color: 'rgba(255,255,255,0.6)', 
                letterSpacing: '2px', 
                textTransform: 'uppercase', 
                margin: '10px 0 0 0',
                fontWeight: 600
              }}
            >
              Travel Professionals
            </p>
          </div>
          
          <div style={{ width: '80px', height: '1px', backgroundColor: 'rgba(255,255,255,0.15)' }} />
          
          {/* Stat 2 */}
          <div style={{ textAlign: 'center' }}>
            <h3 
              style={{ 
                fontFamily: "'Oswald', sans-serif", 
                fontSize: 'clamp(4rem, 8vw, 5.5rem)', 
                fontWeight: 800, 
                color: '#F7F5F2', 
                margin: 0,
                lineHeight: 1.0
              }}
            >
              7
            </h3>
            <p 
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.8rem', 
                color: 'rgba(255,255,255,0.6)', 
                letterSpacing: '2px', 
                textTransform: 'uppercase', 
                margin: '10px 0 0 0',
                fontWeight: 600
              }}
            >
              Destinations Served
            </p>
          </div>
          
          <div style={{ width: '80px', height: '1px', backgroundColor: 'rgba(255,255,255,0.15)' }} />
          
          {/* Stat 3 */}
          <div style={{ textAlign: 'center' }}>
            <h3 
              style={{ 
                fontFamily: "'Oswald', sans-serif", 
                fontSize: 'clamp(4rem, 8vw, 5.5rem)', 
                fontWeight: 800, 
                color: '#F7F5F2', 
                margin: 0,
                lineHeight: 1.0
              }}
            >
              20+
            </h3>
            <p 
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.8rem', 
                color: 'rgba(255,255,255,0.6)', 
                letterSpacing: '2px', 
                textTransform: 'uppercase', 
                margin: '10px 0 0 0',
                fontWeight: 600
              }}
            >
              Years of Combined Excellence
            </p>
          </div>
        </div>
      </section>

      {/* 7. FINAL TEAM IMAGE (large full-width photograph with quote) */}
      <section 
        style={{
          position: 'relative',
          width: '100%',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${FINAL_TEAM_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        />
        
        {/* Minimal Overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 2
          }}
        />

        <div 
          style={{
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: '900px'
          }}
        >
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={faderTransition}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#F7F5F2',
              margin: 0
            }}
          >
            One Team.<br/>Many Destinations.<br/>One Standard of Excellence.
          </motion.blockquote>
        </div>
      </section>

      {/* 8. CAREERS CTA (simple black section) */}
      <section 
        style={{
          width: '100%',
          backgroundColor: '#050505',
          padding: '160px 8%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px'
        }}
      >
        <h2 
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#F7F5F2',
            margin: 0,
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}
        >
          Join Our Journey.
        </h2>

        <p 
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '480px',
            margin: 0,
            fontWeight: 300
          }}
        >
          We're always looking for passionate people who believe in creating exceptional travel experiences.
        </p>

        <a 
          href="#contact"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            backgroundColor: 'var(--accent-red)',
            textDecoration: 'none',
            padding: '14px 32px',
            borderRadius: '0px',
            marginTop: '16px',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#000000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-red)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          Explore Careers
        </a>
      </section>
    </div>
  );
}
