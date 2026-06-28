import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StickyCardsTest() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const viewport = viewportRef.current;
    if (!container || !viewport) return;

    const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
    if (cards.length === 0) return;

    // Set initial positions: Card 1 and 2 start translated fully down
    gsap.set(cards[0], { y: 0 });
    gsap.set(cards[1], { y: window.innerHeight });
    gsap.set(cards[2], { y: window.innerHeight });

    // Single ScrollTrigger + timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => "+=" + (window.innerHeight * 2), // 2 transitions total (Card 1 -> 2 -> 3)
        pin: viewport,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    // Card 2 slides up and overlaps Card 1
    tl.to(cards[1], {
      y: 0,
      duration: 1,
      ease: "none"
    });

    // Card 3 slides up and overlaps Card 2
    tl.to(cards[2], {
      y: 0,
      duration: 1,
      ease: "none"
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '300vh',
        backgroundColor: '#111',
        boxSizing: 'border-box'
      }}
    >
      <div
        ref={viewportRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#050505'
        }}
      >
        {/* Card 1 */}
        <div
          ref={el => { cardRefs.current[0] = el; }}
          style={{
            position: 'absolute',
            width: '80%',
            height: '80%',
            backgroundColor: '#C1121F',
            borderRadius: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#F7F5F2',
            fontFamily: 'sans-serif',
            fontSize: '3rem',
            fontWeight: 'bold',
            zIndex: 1,
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          Card 1
        </div>

        {/* Card 2 */}
        <div
          ref={el => { cardRefs.current[1] = el; }}
          style={{
            position: 'absolute',
            width: '80%',
            height: '80%',
            backgroundColor: '#005f73',
            borderRadius: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#F7F5F2',
            fontFamily: 'sans-serif',
            fontSize: '3rem',
            fontWeight: 'bold',
            zIndex: 2,
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          Card 2
        </div>

        {/* Card 3 */}
        <div
          ref={el => { cardRefs.current[2] = el; }}
          style={{
            position: 'absolute',
            width: '80%',
            height: '80%',
            backgroundColor: '#0a9396',
            borderRadius: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#F7F5F2',
            fontFamily: 'sans-serif',
            fontSize: '3rem',
            fontWeight: 'bold',
            zIndex: 3,
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          Card 3
        </div>
      </div>
    </div>
  );
}
