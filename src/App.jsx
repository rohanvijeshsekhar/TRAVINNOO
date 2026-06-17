import React, { useState, useEffect } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import ScrollIndicator from './components/ScrollIndicator';
import EditorialSection from './components/EditorialSection';
import MilestoneSection from './components/MilestoneSection';
import DestinationShowcase from './components/DestinationShowcase';
import ExpertiseSection from './components/ExpertiseSection';
import WhyTravinno from './components/WhyTravinno';
import TestimonialsSection from './components/TestimonialsSection';
import LogoCloudSection from './components/LogoCloudSection';
import ParallaxDemo from './demos/default';
import Loader from './components/Loader';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentView('about');
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

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000000',
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

      {currentView === 'about' ? (
        <ParallaxDemo />
      ) : (
        <>
          {/* Hero Section Container (100% Viewport Height) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100vh',
              overflow: 'hidden'
            }}
          >
            {/* Cinematic Loop Video Background */}
            <BackgroundVideo src={`${import.meta.env.BASE_URL}video/0615.mp4`} />

            {/* Centered Editorial Content */}
            <ContentSection />

            {/* Minimal Scroll Indicator */}
            <ScrollIndicator />
          </div>

          {/* Minimalist Editorial Section */}
          <EditorialSection />

          {/* Minimalist Milestone Section */}
          <MilestoneSection />

          {/* Destination Showcase Section */}
          <div id="destinations">
            <DestinationShowcase />
          </div>

          {/* Our Expertise Section */}
          <div id="services">
            <ExpertiseSection />
          </div>

          {/* Testimonials Section */}
          <div id="insights">
            <TestimonialsSection />
          </div>

          {/* Partner Section */}
          <div id="contact">
            <LogoCloudSection />
          </div>

          {/* Why Travinno Grid Section */}
          <WhyTravinno />
        </>
      )}
    </div>
  );
}

export default App;



