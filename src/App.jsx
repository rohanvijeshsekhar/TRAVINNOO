import React, { useState, useEffect } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import ScrollIndicator from './components/ScrollIndicator';
import EditorialSection from './components/EditorialSection';
import OurJourney from './components/OurJourney';
import ExpertiseSection from './components/ExpertiseSection';
import WhyTravinno from './components/WhyTravinno';
import { DemoOne } from './components/ui/demo';
import LogoCloudSection from './components/LogoCloudSection';
import ParallaxDemo from './demos/default';
import Loader from './components/Loader';
import TeamPage from './components/TeamPage';
import ServicesPage from './components/ServicesPage';
import CinematicHero from './components/CinematicHero';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

function StarryBackground() {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const starArray = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: `${Math.random() * 8}s`,
      duration: `${6 + Math.random() * 8}s`,
      driftX: (Math.random() - 0.5) * 40,
      driftY: (Math.random() - 0.5) * 40
    }));
    setStars(starArray);
  }, []);

  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="animate-star-move"
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            boxShadow: `0 0 ${star.size * 2}px #ffffff`,
            opacity: 0.2,
            animationDelay: star.delay,
            animationDuration: star.duration,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
            ['--drift-x']: `${star.driftX}px`,
            ['--drift-y']: `${star.driftY}px`
          }}
        />
      ))}
      <style>{`
        @keyframes starMove {
          0% {
            opacity: 0.2;
            transform: translate(0, 0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(calc(var(--drift-x) * 0.5), calc(var(--drift-y) * 0.5)) scale(1.3);
          }
          100% {
            opacity: 0.2;
            transform: translate(var(--drift-x), var(--drift-y)) scale(1);
          }
        }
        .animate-star-move {
          animation-name: starMove;
        }
      `}</style>
    </div>
  );
}

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentView('about');
      } else if (hash === '#team') {
        setCurrentView('team');
      } else if (hash === '#services') {
        setCurrentView('services');
      } else {
        setCurrentView('home');
        if (hash) {
          // Wait for DOM layout, then scroll to section ID
          setTimeout(() => {
            const el = document.getElementById(hash.substring(1));
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial verification
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Cinematic scroll-fade effect for section-by-section transitions
  useEffect(() => {
    if (currentView !== 'home' || showLoader) return;

    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Sync Lenis with GSAP ticker
    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);

    const fadeConfigurations = [
      { selector: '.home-hero-fade', pinned: false },
      { selector: '.home-editorial-fade-wrap', pinned: false },
      { selector: '.home-services-fade-wrap', pinned: true },
      { selector: '.home-destinations-fade-wrap', pinned: false },
      { selector: '.home-journey-fade-wrap', pinned: false },
      { selector: '.home-contact-fade-wrap', pinned: false },
      { selector: '.home-why-fade-wrap', pinned: false }
    ];

    const ctx = gsap.context(() => {
      fadeConfigurations.forEach(({ selector, pinned }) => {
        const element = document.querySelector(selector);
        if (!element) return;

        gsap.fromTo(element,
          { opacity: 1 },
          {
            opacity: 0.35, // Fade out slightly as the section scrolls away
            ease: 'sine.inOut',
            scrollTrigger: {
              trigger: element,
              start: pinned ? 'bottom bottom' : 'top top',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true
            }
          }
        );
      });
    });

    return () => {
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      ctx.revert();
    };
  }, [currentView, showLoader]);

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#050505',
        overflowX: 'hidden',
        overflowY: 'auto'
      }}
    >
      {/* Fullscreen Loading Experience */}
      {showLoader && (
        <Loader
          onComplete={() => {
            setShowLoader(false);
          }}
        />
      )}

      {/* Floating Transparent Navigation Header */}
      <Header />

      {/* Animated Film Grain Overlay */}
      <div className="film-grain" />

      {/* Cursor-following spotlight */}
      <div className="cursor-glow" />

      {currentView === 'about' ? (
        <ParallaxDemo />
      ) : currentView === 'team' ? (
        <TeamPage />
      ) : currentView === 'services' ? (
        <ServicesPage />
      ) : (
        <>
          {/* Hero Section Container (100% Viewport Height) */}
          <div
            className="home-hero-fade"
            style={{
              position: 'relative',
              width: '100%',
              height: '100vh',
              overflow: 'hidden'
            }}
          >
            {/* Cinematic Living Photograph Experience */}
            <CinematicHero />

            {/* Smooth bottom blend overlay to fade images into the page background */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '250px',
                background: 'linear-gradient(to bottom, transparent 0%, #050505 100%)',
                zIndex: 10,
                pointerEvents: 'none'
              }}
            />

            {/* Minimal Scroll Indicator */}
            <ScrollIndicator />
          </div>

          {/* Minimalist Editorial Section */}
          <div className="home-editorial-fade-wrap">
            <EditorialSection />
          </div>

          {/* Our Expertise Section */}
          <div id="services" className="home-services-fade-wrap">
            <ExpertiseSection />
          </div>

          {/* Destinations Showcase Section */}
          <div 
            id="destinations" 
            className="home-destinations-fade-wrap" 
            style={{ 
              backgroundImage: `linear-gradient(to bottom, #050505 0%, rgba(5, 5, 5, 0.75) 15%, rgba(5, 5, 5, 0.75) 85%, #050505 100%), url(${import.meta.env.BASE_URL}images/space_bg.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '100px 24px 130px 24px', 
              position: 'relative', 
              zIndex: 5 
            }}
          >
            {/* Moving stars space background overlay */}
            <StarryBackground />

            <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center', boxSizing: 'border-box', padding: '0 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}>
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
            <div style={{ position: 'relative', zIndex: 10 }}>
              <DemoOne />
            </div>
          </div>


          {/* Our Journey Section */}
          <div className="home-journey-fade-wrap">
            <OurJourney />
          </div>


          {/* Partner Section */}
          <div id="contact" className="home-contact-fade-wrap">
            <LogoCloudSection />
          </div>

          {/* Why Travinno Grid Section */}
          <div className="home-why-fade-wrap">
            <WhyTravinno />
          </div>
        </>
      )}
    </div>
  );
}

export default App;



