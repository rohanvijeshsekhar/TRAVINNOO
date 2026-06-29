"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface PulseMarker {
  id: string
  location: [number, number]
  delay: number
}

interface GlobePulseProps {
  markers?: PulseMarker[]
  className?: string
  speed?: number
}

// Markers positioned across the 7 main travel destinations
const defaultMarkers: PulseMarker[] = [
  { id: "pulse-dubai", location: [25.2048, 55.2708], delay: 0 },
  { id: "pulse-kenya", location: [-1.2921, 36.8219], delay: 0.5 },
  { id: "pulse-thailand", location: [13.7563, 100.5018], delay: 1.0 },
  { id: "pulse-malaysia", location: [3.1390, 101.6869], delay: 1.5 },
  { id: "pulse-singapore", location: [1.3521, 103.8198], delay: 2.0 },
  { id: "pulse-vietnam", location: [21.0285, 105.8542], delay: 2.5 },
  { id: "pulse-bali", location: [-8.4095, 115.1889], delay: 3.0 }
]

export function GlobePulse({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
}: GlobePulseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    window.addEventListener("pointercancel", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
      window.removeEventListener("pointercancel", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 1.57
    let currentWidth = canvas.offsetWidth
    let isVisible = false
    let isLoopRunning = false

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const currentSpeed = isMobile ? speed * 2.5 : speed;

    function animate() {
      if (!isVisible) {
        isLoopRunning = false
        return
      }
      isLoopRunning = true
      if (!isPausedRef.current && globe) {
        phi += currentSpeed
        globe.update({
          width: currentWidth,
          height: currentWidth,
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        })
      }
      animationId = requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        const nextVisible = entry.isIntersecting
        if (nextVisible !== isVisible) {
          isVisible = nextVisible
          if (isVisible && !isLoopRunning && globe) {
            animate()
          }
        }
      }
    }, { threshold: 0.05 })
    
    observer.observe(canvas)

    function init(initialWidth: number) {
      if (globe) return

      const mapSamples = isMobile ? 6000 : 12000;

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: initialWidth,
        height: initialWidth,
        phi: 1.57,
        theta: 0.2,
        dark: 1,
        diffuse: 1.5,
        mapSamples,
        mapBrightness: 10,
        baseColor: [0.35, 0.12, 0.12],        // Subtle dark red/brown landmasses
        markerColor: [0.95, 0.22, 0.22],      // Bright crimson markers
        glowColor: [0.08, 0.02, 0.02],        // Soft atmospheric red glow
        markerElevation: 0,
        markers: markers.map((m) => ({ location: m.location, size: 0.025, id: m.id })),
        arcs: [],
        arcColor: [0.95, 0.3, 0.3],
        arcWidth: 0.5,
        arcHeight: 0.25,
        opacity: 0.8,
      })

      if (isVisible && !isLoopRunning) {
        animate()
      }
      setTimeout(() => canvas && (canvas.style.opacity = "1"))
    }

    const ro = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      const newWidth = entry.contentRect.width
      if (newWidth > 0) {
        currentWidth = newWidth
        if (!globe) {
          init(newWidth)
        }
      }
    })
    ro.observe(canvas)

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
      ro.disconnect()
      observer.disconnect()
    }
  }, [markers, speed])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <style>{`
        @keyframes pulse-expand {
          0% { transform: scaleX(0.3) scaleY(0.3); opacity: 0.8; }
          100% { transform: scaleX(1.5) scaleY(1.5); opacity: 0; }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      {markers.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            // @ts-expect-error CSS Anchor Positioning
            positionAnchor: `--cobe-${m.id}`,
            bottom: "anchor(center)",
            left: "anchor(center)",
            translate: "-50% 50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none" as const,
            opacity: `var(--cobe-visible-${m.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
            transition: "opacity 0.4s, filter 0.4s",
          }}
        >
          <span style={{
            position: "absolute",
            inset: 0,
            border: "2px solid #FF4D4D", // Reddish touch pulsing ring
            borderRadius: "50%",
            opacity: 0,
            animation: `pulse-expand 2s ease-out infinite ${m.delay}s`,
          }} />
          <span style={{
            position: "absolute",
            inset: 0,
            border: "2px solid #FF4D4D",
            borderRadius: "50%",
            opacity: 0,
            animation: `pulse-expand 2s ease-out infinite ${m.delay + 0.5}s`,
          }} />
          <span style={{
            width: 10,
            height: 10,
            background: "#FF4D4D", // Red center dot
            borderRadius: "50%",
            boxShadow: "0 0 0 3px #111, 0 0 0 5px #FF4D4D",
          }} />
        </div>
      ))}
    </div>
  )
}
