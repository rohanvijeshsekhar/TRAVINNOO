import React from 'react';
import { motion } from 'framer-motion';

const whyData = [
  {
    title: 'Local Expertise',
    description: 'Deep destination knowledge backed by experienced teams on the ground across every market we serve.'
  },
  {
    title: 'Trusted Partnerships',
    description: 'Strong relationships with hotels, attractions, transport providers and local suppliers worldwide.'
  },
  {
    title: '24/7 Support',
    description: 'Dedicated operational assistance ensuring every journey runs smoothly from arrival to departure.'
  },
  {
    title: 'Global Network',
    description: 'Supporting travel professionals, corporates and partners across multiple international markets.'
  },
  {
    title: 'Operational Excellence',
    description: 'Meticulous planning, seamless execution and attention to detail at every stage of the journey.'
  },
  {
    title: 'Proven Experience',
    description: 'Over two decades of expertise delivering memorable travel experiences and long-term client relationships.'
  }
];

export default function WhyTravinno() {
  return (
    <section className="why-section">
      <div className="why-container">
        <motion.span
          className="why-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          WHY TRAVINNO
        </motion.span>

        <motion.h2
          className="why-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          Why Travel Professionals<br />Choose Travinno
        </motion.h2>

        <div className="why-grid">
          {whyData.map((item, index) => (
            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 + (index % 3) * 0.12 }}
            >
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
