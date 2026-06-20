import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function LogoCloudSection() {
  return (
    <section className="logo-cloud-section">
      <div className="section-blend-overlay blend-to-05" />
      <div className="logo-cloud-container">
        <motion.h2
          className="logo-cloud-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Partner
        </motion.h2>
        <motion.p
          className="logo-cloud-intro"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          Companies we collaborate with.
        </motion.p>

        {/* Logo Grid */}
        <motion.div
          className="logo-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
        >
          {/* Card 1: Nvidia */}
          <div className="logo-card bg-secondary-cell">
            <img
              src="https://svgl.app/library/nvidia-wordmark-light.svg"
              alt="Nvidia Logo"
              className="logo-img"
              loading="lazy"
            />
            <Plus className="logo-plus-icon bottom-right" strokeWidth={1} />
          </div>

          {/* Card 2: Supabase */}
          <div className="logo-card">
            <img
              src="https://svgl.app/library/supabase_wordmark_light.svg"
              alt="Supabase Logo"
              className="logo-img"
              loading="lazy"
            />
          </div>

          {/* Card 3: GitHub */}
          <div className="logo-card bg-secondary-cell">
            <img
              src="https://svgl.app/library/github_wordmark_light.svg"
              alt="GitHub Logo"
              className="logo-img"
              loading="lazy"
            />
            <Plus className="logo-plus-icon bottom-right" strokeWidth={1} />
            <Plus className="logo-plus-icon bottom-left hidden md:block" strokeWidth={1} />
          </div>

          {/* Card 4: OpenAI */}
          <div className="logo-card bg-secondary-mobile-only">
            <img
              src="https://svgl.app/library/openai_wordmark_light.svg"
              alt="OpenAI Logo"
              className="logo-img"
              loading="lazy"
            />
          </div>

          {/* Card 5: Turso */}
          <div className="logo-card bg-secondary-mobile-only">
            <img
              src="https://svgl.app/library/turso-wordmark-light.svg"
              alt="Turso Logo"
              className="logo-img"
              loading="lazy"
            />
            <Plus className="logo-plus-icon bottom-right md:hidden" strokeWidth={1} />
          </div>

          {/* Card 6: Clerk */}
          <div className="logo-card bg-secondary-desktop-only">
            <img
              src="https://svgl.app/library/clerk-wordmark-light.svg"
              alt="Clerk Logo"
              className="logo-img"
              loading="lazy"
            />
          </div>

          {/* Card 7: Claude AI */}
          <div className="logo-card">
            <img
              src="https://svgl.app/library/claude-ai-wordmark-icon_light.svg"
              alt="Claude AI Logo"
              className="logo-img"
              loading="lazy"
            />
          </div>

          {/* Card 8: Vercel */}
          <div className="logo-card bg-secondary-cell">
            <img
              src="https://svgl.app/library/vercel_wordmark.svg"
              alt="Vercel Logo"
              className="logo-img"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
