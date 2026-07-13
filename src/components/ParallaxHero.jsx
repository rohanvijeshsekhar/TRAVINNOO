"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ParallaxHero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    return () => {
      if (triggerElement) {
        ScrollTrigger.getAll().forEach(st => {
          if (st.vars.trigger === triggerElement) {
            st.kill();
          }
        });
        gsap.killTweensOf(triggerElement);
      }
    };
  }, []);

  return (
    <div ref={parallaxRef} style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow"></div>
          <div data-parallax-layers className="parallax__layers">
            {/* Background Layer 1 - Unsplash mountain backdrop */}
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
              loading="eager" 
              width="800" 
              data-parallax-layer="1" 
              alt="" 
              aria-hidden="true" 
              className="parallax__layer-img" 
            />
            {/* Midground Layer 2 - Osmo transparent midground hills */}
            <img 
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp" 
              loading="eager" 
              width="800" 
              data-parallax-layer="2" 
              alt="" 
              aria-hidden="true" 
              className="parallax__layer-img" 
            />
            {/* Text Title Layer 3 */}
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title">JOURNEY</h2>
            </div>
            {/* Foreground Layer 4 - Osmo transparent foreground forest */}
            <img 
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp" 
              loading="eager" 
              width="800" 
              data-parallax-layer="4" 
              alt="" 
              aria-hidden="true" 
              className="parallax__layer-img" 
            />
          </div>
          <div className="parallax__fade"></div>
        </div>
      </section>
    </div>
  );
}
