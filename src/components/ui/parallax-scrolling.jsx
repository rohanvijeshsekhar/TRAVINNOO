import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import AboutJourney from '../AboutJourney';
import AboutStats from '../AboutStats';

export function ParallaxComponent() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 1.2
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

    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !isTouchDevice,
      smoothTouch: false,
      syncTouch: false,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) {
        gsap.killTweensOf(triggerElement);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax" ref={parallaxRef}>
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

      {/* Editorial Content under header */}
      <section className="parallax__content">
        <div style={{
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
          padding: '0 24px',
          color: '#FFFFFF',
          zIndex: 10
        }}>
          <h3 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            marginBottom: '40px',
            lineHeight: 1.2,
            letterSpacing: '-0.02em'
          }}>
            Experience Excellence in Travel with Travinno
          </h3>
          <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginBottom: '48px'
          }}>
            <p style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0
            }}>
              At Travinno, we specialize in crafting high-quality leisure and business travel experiences in the UAE, Thailand, and Kerala. As a Destination Management Company (DMC), we blend local expertise with international standards, curating top attractions, accommodations, and services for tailor-made travel solutions.
            </p>
            <p style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0
            }}>
              Our strength lies in partnerships with clients and a global network of hotels, best attractions, logistics and service providers—ensuring seamless, high-quality experiences. We prioritize individualized care, professionalism, and prompt service, addressing every request with dedication and attention to detail.
            </p>
            <p style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0
            }}>
            </p>
          </div>
        </div>
      </section>
      
      {/* Scroll-Linked Vertical Journey Timeline */}
      <AboutJourney />

      {/* Brand statistics & value proposition section */}
      <AboutStats />
    </div>
  );
}
