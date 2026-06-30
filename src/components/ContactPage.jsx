import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle2, ChevronDown, Sparkles, Globe2, Compass, ShieldCheck } from 'lucide-react';

const faderTransition = { duration: 1.2, ease: [0.25, 1, 0.5, 1] };

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneCode: '+971',
    phoneNumber: '',
    destination: '',
    travelType: 'Leisure',
    travelDate: '',
    travellers: 2,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState(null); // 'dubai', 'bangkok', 'delhi'
  const [localTimes, setLocalTimes] = useState({ dubai: '', bangkok: '', delhi: '' });

  // Update live clocks for each hub
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      
      const dubai = new Date(utc + 4 * 3600000);
      const bangkok = new Date(utc + 7 * 3600000);
      const delhi = new Date(utc + 5.5 * 3600000);

      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      setLocalTimes({
        dubai: dubai.toLocaleTimeString('en-US', options),
        bangkok: bangkok.toLocaleTimeString('en-US', options),
        delhi: delhi.toLocaleTimeString('en-US', options)
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!formData.phoneNumber.trim()) {
      tempErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{6,15}$/.test(formData.phoneNumber.trim())) {
      tempErrors.phoneNumber = "Enter a valid phone number (digits only)";
    }
    if (!formData.destination.trim()) tempErrors.destination = "Destination is required";
    if (!formData.travelDate) tempErrors.travelDate = "Preferred date is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Reset form fields
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phoneCode: '+971',
        phoneNumber: '',
        destination: '',
        travelType: 'Leisure',
        travelDate: '',
        travellers: 2,
        message: ''
      });
      setErrors({});
    }
  };

  const incrementTravellers = () => {
    setFormData(prev => ({ ...prev, travellers: prev.travellers + 1 }));
  };

  const decrementTravellers = () => {
    setFormData(prev => ({ ...prev, travellers: Math.max(1, prev.travellers - 1) }));
  };

  return (
    <div style={{ backgroundColor: '#050505', color: '#F5F2EC', width: '100%', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <style>{`
        /* Custom styles for luxury coordinate grid */
        .contact-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(245, 242, 236, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 242, 236, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 1;
        }

        .contact-form-input {
          background: transparent !important;
          border: none !important;
          border-bottom: 1px solid rgba(245, 242, 236, 0.15) !important;
          color: #F5F2EC !important;
          font-family: 'Satoshi', sans-serif !important;
          font-size: 1rem !important;
          padding: 14px 4px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          transition: border-color 0.35s ease !important;
          border-radius: 0 !important;
          outline: none !important;
        }

        .contact-form-input:focus {
          border-bottom: 1px solid #C1121F !important;
        }

        /* Travel Type Pills */
        .travel-pill {
          padding: 10px 20px;
          border: 1px solid rgba(245, 242, 236, 0.12);
          border-radius: 100px;
          font-family: 'Satoshi', sans-serif;
          font-size: 0.85rem;
          color: rgba(245, 242, 236, 0.65);
          cursor: pointer;
          background: transparent;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .travel-pill:hover {
          color: #F5F2EC;
          border-color: rgba(245, 242, 236, 0.3);
          background: rgba(245, 242, 236, 0.03);
        }

        .travel-pill.active {
          color: #F5F2EC;
          border-color: #C1121F;
          background: rgba(193, 18, 31, 0.12);
          box-shadow: 0 0 12px rgba(193, 18, 31, 0.15);
        }

        /* Directory separators */
        .directory-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 24px 0;
          border-bottom: 1px solid rgba(245, 242, 236, 0.08);
          gap: 24px;
        }

        @media (max-width: 767px) {
          .directory-row {
            flex-direction: column;
            gap: 8px;
          }
        }

        /* Animated Curved route for hero */
        @keyframes drawHeroRoute {
          0% { stroke-dashoffset: 1000; }
          70% { stroke-dashoffset: 0; opacity: 1; }
          85% { stroke-dashoffset: 0; opacity: 0; }
          100% { stroke-dashoffset: 1000; opacity: 0; }
        }

        /* CTA Underline Animation */
        .cta-hover-line {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #C1121F;
          transform: scaleX(0.25);
          transform-origin: center;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-trigger:hover .cta-hover-line {
          transform: scaleX(1);
        }
      `}</style>

      {/* Grid overlay */}
      <div className="contact-grid-overlay" />

      {/* SECTION 1 - HERO */}
      <section style={{ position: 'relative', zIndex: 5, padding: '160px 8% 80px 8%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '850px' }}>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.45, y: 0 }}
            transition={faderTransition}
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '3px',
              color: '#F5F2EC',
              marginBottom: '20px'
            }}
          >
            CONTACT US
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...faderTransition, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6.5vw, 4.8rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#F5F2EC',
              margin: '0 0 32px 0'
            }}
          >
            Let’s Plan Your<br />Next Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ ...faderTransition, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.7,
              color: '#F5F2EC',
              margin: '0 0 48px 0',
              maxWidth: '650px',
              fontWeight: 300
            }}
          >
            Whether you’re planning luxury leisure, corporate travel, MICE, or destination management, our team is ready to craft an exceptional experience.
          </motion.p>
        </div>

        {/* Curved animated route line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ width: '100%', maxWidth: '750px', marginTop: '16px' }}
        >
          <svg viewBox="0 0 800 120" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
            {/* Dotted path */}
            <path 
              d="M 20,60 C 120,20 220,100 320,60 C 420,20 520,100 620,60 C 670,40 720,20 780,60" 
              fill="none" 
              stroke="rgba(245, 242, 236, 0.12)" 
              strokeWidth="0.8" 
              strokeDasharray="3 6" 
            />
            {/* Pulsing route */}
            <path 
              d="M 20,60 C 120,20 220,100 320,60 C 420,20 520,100 620,60 C 670,40 720,20 780,60" 
              fill="none" 
              stroke="#C1121F" 
              strokeWidth="1.2" 
              strokeDasharray="1000"
              strokeDashoffset="1000"
              style={{
                animation: 'drawHeroRoute 10s infinite linear'
              }}
            />
            
            {/* Glowing nodes */}
            {[20, 320, 620, 780].map((cx, idx) => (
              <g key={idx} transform={`translate(${cx}, 60)`}>
                <circle cx="0" cy="0" r="2.5" fill="#C1121F" />
                <circle cx="0" cy="0" r="2.5" fill="none" stroke="#C1121F" strokeWidth="0.6">
                  <animate attributeName="r" values="2.5;7;2.5" dur="3s" repeatCount="indefinite" begin={`${idx * 1.5}s`} />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" begin={`${idx * 1.5}s`} />
                </circle>
              </g>
            ))}
          </svg>
        </motion.div>
      </section>

      {/* SECTION 2 - FORM */}
      <section style={{ position: 'relative', zIndex: 5, padding: '40px 8% 80px 8%', maxWidth: '1200px', margin: '0 auto' }}>
        <div 
          style={{
            border: '1px solid rgba(245, 242, 236, 0.08)',
            borderRadius: '14px',
            backgroundColor: 'rgba(255, 255, 255, 0.01)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            padding: 'clamp(24px, 6%, 64px)',
            boxSizing: 'border-box'
          }}
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
              >
                {/* 2-column input fields wrapper */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px 48px' }}>
                  
                  {/* Full Name */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase' }}>Full Name *</label>
                    <input 
                      type="text" 
                      className="contact-form-input" 
                      placeholder="e.g. Alexander Mercer"
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    />
                    {errors.fullName && <span style={{ color: '#C1121F', fontSize: '0.75rem', fontFamily: 'var(--font-sans)', marginTop: '4px' }}>{errors.fullName}</span>}
                  </div>

                  {/* Company Name */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase' }}>Company Name (Optional)</label>
                    <input 
                      type="text" 
                      className="contact-form-input" 
                      placeholder="e.g. Mercer Enterprises"
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                    />
                  </div>

                  {/* Email Address */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase' }}>Email Address *</label>
                    <input 
                      type="email" 
                      className="contact-form-input" 
                      placeholder="alexander@mercer.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                    {errors.email && <span style={{ color: '#C1121F', fontSize: '0.75rem', fontFamily: 'var(--font-sans)', marginTop: '4px' }}>{errors.email}</span>}
                  </div>

                  {/* Phone Number */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase' }}>Phone Number *</label>
                    <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
                      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <select
                          value={formData.phoneCode}
                          onChange={(e) => setFormData(prev => ({ ...prev, phoneCode: e.target.value }))}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            borderBottom: '1px solid rgba(245, 242, 236, 0.15)',
                            color: '#F5F2EC',
                            fontFamily: 'Satoshi, sans-serif',
                            fontSize: '1rem',
                            padding: '14px 20px 14px 4px',
                            cursor: 'pointer',
                            outline: 'none',
                            appearance: 'none',
                            WebkitAppearance: 'none'
                          }}
                        >
                          {['+971', '+66', '+91', '+1', '+44', '+65', '+61', '+33'].map(code => (
                            <option key={code} value={code} style={{ backgroundColor: '#0A0A0C', color: '#F5F2EC' }}>{code}</option>
                          ))}
                        </select>
                        <ChevronDown size={12} style={{ position: 'absolute', right: '4px', pointerEvents: 'none', color: 'rgba(245, 242, 236, 0.45)' }} />
                      </div>
                      <input 
                        type="tel" 
                        className="contact-form-input" 
                        placeholder="50 123 4567"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                      />
                    </div>
                    {errors.phoneNumber && <span style={{ color: '#C1121F', fontSize: '0.75rem', fontFamily: 'var(--font-sans)', marginTop: '4px' }}>{errors.phoneNumber}</span>}
                  </div>

                  {/* Destination */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase' }}>Destination Interested In *</label>
                    <input 
                      type="text" 
                      className="contact-form-input" 
                      placeholder="e.g. Dubai, Thailand, Kerala"
                      value={formData.destination}
                      onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                    />
                    {errors.destination && <span style={{ color: '#C1121F', fontSize: '0.75rem', fontFamily: 'var(--font-sans)', marginTop: '4px' }}>{errors.destination}</span>}
                  </div>

                  {/* Preferred Travel Date */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase' }}>Preferred Travel Date *</label>
                    <input 
                      type="date" 
                      className="contact-form-input" 
                      style={{ colorScheme: 'dark' }}
                      value={formData.travelDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, travelDate: e.target.value }))}
                    />
                    {errors.travelDate && <span style={{ color: '#C1121F', fontSize: '0.75rem', fontFamily: 'var(--font-sans)', marginTop: '4px' }}>{errors.travelDate}</span>}
                  </div>

                  {/* Number of Travellers */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase' }}>Number of Travellers</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid rgba(245, 242, 236, 0.15)', padding: '6px 4px 10px 4px', width: '100%' }}>
                      <button 
                        type="button" 
                        onClick={decrementTravellers}
                        style={{ background: 'transparent', border: '1px solid rgba(245, 242, 236, 0.2)', width: '28px', height: '28px', borderRadius: '50%', color: '#F5F2EC', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >-</button>
                      <span style={{ fontSize: '1.1rem', fontFamily: 'Satoshi, sans-serif', width: '30px', textAlign: 'center' }}>{formData.travellers}</span>
                      <button 
                        type="button" 
                        onClick={incrementTravellers}
                        style={{ background: 'transparent', border: '1px solid rgba(245, 242, 236, 0.2)', width: '28px', height: '28px', borderRadius: '50%', color: '#F5F2EC', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >+</button>
                    </div>
                  </div>

                  {/* Travel Type */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase' }}>Travel Type</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {['Leisure', 'Corporate', 'MICE', 'Group Tours'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`travel-pill ${formData.travelType === type ? 'active' : ''}`}
                          onClick={() => setFormData(prev => ({ ...prev, travelType: type }))}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Message TextArea (large) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                  <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase' }}>Message / Requirements *</label>
                  <textarea 
                    className="contact-form-input" 
                    placeholder="Tell us about your travel plans, ideal pacing, specific properties, and any special requests."
                    style={{ minHeight: '130px', resize: 'vertical' }}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  />
                  {errors.message && <span style={{ color: '#C1121F', fontSize: '0.75rem', fontFamily: 'var(--font-sans)', marginTop: '4px' }}>{errors.message}</span>}
                </div>

                {/* Submit button */}
                <div style={{ alignSelf: 'flex-start', marginTop: '16px' }}>
                  <motion.button
                    type="submit"
                    style={{
                      background: '#C1121F',
                      border: 'none',
                      padding: '16px 36px',
                      borderRadius: '100px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#F5F2EC',
                      letterSpacing: '1.5px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      boxShadow: '0 4px 20px rgba(193, 18, 31, 0.2)'
                    }}
                    whileHover={{ 
                      scale: 1.03, 
                      backgroundColor: '#d61a29',
                      boxShadow: '0 6px 24px rgba(193, 18, 31, 0.35)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Your Journey <ArrowRight size={16} />
                  </motion.button>
                </div>

              </motion.form>
            ) : (
              <motion.div 
                key="success-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(193, 18, 31, 0.12)', border: '1px solid rgba(193, 18, 31, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={30} style={{ color: '#C1121F' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 500, color: '#F5F2EC', margin: 0 }}>Message Received</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6, color: 'rgba(245, 242, 236, 0.65)', maxWidth: '450px', margin: 0 }}>
                  Thank you for reaching out. A Travinno luxury travel specialist will review your request and get in touch within the next 24 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(245, 242, 236, 0.25)',
                    padding: '10px 24px',
                    borderRadius: '100px',
                    color: '#F5F2EC',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    marginTop: '12px',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#C1121F'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(245, 242, 236, 0.25)'}
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 3 - CONTACT DIRECTORY */}
      <section style={{ position: 'relative', zIndex: 5, padding: '60px 8% 80px 8%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px' }}>
          
          {/* Column 1 - Offices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase', marginBottom: '16px' }}>Our Offices</h3>
            
            {/* Dubai HQ */}
            <div className="directory-row">
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#C1121F', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Dubai HQ</span>
                  <span style={{ fontSize: '0.84rem', color: 'rgba(245, 242, 236, 0.65)' }}>Level 15, The Gate District, DIFC, Dubai, UAE</span>
                </div>
              </div>
            </div>

            {/* Thailand Office */}
            <div className="directory-row">
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: 'rgba(245, 242, 236, 0.45)', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Thailand Office</span>
                  <span style={{ fontSize: '0.84rem', color: 'rgba(245, 242, 236, 0.65)' }}>Sukhumvit Road, Khlong Toei, Bangkok, Thailand</span>
                </div>
              </div>
            </div>

            {/* India Office */}
            <div className="directory-row">
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: 'rgba(245, 242, 236, 0.45)', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>India Office</span>
                  <span style={{ fontSize: '0.84rem', color: 'rgba(245, 242, 236, 0.65)' }}>Connaught Place, New Delhi, India</span>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2 - Directs & Availability */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase', marginBottom: '16px' }}>Direct Coordinates</h3>
            
            {/* Email */}
            <div className="directory-row">
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Mail size={16} style={{ color: '#C1121F', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>General Enquiries</span>
                  <a href="mailto:hello@travinno.com" style={{ fontSize: '0.84rem', color: 'rgba(245, 242, 236, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#F5F2EC'} onMouseLeave={(e) => e.target.style.color = 'rgba(245, 242, 236, 0.65)'}>hello@travinno.com</a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="directory-row">
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Phone size={16} style={{ color: '#C1121F', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>24/7 Concierge Hotline</span>
                  <a href="tel:+97141234567" style={{ fontSize: '0.84rem', color: 'rgba(245, 242, 236, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#F5F2EC'} onMouseLeave={(e) => e.target.style.color = 'rgba(245, 242, 236, 0.65)'}>+971 4 123 4567</a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="directory-row" style={{ borderBottom: 'none' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Clock size={16} style={{ color: 'rgba(245, 242, 236, 0.45)', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Working Hours</span>
                  <span style={{ fontSize: '0.84rem', color: 'rgba(245, 242, 236, 0.65)', display: 'block' }}>Monday – Friday | 09:00 – 18:00 (GST)</span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(245, 242, 236, 0.45)', display: 'block', marginTop: '4px' }}>Note: Emergency travel assistance hotline runs 24/7 for active travelers.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4 - INTERACTIVE WORLD PRESENCE */}
      <section style={{ position: 'relative', zIndex: 5, padding: '40px 8% 80px 8%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2px', color: 'rgba(245, 242, 236, 0.45)', textTransform: 'uppercase', marginBottom: '48px' }}>Global Presence</h3>
        
        <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto', border: '1px solid rgba(245, 242, 236, 0.05)', borderRadius: '14px', backgroundColor: 'rgba(255,255,255,0.005)', overflow: 'hidden' }}>
          
          <svg viewBox="0 0 1000 500" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible', opacity: 0.85 }}>
            {/* World Coordinate Dotted Lines */}
            <g stroke="rgba(245, 242, 236, 0.05)" strokeWidth="0.5" strokeDasharray="2 12" fill="none">
              <line x1="50" y1="100" x2="950" y2="100" />
              <line x1="50" y1="200" x2="950" y2="200" />
              <line x1="50" y1="300" x2="950" y2="300" />
              <line x1="50" y1="400" x2="950" y2="400" />
              <line x1="200" y1="20" x2="200" y2="480" />
              <line x1="400" y1="20" x2="400" y2="480" />
              <line x1="600" y1="20" x2="600" y2="480" />
              <line x1="800" y1="20" x2="800" y2="480" />
            </g>

            {/* Symmetrical Network Connection Curves */}
            {/* Dubai (480, 240) <-> Bangkok (640, 280) */}
            <path d="M 480,240 Q 560,230 640,280" fill="none" stroke="#C1121F" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.4" />
            <path d="M 480,240 Q 560,230 640,280" fill="none" stroke="#C1121F" strokeWidth="1" opacity="0.75" strokeDasharray="150" strokeDashoffset="150">
              <animate attributeName="stroke-dashoffset" values="150;0;150" dur="8s" repeatCount="indefinite" />
            </path>

            {/* Dubai (480, 240) <-> New Delhi (570, 200) */}
            <path d="M 480,240 Q 525,195 570,200" fill="none" stroke="#C1121F" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.4" />
            <path d="M 480,240 Q 525,195 570,200" fill="none" stroke="#C1121F" strokeWidth="1" opacity="0.75" strokeDasharray="120" strokeDashoffset="120">
              <animate attributeName="stroke-dashoffset" values="120;0;120" dur="6s" repeatCount="indefinite" />
            </path>

            {/* New Delhi (570, 200) <-> Bangkok (640, 280) */}
            <path d="M 570,200 Q 605,230 640,280" fill="none" stroke="#C1121F" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.4" />
            <path d="M 570,200 Q 605,230 640,280" fill="none" stroke="#C1121F" strokeWidth="1" opacity="0.75" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" values="100;0;100" dur="5s" repeatCount="indefinite" />
            </path>

            {/* Animated Hub Pins */}
            {[
              { id: 'dubai', cx: 480, cy: 240, label: "DUBAI (HQ)", delay: "0s" },
              { id: 'delhi', cx: 570, cy: 200, label: "NEW DELHI", delay: "1.2s" },
              { id: 'bangkok', cx: 640, cy: 280, label: "BANGKOK", delay: "2.4s" }
            ].map(pin => (
              <g 
                key={pin.id} 
                transform={`translate(${pin.cx}, ${pin.cy})`}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setActiveOffice(pin.id)}
                onMouseLeave={() => setActiveOffice(null)}
                onClick={() => setActiveOffice(prev => prev === pin.id ? null : pin.id)}
              >
                {/* Pulse Aura */}
                <circle cx="0" cy="0" r="3" fill="none" stroke="#C1121F" strokeWidth="1.2">
                  <animate attributeName="r" values="3;16;3" dur="4s" repeatCount="indefinite" begin={pin.delay} />
                  <animate attributeName="opacity" values="0.85;0;0.85" dur="4s" repeatCount="indefinite" begin={pin.delay} />
                </circle>
                {/* Main pin dot */}
                <circle cx="0" cy="0" r="4.5" fill="#C1121F" />
                {/* Node Label on map */}
                <text x="0" y="-12" textAnchor="middle" fontSize="6.5" fill="rgba(245, 242, 236, 0.55)" fontFamily="var(--font-mono)" letterSpacing="0.05em">{pin.label}</text>
              </g>
            ))}
          </svg>

          {/* Interactive Popover cards positioned absolute above the map */}
          <div style={{ position: 'absolute', bottom: '24px', left: '24px', textAlign: 'left', zIndex: 10, maxWidth: '280px', width: 'calc(100% - 48px)' }}>
            <AnimatePresence mode="wait">
              {activeOffice ? (
                <motion.div
                  key={activeOffice}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: 'rgba(10, 10, 12, 0.94)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(193, 18, 31, 0.35)',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                >
                  {activeOffice === 'dubai' && (
                    <>
                      <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', color: '#F5F2EC', margin: '0 0 4px 0' }}>DUBAI HQ</h4>
                      <p style={{ fontSize: '0.76rem', color: 'rgba(245, 242, 236, 0.65)', margin: '0 0 12px 0', lineHeight: 1.4 }}>Level 15, The Gate District, DIFC, Dubai, UAE</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(245, 242, 236, 0.08)', paddingTop: '10px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                        <span style={{ color: 'rgba(245, 242, 236, 0.45)' }}>LOCAL TIME:</span>
                        <span style={{ color: '#C1121F', fontWeight: 600 }}>{localTimes.dubai}</span>
                      </div>
                    </>
                  )}
                  {activeOffice === 'delhi' && (
                    <>
                      <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', color: '#F5F2EC', margin: '0 0 4px 0' }}>INDIA OFFICE</h4>
                      <p style={{ fontSize: '0.76rem', color: 'rgba(245, 242, 236, 0.65)', margin: '0 0 12px 0', lineHeight: 1.4 }}>Regal Building, Connaught Place, New Delhi, India</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(245, 242, 236, 0.08)', paddingTop: '10px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                        <span style={{ color: 'rgba(245, 242, 236, 0.45)' }}>LOCAL TIME:</span>
                        <span style={{ color: '#C1121F', fontWeight: 600 }}>{localTimes.delhi}</span>
                      </div>
                    </>
                  )}
                  {activeOffice === 'bangkok' && (
                    <>
                      <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', color: '#F5F2EC', margin: '0 0 4px 0' }}>THAILAND OFFICE</h4>
                      <p style={{ fontSize: '0.76rem', color: 'rgba(245, 242, 236, 0.65)', margin: '0 0 12px 0', lineHeight: 1.4 }}>Sukhumvit Road, Khlong Toei, Bangkok, Thailand</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(245, 242, 236, 0.08)', paddingTop: '10px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                        <span style={{ color: 'rgba(245, 242, 236, 0.45)' }}>LOCAL TIME:</span>
                        <span style={{ color: '#C1121F', fontWeight: 600 }}>{localTimes.bangkok}</span>
                      </div>
                    </>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="default-instruct"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.65 }}
                  exit={{ opacity: 0 }}
                  style={{
                    backgroundColor: 'rgba(10, 10, 12, 0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(245, 242, 236, 0.1)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    fontSize: '0.74rem',
                    color: '#F5F2EC',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  Hover or tap on pins to view live clock coordinates.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SECTION 5 - WHY CONTACT TRAVINNO */}
      <section style={{ position: 'relative', zIndex: 5, padding: '80px 8% 80px 8%', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid rgba(245, 242, 236, 0.05)', borderBottom: '1px solid rgba(245, 242, 236, 0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
          
          {/* Personalized Itineraries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(193, 18, 31, 0.05)', border: '1px solid rgba(193, 18, 31, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} style={{ color: '#C1121F' }} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 500, color: '#F5F2EC', margin: '0 0 8px 0' }}>Bespoke Craftsmanship</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', lineHeight: 1.6, color: 'rgba(245, 242, 236, 0.65)', margin: 0 }}>
                Every single itinerary is custom designed from scratch, aligning properties, transfers, and activities directly to your client's desires.
              </p>
            </div>
          </div>

          {/* Dedicated Destination Experts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(193, 18, 31, 0.05)', border: '1px solid rgba(193, 18, 31, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe2 size={18} style={{ color: '#C1121F' }} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 500, color: '#F5F2EC', margin: '0 0 8px 0' }}>Destination Specialists</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', lineHeight: 1.6, color: 'rgba(245, 242, 236, 0.65)', margin: 0 }}>
                With dedicated boots-on-the-ground offices in Dubai, Bangkok, and Delhi, we bring unmatched local access and operational expertise.
              </p>
            </div>
          </div>

          {/* 24/7 Travel Support */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(193, 18, 31, 0.05)', border: '1px solid rgba(193, 18, 31, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} style={{ color: '#C1121F' }} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 500, color: '#F5F2EC', margin: '0 0 8px 0' }}>24/7 Operations Duty</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', lineHeight: 1.6, color: 'rgba(245, 242, 236, 0.65)', margin: 0 }}>
                A dedicated duty manager monitors every arrival, flight schedule update, and ground transportation coordinate in real-time.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6 - FINAL CTA */}
      <section style={{ position: 'relative', zIndex: 5, padding: '120px 8% 140px 8%', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 500, lineHeight: 1.25, color: '#F5F2EC', margin: '0 0 40px 0' }}>
          Every Extraordinary Journey<br />Begins With A Conversation.
        </h2>
        
        <div style={{ display: 'inline-block', position: 'relative' }} className="cta-trigger">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 350,
                behavior: 'smooth'
              });
            }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#F5F2EC',
              textDecoration: 'none',
              letterSpacing: '1.5px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              paddingBottom: '4px'
            }}
          >
            Start Planning Today <ArrowRight size={16} style={{ color: '#C1121F' }} />
          </a>
          <span className="cta-hover-line" />
        </div>
      </section>
    </div>
  );
}
