import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';

const faderTransition = { duration: 1.2, ease: [0.25, 1, 0.5, 1] };

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Slow Travel in Kenya',
    category: 'Expeditions',
    readTime: '5 min read',
    date: 'June 28, 2026',
    description: 'An editorial guide on experiencing the untamed beauty of East Africa at a refined, deliberate pace.'
  },
  {
    id: 2,
    title: 'Navigating the Sacred Sanctuaries of Bali',
    category: 'Culture',
    readTime: '6 min read',
    date: 'June 15, 2026',
    description: "Discovering the hidden water temples and spiritual heritage of Indonesia's most mystical island."
  },
  {
    id: 3,
    title: 'Kyoto’s Culinary Secrets: A Connoisseur’s Diary',
    category: 'Gastronomy',
    readTime: '8 min read',
    date: 'May 30, 2026',
    description: "An intimate journey through Kaiseki dining and the ancient tea ceremonies of Japan's cultural heart."
  },
  {
    id: 4,
    title: 'Bespoke Yachting Across the Amalfi Coast',
    category: 'Escapes',
    readTime: '4 min read',
    date: 'May 12, 2026',
    description: 'Sailing the dramatic cliffs and azure coves of southern Italy on a custom-designed private charter.'
  }
];

export default function BlogPage() {
  return (
    <div style={{ backgroundColor: '#050505', color: '#F5F2EC', width: '100%', minHeight: '100vh', position: 'relative', overflowX: 'hidden', boxSizing: 'border-box' }}>
      <style>{`
        .blog-container {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          padding: 160px 24px 120px 24px;
          box-sizing: border-box;
        }

        .articles-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 20px;
        }

        .premium-article-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          background: linear-gradient(180deg, rgba(16, 16, 20, 0.7) 0%, rgba(10, 10, 12, 0.9) 100%);
          border: 1px solid rgba(245, 242, 236, 0.09);
          border-radius: 18px;
          padding: 36px 40px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03), 0 12px 30px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .premium-article-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 10% 20%, rgba(193, 18, 31, 0.03) 0%, transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        .premium-article-card:hover {
          border-color: rgba(193, 18, 31, 0.65);
          background: linear-gradient(180deg, rgba(24, 24, 30, 0.85) 0%, rgba(15, 15, 18, 0.98) 100%);
          transform: translateY(-6px);
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 20px 40px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(193, 18, 31, 0.06);
        }

        .article-content-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 1;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          font-family: var(--font-sans);
          font-size: 0.78rem;
          color: rgba(245, 242, 236, 0.55);
        }

        .article-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .article-category {
          color: #C1121F;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .article-title {
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 2.5vw, 1.85rem);
          font-weight: 450;
          color: #F5F2EC;
          margin: 0;
          line-height: 1.25;
          letter-spacing: -0.3px;
          transition: color 0.3s ease;
        }

        .premium-article-card:hover .article-title {
          color: #FFFFFF;
        }

        .article-description {
          font-family: var(--font-sans);
          font-size: clamp(0.9rem, 1.5vw, 1.05rem);
          line-height: 1.6;
          color: rgba(245, 242, 236, 0.7);
          margin: 0;
          max-width: 680px;
          font-weight: 300;
        }

        .article-action-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(245, 242, 236, 0.15);
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(245, 242, 236, 0.85);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
          z-index: 1;
        }

        .premium-article-card:hover .article-action-btn {
          border-color: #C1121F;
          background: #C1121F;
          color: #FFFFFF;
          transform: rotate(-45deg);
        }

        @media (max-width: 991px) {
          .hero-artwork-container {
            width: 100% !important;
            height: 520px !important;
            right: 0 !important;
            top: 0 !important;
            transform: none !important;
            mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%) !important;
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%) !important;
          }
          .hero-artwork-container img {
            opacity: 0.45 !important;
            border-radius: 0px !important;
          }
        }

        @media (max-width: 768px) {
          .premium-article-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            padding: 28px 24px;
          }
          .article-action-btn {
            align-self: flex-end;
          }
        }
      `}</style>

      {/* Base solid black background layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#050505',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Grid lines overlay layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(245, 242, 236, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 242, 236, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px',
          backgroundRepeat: 'repeat, repeat',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Subtle Background/Foreground Editorial Hero Artwork */}
      <div
        className="hero-artwork-container"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '54%',
          height: '580px',
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 70%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 70%)'
        }}
      >
        {/* Subtle Floating Movement wrapper (2-3px) */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'relative'
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/blog_hero.png`}
            alt="Travel Planning Editorial"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.38,
              filter: 'grayscale(100%) contrast(80%) brightness(65%)',
              transition: 'opacity 0.5s ease',
              WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)'
            }}
          />
        </motion.div>
      </div>

      <div className="blog-container">
        
        {/* HERO SECTION */}
        <section style={{ marginBottom: '24px', position: 'relative' }}>
          
          <div style={{ maxWidth: '640px', position: 'relative', zIndex: 3 }}>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                border: '1px solid rgba(193, 18, 31, 0.18)',
                borderRadius: '100px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: 'rgba(245, 242, 236, 0.85)',
                marginBottom: '16px',
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
              Journal
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 450,
                lineHeight: 1.15,
                color: '#F5F2EC',
                margin: '0 0 16px 0',
                letterSpacing: '-0.5px'
              }}
            >
              Travel Knowledge <br />
              <span
                style={{
                  fontFamily: "'Allura', cursive",
                  fontSize: '1.25em',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  lineHeight: '1.2',
                  display: 'inline-block',
                  marginTop: '-4px',
                  paddingBottom: '0px',
                  background: 'linear-gradient(to bottom, #F5F2EC 20%, #E8A7A7 60%, #C1121F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                & Storytelling
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.75, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                lineHeight: 1.65,
                color: '#F5F2EC',
                margin: 0,
                maxWidth: '680px',
                fontWeight: 300
              }}
            >
              Reflections, guides and perspectives on the art of luxury travel and destination planning.
            </motion.p>
          </div>
        </section>

        {/* ARTICLES SECTION */}
        <section style={{ position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              border: '1px solid rgba(193, 18, 31, 0.18)',
              borderRadius: '100px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: 'rgba(245, 242, 236, 0.85)',
              marginBottom: '16px',
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
            Latest Editorial
          </motion.div>

          <div className="articles-grid">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                className="premium-article-card"
              >
                <div className="article-content-left">
                  <div className="article-meta">
                    <span className="article-category">{post.category}</span>
                    <span style={{ width: '4px', height: '4px', backgroundColor: 'rgba(245, 242, 236, 0.3)', borderRadius: '50%' }} />
                    <span className="article-meta-item">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span style={{ width: '4px', height: '4px', backgroundColor: 'rgba(245, 242, 236, 0.3)', borderRadius: '50%' }} />
                    <span className="article-meta-item">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="article-title">{post.title}</h3>
                  <p className="article-description">{post.description}</p>
                </div>
                <div className="article-action-btn">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
}
