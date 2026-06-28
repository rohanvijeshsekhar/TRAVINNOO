import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';
import CinematicHero from './components/CinematicHero';
import Loader from './components/Loader';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import EditorialSection from './components/EditorialSection';
import ExpertiseSection from './components/ExpertiseSection';
import DestinationStorySection from './components/ui/destination-story-section';
import StickyCardsTest from './components/ui/sticky-cards-test';
import OurJourney from './components/OurJourney';
import LogoCloudSection from './components/LogoCloudSection';
import WhyTravinno from './components/WhyTravinno';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
const ParallaxDemo     = lazy(() => import('./demos/default'));
const TeamPage         = lazy(() => import('./components/TeamPage'));
const ServicesPage     = lazy(() => import('./components/ServicesPage'));



// Detect touch/mobile once at module level (stable, no re-detection needed)
const IS_TOUCH_DEVICE = typeof window !== 'undefined'
  ? window.matchMedia('(hover: none) and (pointer: coarse)').matches
  : false;

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [showLoader, setShowLoader] = useState(false);

  // Lock logic: disabled to allow full access when hosted
  const isLockedMode = false;

  const starsContainerRef = useRef(null);

  // Starry sky background movement state — fewer stars on mobile
  const [stars] = useState(() => {
    const count = IS_TOUCH_DEVICE ? 20 : 45;
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
        const stars = container.querySelectorAll('.drifting-twinkle-star');
        const state = entry.isIntersecting ? 'running' : 'paused';
        stars.forEach(s => { s.style.animationPlayState = state; });
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (isLockedMode) {
        // Locked mode: Force view to remain on home page
        setCurrentView('home');
        if (hash && hash !== '#about' && hash !== '#team' && hash !== '#services') {
          setTimeout(() => {
            const el = document.getElementById(hash.substring(1));
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        }
      } else {
        // Normal mode (development)
        if (hash === '#about') {
          setCurrentView('about');
        } else if (hash === '#team') {
          setCurrentView('team');
        } else if (hash === '#services') {
          setCurrentView('services');
        } else {
          setCurrentView('home');
          if (hash) {
            setTimeout(() => {
              const el = document.getElementById(hash.substring(1));
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }, 150);
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial verification
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [isLockedMode]);

  useEffect(() => {
    // Only register mousemove listener on desktop/pointer devices to avoid performance lag on mobile
    if (!window.matchMedia('(hover: hover)').matches) {
      return;
    }

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
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Detect real touch/mobile device (not desktop Chrome DevTools)
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    // Initialize Lenis smooth scroll
    // smoothTouch and syncTouch are DISABLED on real mobile — they intercept native
    // momentum scrolling and run JS-driven scroll on the main thread, causing severe jank.
    // Temporarily disabled Lenis smooth scroll for debugging
    /*
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !isTouchDevice,
      smoothTouch: false,
      syncTouch: false,
    });
    window.lenis = lenis;

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Sync Lenis with GSAP ticker
    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    */

    const ctx = gsap.context(() => {
      // Disabled section opacity fade-out animations to keep sections fully bright, readable, and premium
    });

    return () => {
      // gsap.ticker.remove(tickerUpdate);
      // lenis.destroy();
      // window.lenis = null;
      ctx.revert();
    };
  }, [currentView, showLoader]);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#050505',
        // 'overflow: clip' prevents horizontal overflow without creating a new
        // scroll container. Unlike overflowX:'hidden' (which implicitly sets
        // overflow-y:auto and creates a new containing block for position:fixed),
        // 'clip' does NOT establish a scroll container, so GSAP's position:fixed
        // pin correctly anchors to the viewport — not this wrapper.
        overflowX: 'clip'
      }}
    >
      {/* Fullscreen Loading Experience */}
      {showLoader && (
        <Loader
          onComplete={() => {
            setShowLoader(false);
            window.dispatchEvent(new Event('travinnoLoaderComplete'));
          }}
        />
      )}

      {/* Floating Transparent Navigation Header */}
      <Header />

      {/* Animated Film Grain Overlay — hidden on mobile via CSS */}
      <div className="film-grain" />

      {/* Cursor-following spotlight — desktop only (mousemove already gated, but skip DOM on mobile) */}
      {!IS_TOUCH_DEVICE && <div className="cursor-glow" />}

      {currentView === 'about' ? (
        <Suspense fallback={null}><ParallaxDemo /></Suspense>
      ) : currentView === 'team' ? (
        <Suspense fallback={null}><TeamPage /></Suspense>
      ) : currentView === 'services' ? (
        <Suspense fallback={null}><ServicesPage /></Suspense>
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

          {/* Destinations Showcase Section */}
          <div
            id="destinations"
            className="home-destinations-fade-wrap destinations-section"
            style={{
              backgroundColor: '#050505',
              padding: '100px 24px 0 24px',
              position: 'relative',
              zIndex: 5
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
              <StickyCardsTest />
            </div>
          </div>

          {/* Our Expertise Section */}
          <div id="services" className="home-services-fade-wrap">
            <ExpertiseSection />
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



