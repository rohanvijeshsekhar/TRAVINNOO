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
  const [showLoader, setShowLoader] = useState(true);

  // Lock logic: disabled to allow full access when hosted
  const isLockedMode = false;



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

    const ctx = gsap.context(() => {
      // Disabled section opacity fade-out animations to keep sections fully bright, readable, and premium
    });

    return () => {
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      window.lenis = null;
      ctx.revert();
    };
  }, [currentView, showLoader]);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#050505',
        overflowX: 'hidden'
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

          {/* Our Expertise Section */}
          <div id="services" className="home-services-fade-wrap">
            <ExpertiseSection />
          </div>

          {/* Destinations Showcase Section Placeholder */}
          <section id="destinations-placeholder" style={{ minHeight: '100px', backgroundColor: '#050505' }} />


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



