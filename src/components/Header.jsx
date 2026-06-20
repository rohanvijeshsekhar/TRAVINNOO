import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null); // 'company', 'destinations', or null
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);

  const companyItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' }
  ];

  const destinationItems = [
    { name: 'Dubai', index: 0 },
    { name: 'Thailand', index: 1 },
    { name: 'Singapore', index: 2 },
    { name: 'Malaysia', index: 3 },
    { name: 'Vietnam', index: 4 },
    { name: 'Kenya', index: 5 },
    { name: 'Bali', index: 6 }
  ];

  const handleDestinationClick = (e, index) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const mapSection = document.querySelector('.map-route-section');
    if (mapSection) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const rect = mapSection.getBoundingClientRect();
      const startY = rect.top + scrollTop;
      
      // Total scroll range pinned for map is 6.5 * window.innerHeight
      const totalScrollRange = window.innerHeight * 6.5;
      const targetFraction = index / 6;
      const targetY = startY + targetFraction * totalScrollRange + 5;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: 'easeOut', delay: 0.1 }}
      className="header-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '24px 6%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        pointerEvents: 'auto',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
        border: 'none',
        boxShadow: 'none'
      }}
    >
      {/* Brand Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a 
          href="#" 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <img 
            src={logoImg} 
            alt="TRAVINNO Logo" 
            style={{ 
              height: '36px', 
              width: 'auto',
              display: 'block'
            }} 
          />
        </a>
      </div>

      {/* Desktop Menu Navigation Links (matching screenshot layout) */}
      <div className="desktop-nav-container">
        <nav style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
          
          {/* Link: Home */}
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              opacity: 0.8,
              padding: '6px 0',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.color = 'var(--accent-red)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            Home
          </a>

          {/* Dropdown: Company */}
          <div
            onMouseEnter={() => setHoveredMenu('company')}
            onMouseLeave={() => setHoveredMenu(null)}
            style={{ position: 'relative', paddingBottom: '10px', marginTop: '10px' }}
          >
            <a
              href="#about"
              onClick={(e) => e.preventDefault()}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: hoveredMenu === 'company' ? 'var(--accent-red)' : 'var(--text-primary)',
                textDecoration: 'none',
                opacity: hoveredMenu === 'company' ? 1 : 0.8,
                padding: '6px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.3s ease'
              }}
            >
              Company
              <span style={{ fontSize: '0.55rem', transition: 'transform 0.3s ease', transform: hoveredMenu === 'company' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
            </a>
            
            <AnimatePresence>
              {hoveredMenu === 'company' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '200px',
                    backgroundColor: 'rgba(10, 10, 12, 0.96)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
                    padding: '16px 0',
                    marginTop: '0px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 1000
                  }}
                >
                  {companyItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      style={{
                        padding: '10px 24px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        borderLeft: '2px solid transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.backgroundColor = 'rgba(234, 28, 41, 0.06)';
                        e.currentTarget.style.borderLeftColor = 'var(--accent-red)';
                        e.currentTarget.style.paddingLeft = '28px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderLeftColor = 'transparent';
                        e.currentTarget.style.paddingLeft = '24px';
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dropdown: Destinations */}
          <div
            onMouseEnter={() => setHoveredMenu('destinations')}
            onMouseLeave={() => setHoveredMenu(null)}
            style={{ position: 'relative', paddingBottom: '10px', marginTop: '10px' }}
          >
            <a
              href="#destinations"
              onClick={(e) => e.preventDefault()}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: hoveredMenu === 'destinations' ? 'var(--accent-red)' : 'var(--text-primary)',
                textDecoration: 'none',
                opacity: hoveredMenu === 'destinations' ? 1 : 0.8,
                padding: '6px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.3s ease'
              }}
            >
              Destinations
              <span style={{ fontSize: '0.55rem', transition: 'transform 0.3s ease', transform: hoveredMenu === 'destinations' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
            </a>
            
            <AnimatePresence>
              {hoveredMenu === 'destinations' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '200px',
                    backgroundColor: 'rgba(10, 10, 12, 0.96)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
                    padding: '16px 0',
                    marginTop: '0px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 1000
                  }}
                >
                  {destinationItems.map((item) => (
                    <a
                      key={item.name}
                      href={`#${item.name.toLowerCase()}`}
                      onClick={(e) => handleDestinationClick(e, item.index)}
                      style={{
                        padding: '10px 24px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        borderLeft: '2px solid transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.backgroundColor = 'rgba(234, 28, 41, 0.06)';
                        e.currentTarget.style.borderLeftColor = 'var(--accent-red)';
                        e.currentTarget.style.paddingLeft = '28px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderLeftColor = 'transparent';
                        e.currentTarget.style.paddingLeft = '24px';
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Link: Contact */}
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              opacity: 0.8,
              padding: '6px 0',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.color = 'var(--accent-red)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            Contact
          </a>

        </nav>
      </div>

      {/* Right side CTA Button (Partner Portal) - Solid Blue Rectangle */}
      <div className="desktop-portal-container">
        <a
          href="#partner-portal"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            backgroundColor: 'var(--accent-blue)',
            textDecoration: 'none',
            padding: '12px 26px',
            borderRadius: '0px',
            display: 'block',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#0B1220';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-blue)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          Partner Portal
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
        aria-label="Toggle Navigation Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="mobile-menu-overlay"
            style={{
              padding: '100px 8% 40px 8%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {/* Mobile Home */}
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="mobile-nav-link"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.25rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '12px 0'
              }}
            >
              Home
            </a>

            {/* Mobile Company Accordion */}
            <div style={{ width: '100%' }}>
              <button 
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '12px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                Company 
                <span style={{ fontSize: '0.8rem' }}>{mobileCompanyOpen ? '▲' : '▼'}</span>
              </button>
              
              <AnimatePresence>
                {mobileCompanyOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      paddingLeft: '20px',
                      gap: '8px',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {companyItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          padding: '8px 0',
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '0.95rem',
                          textDecoration: 'none',
                          fontFamily: 'var(--font-sans)',
                          letterSpacing: '1px'
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Destinations Accordion */}
            <div style={{ width: '100%' }}>
              <button 
                onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '12px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                Destinations 
                <span style={{ fontSize: '0.8rem' }}>{mobileDestinationsOpen ? '▲' : '▼'}</span>
              </button>
              
              <AnimatePresence>
                {mobileDestinationsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      paddingLeft: '20px',
                      gap: '8px',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {destinationItems.map((item) => (
                      <a
                        key={item.name}
                        href={`#${item.name.toLowerCase()}`}
                        onClick={(e) => handleDestinationClick(e, item.index)}
                        style={{
                          padding: '8px 0',
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '0.95rem',
                          textDecoration: 'none',
                          fontFamily: 'var(--font-sans)',
                          letterSpacing: '1px'
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Contact */}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="mobile-nav-link"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.25rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '12px 0'
              }}
            >
              Contact
            </a>

            {/* Mobile Portal CTA */}
            <a
              href="#partner-portal"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-portal-btn"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                backgroundColor: 'var(--accent-blue)',
                textDecoration: 'none',
                padding: '14px 0',
                textAlign: 'center',
                marginTop: '20px',
                borderRadius: '0px'
              }}
            >
              Partner Portal
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
