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
  const [showLoader, setShowLoader] = useState(true);

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
    <div style={{ width: '100%', backgroundColor: '#050505' }}>
      <div style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontFamily: 'sans-serif', fontSize: '1.5rem' }}>
        Scroll Down to Start Sticky Test (Localhost Verification)
      </div>
      <StickyCardsTest />
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontFamily: 'sans-serif', fontSize: '1.5rem', backgroundColor: '#222' }}>
        End of Sticky Card Test
      </div>
    </div>
  );
}

export default App;



