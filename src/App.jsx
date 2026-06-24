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
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import spaceStarsImg from './assets/space_stars.png';



function App() {
  const [currentView, setCurrentView] = useState('home');
  const [showLoader, setShowLoader] = useState(true);

  // Starry sky background movement state
  const [stars] = useState(() =>
    Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 1.2,
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 8 + 5}s`
    }))
  );

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

    const ctx = gsap.context(() => {
      // Disabled section opacity fade-out animations to keep sections fully bright, readable, and premium
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
              backgroundColor: '#050505',
              padding: '100px 24px 0 24px',
              position: 'relative',
              clipPath: 'inset(0 0 0 0)',
              WebkitClipPath: 'inset(0 0 0 0)',
              zIndex: 5,
              overflow: 'hidden'
            }}
          >
            {/* Fixed Background Starry Sky */}
            <div 
              style={{
                position: 'fixed',
                inset: 0,
                backgroundImage: `linear-gradient(to bottom, rgba(5, 5, 5, 0.45) 0%, rgba(5, 5, 5, 0.45) 100%), url(${spaceStarsImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            />

            {/* Fixed Twinkling & Drifting Stars */}
            <div 
              style={{ 
                position: 'fixed', 
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
          <div className="home-contact-fade-wrap">
            <LogoCloudSection />
          </div>

          {/* Why Travinno Grid Section */}
          <div className="home-why-fade-wrap">
            <WhyTravinno />
          </div>

          {/* Contact CTA Section */}
          <div className="home-contact-cta-fade-wrap">
            <ContactCTA />
          </div>

          {/* Footer Section */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;



