import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Data-driven testimonials structured for easy future updates
const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    name: "Alexander Mercer",
    company: "Mercer Estates",
    location: "London, UK",
    rating: 5,
    text: "Travinno orchestrated our corporate retreat in Dubai flawlessly. The level of detail, selection of hotels, and ground handling exceeded all our expectations."
  },
  {
    id: 2,
    name: "Sophia Lorenza",
    company: "Aura Creative",
    location: "Milan, Italy",
    rating: 5,
    text: "The custom Kerala route they designed for our VIP clients was spectacular. Their local expertise and responsiveness are unmatched in B2B travel."
  },
  {
    id: 3,
    name: "David K. Vance",
    company: "Vance & Co.",
    location: "New York, USA",
    rating: 5,
    text: "We have partnered with Travinno for over three years. Their destination representation and contracting rates in Thailand have significantly boosted our margins."
  },
  {
    id: 4,
    name: "Jean-Pierre Blanc",
    company: "Elysée Voyages",
    location: "Paris, France",
    rating: 5,
    text: "A truly extraordinary DMC. Their attention to bespoke details and luxury fleet of vehicles in Dubai made our high-end group tour seamless and prestigious."
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    company: "Pacific Horizons",
    location: "Tokyo, Japan",
    rating: 5,
    text: "Professional, reliable, and deeply knowledgeable. Travinno is our go-to partner for all group bookings and MICE events in the Southeast Asia region."
  },
  {
    id: 6,
    name: "Amara Al-Jamil",
    company: "Apex Global",
    location: "Dubai, UAE",
    rating: 5,
    text: "Their corporate travel team operates with absolute precision. Round-the-clock support, custom luxury transfers, and smooth bookings every single time."
  }
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

function TestimonialCard({ item }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {Array.from({ length: item.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      
      <p className="testimonial-text">
        "{item.text}"
      </p>
      
      <div className="testimonial-footer">
        <span className="testimonial-name">{item.name}</span>
        {(item.company || item.location) && (
          <span className="testimonial-meta">
            {item.company} {item.company && item.location && "•"} {item.location}
          </span>
        )}
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    import('../lib/db').then(({ db }) => {
      setTestimonialsData(db.getTestimonials());
      const handleUpdate = () => setTestimonialsData(db.getTestimonials());
      window.addEventListener('travinno-db-update', handleUpdate);
      return () => window.removeEventListener('travinno-db-update', handleUpdate);
    });
  }, []);
  return (
    <section className="testimonials-section">
      
      {/* Editorial Header */}
      <div className="testimonials-header-container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="testimonials-pill"
          >
            <span className="testimonials-pill-dot" />
            TRUSTED WORLDWIDE
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="testimonials-heading"
          >
            <span>Stories That</span>
            <span className="testimonials-gradient-text testimonials-allura-text">Build Trust</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.65, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="testimonials-sub"
          >
            Unfiltered reflections from travel partners who have experienced our extraordinary journeys.
          </motion.p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Wrapper */}
      <div className="testimonials-marquee-wrapper">
        <div className="testimonials-marquee-track">
          
          {/* First complete set of cards */}
          <div className="testimonials-marquee-content">
            {testimonialsData.map((item) => (
              <TestimonialCard key={`set1-${item.id}`} item={item} />
            ))}
          </div>

          {/* Duplicated set of cards for seamless loop */}
          <div className="testimonials-marquee-content">
            {testimonialsData.map((item) => (
              <TestimonialCard key={`set2-${item.id}`} item={item} />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}

export default React.memo(TestimonialsSection);
