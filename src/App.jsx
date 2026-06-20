import React, { useState, useEffect } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import ScrollIndicator from './components/ScrollIndicator';
import EditorialSection from './components/EditorialSection';
import OurJourney from './components/OurJourney';
import ExpertiseSection from './components/ExpertiseSection';
import DestinationShowcase from './components/DestinationShowcase';
import WhyTravinno from './components/WhyTravinno';
import TestimonialsSection from './components/TestimonialsSection';
import LogoCloudSection from './components/LogoCloudSection';
import ParallaxDemo from './demos/default';
import Loader from './components/Loader';
import TeamPage from './components/TeamPage';
import ServicesPage from './components/ServicesPage';
import CinematicHero from './components/CinematicHero';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

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

    const fadeConfigurations = [
      { selector: '.home-hero-fade', pinned: false },
      { selector: '.home-editorial-fade-wrap', pinned: false },
      { selector: '.home-services-fade-wrap', pinned: true },
      { selector: '#destinations-fade-wrap', pinned: true },
      { selector: '.home-journey-fade-wrap', pinned: false },
      { selector: '.home-insights-fade-wrap', pinned: false },
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

    return () => ctx.revert();
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
          <div id="destinations-fade-wrap">
            <DestinationShowcase />
          </div>

          {/* Our Journey Section */}
          <div className="home-journey-fade-wrap">
            <OurJourney />
          </div>

          {/* Testimonials Section */}
          <div id="insights" className="home-insights-fade-wrap">
            <TestimonialsSection />
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



